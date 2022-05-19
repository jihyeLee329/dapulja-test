import HomeBtn from "../components/HomeBtn";
import styled from 'styled-components';

const Box = styled.div`
  background:#fff;
  border-radius:20px; 
  padding: 20px;
  > div { color:#000; line-height:40px; font-size:20px; }
`;

export default function QuizResult(){
  const correct =  localStorage.getItem('correct');
  const inCorrect = localStorage.getItem('inCorrect');
    return <Box>
        <div>맞은 개수 : {correct}</div> 
        <div>틀린 개수 : {inCorrect}</div> 
        <HomeBtn />
    </Box>
}