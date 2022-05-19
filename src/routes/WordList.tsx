import { useEffect, useState } from 'react'
import axios from 'axios'
import WordView from '../components/WordView'
import { Word } from '../types'
import styled from 'styled-components'
import HomeBtn from '../components/HomeBtn'
import {VocaList, vocas} from '../api/Api'
import { useQuery } from 'react-query'
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
  > span {
    color:#0e2526;
    display: inline-block;
    width: 50%;
    padding: 15px;
    text-align: center;
    background:rgba(238,238,238,0.5);
    & + span {
    }
  }
`

function WordList() {
  const {isLoading : loading, data : wordList} = useQuery<Word[]>("wordList", VocaList);
// const [voca, setVoca] = useState(vocas);
//  const [loading, setLoading] = useState(false);
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
