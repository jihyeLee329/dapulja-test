import HomeBtn from "../components/HomeBtn";

export default function QuizResult(){
  const correct =  localStorage.getItem('correct');
  const inCorrect = localStorage.getItem('inCorrect');
    return <div>
        <div>맞은 개수 : {correct}</div> 
        <div>틀린 개수 : {inCorrect}</div> 
        <HomeBtn />
    </div>
}