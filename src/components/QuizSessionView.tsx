import { State, Quiz } from '../types'
import styled from 'styled-components'
import HomeBtn from './HomeBtn'
// View


const ButtonStyle = styled.button`
    outline:none;
    border:none;
    background:#fff;
    padding:5px 10px; 
    border-radius:5px;
    height:50px; 
    line-height:1.2;
    &:active {border:1px solid green; box-sizing:border-box;}
    margin: 0 10px;
  `
export default function QuizSessionView(state: State, onClick: (selected: string) => void) {

  // state : 내가 만들어준 배열들
  function QuizView(quiz: Quiz) {
    const articleStyle = {
      marginTop: '20px',
      padding: '20px 10px',
      background: '#FFD300',
      fontWeight:'bold'
    }

    const headerStyle={
      marginBottom:'15px',
      color:'#fff',
      fontSize:'25px'
    }
    const buttonWrapStyle={
      display:'flex',
      justifyContent:'center',
      margin:'0 auto',
      fontSize: '12px',
      
    }
    // console.log(quiz)
    // quize=> text, answer, index, selections
    // sel :  quizList.selections  를 의미. 
    // quiz.text : 현재 나온 퀴즈 
    // 1. quiz.text == sel  &&  correctCount ++ ;
    // 2. 맞으면 맞는 것에 background :green 추가, 틀리면 color:red로 표시 && inCorretCount ++ ;
    // 3. 눌렀을 때 위 로직이 거치면, 하나의 {안에 추가해주고, 계속 더해주기}
    // quizIndex: number
    // createdAt: Date
    // answer: string // 정답
    // selected: string // 선택한 답
    // isCorrect: boolean // 정답여부

    return (
      <article style={articleStyle}>
        <header style={headerStyle}>{quiz.text}</header>
        <div style={buttonWrapStyle}>
        {quiz.selections.map((sel, idx) => {
          return (
            <ButtonStyle key={idx} onClick={(e)=> {
              onClick(sel);
            } }>
              {sel} 
            </ButtonStyle>
          )
        })}
        </div>
      </article>
    )
  }

  const currentQuiz = state.quizList[state.currentIndex];
  const resultBox = {
    lineHeight:1.5, 
    fontSize:'18px'
  }
  if(state.isCompleted){
    localStorage.setItem('correct',String(state.correctCount));
    localStorage.setItem('inCorrect',String(state.inCorrectCount));
  }

  return (
    <section style={resultBox}>
      <div>완료 여부 : {state.isCompleted ? '완료' : '미완료'}</div>
      <div>맞은 개수 {state.correctCount}</div>
      <div>틀린 개수 {state.inCorrectCount}</div>
      {state.isCompleted ? <HomeBtn /> : QuizView(currentQuiz)}
    </section>
  )
}
