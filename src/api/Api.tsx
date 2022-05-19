import axios from 'axios'

const BASE_URL = `https://solution-tmp.s3.ap-northeast-2.amazonaws.com/vocabs.json`

export function VocaList() {
  axios({
    url: `https://cors-anywhere.herokuapp.com/${BASE_URL}`, // 통신할 웹문서
    method: 'get', // 통신할 방식
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
}
