import axios from 'axios'
const BASE_URL = `https://solution-tmp.s3.ap-northeast-2.amazonaws.com/vocabs.json`;
export const VocaList = async () => {
  try{
    const response = await axios({
      url: `https://cors-anywhere.herokuapp.com/${BASE_URL}`, // 통신할 웹문서
      method: 'get', // 통신할 방식
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    return response.data;
  }catch(err){
    console.log(err)
  }
}



export const vocas = 
[
  {
    "text": "apple",
    "meaning": "a. 사과"
  },
  {
    "text": "brick",
    "meaning": "n. 벽돌"
  },
  {
    "text": "completion",
    "meaning": "n. 완성, 성취"
  },
  {
    "text": "obstacle",
    "meaning": "n. 장애물"
  },
  {
    "text": "horn",
    "meaning": "n. 뿔, 경적"
  },
  {
    "text": "dough",
    "meaning": "n. 밀가루 반죽"
  },
  {
    "text": "leap",
    "meaning": "v. 뛰다, 급증하다."
  },
  {
    "text": "pearl",
    "meaning": "n. 진주, 진주색"
  },
  {
    "text": "tourism",
    "meaning": "n. 관광, 관광 사업"
  },
  {
    "text": "persisent",
    "meaning": "a. 지속적인, 끈질긴"
  }
]