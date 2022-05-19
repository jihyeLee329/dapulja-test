import { useEffect, useState } from 'react'
import axios from 'axios'
import WordView from '../components/WordView'
import { Word } from '../types'
import styled from 'styled-components'
import HomeBtn from '../components/HomeBtn'

// TODO
// 훅을 이용해서, 화면이 로드되면 아래 주소에서 단어를 들고와서 화면에 표시
// 아래 샘플 단어를 대체해야 함.
// https://solution-tmp.s3.ap-northeast-2.amazonaws.com/vocabs.json
// warning!
// 만약 어떠한 이유로 작동이 되지 않는다면, 그 문제를 우회해서
// 전체 기능이 동작하도록 코드를 구현.
const WordWrapHeader = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #0e2526;
  > span {
    display: inline-block;
    width: 50%;
    padding: 5px 10px;
    text-align: center;
    & + span {
      border-left: 1px solid #0e2526;
    }
  }
`

function WordList() {
  const BASE_URL = `https://solution-tmp.s3.ap-northeast-2.amazonaws.com/vocabs.json`
  const [wordList, setWordList] = useState<Word[]>() //단어 목록
  const [loading, setLoading] = useState(false) //로딩 여부
  const [error, setError] = useState(null) //error 여부

  const fetchVocaList = async () => {
    try {
      setError(null)
      setWordList([])
      setLoading(true)
      const response = await axios({
        url: `https://cors-anywhere.herokuapp.com/${BASE_URL}`, // 통신할 웹문서
        method: 'get', // 통신할 방식
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      setWordList(response.data)
      setLoading(false)
    } catch (e) {
      console.log(error)
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchVocaList()
  }, [])

  const wordListStyle = {
    margin: '20px',
    border: '1px solid #0e2526'
  }
  return (
    <section>
      {loading ? (
        '로딩 중...'
      ) : (
        <>
          <div style={wordListStyle}>
            <WordWrapHeader>
              <span>단어</span>
              <span>뜻</span>
            </WordWrapHeader>
            {wordList?.map((word) => (
              <WordView {...word} key={word.text} />
            ))}
          </div>
          <HomeBtn />
        </>
      )}
    </section>
  )
}

export default WordList
