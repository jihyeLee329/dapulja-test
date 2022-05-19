import { useState, useEffect } from 'react'
import { State, Action, Word, Quiz, QuizResult } from '../types'
import QuizSessionView from '../components/QuizSessionView'
import { useQuery } from 'react-query'
import { VocaList,vocas } from '../api/Api'


//눌러서 새로운  state에 포함 
function quizSessionReducer(state: State, action: Action) {
  // TODO
  // 선택한 선지에 따라
  // state 값이 변경되어야 함.
  // 예를 들어, 퀴즈 결과가 생성되고
  // 맞은 혹은 틀린 개수가 업데이트 되고,
  // 다음 퀴즈로 넘어가야 함.
  
  // 누를떄마다 currentIndex 증가 
  state.currentIndex += 1;
  //data는 10갠데 currentIndex가 데이터수보다 높아지면 isCompleted= true
  if(state.currentIndex> 9){
    state.isCompleted = true
  }
  
  let quizCorrect = false;

  if(state.quizList[action.payload.quizIndex].answer == action.payload.selected){
    quizCorrect = true;
    state.correctCount += 1;
  }else{
    quizCorrect = false;
    state.inCorrectCount += 1; 
  }



  let quizResult:QuizResult ={
    quizIndex: action.payload.quizIndex,
    createdAt: new Date(),
    answer: state.quizList[action.payload.quizIndex].answer, // 정답
    selected: action.payload.selected, // 선택한 답
    isCorrect: quizCorrect, 
  };

  

  state.quizResults.push(quizResult);
  const newState = { ...state}
  return newState
}
function QuizSession() {
  const [initalLoaded, setInitalLoaded] = useState(false) //초기 로딩 여부
  const {isLoading , data : wordList} = useQuery<Word[]>("wordList", VocaList);
  const [voca, setVoca] = useState(vocas); //임시 word List json 
  const [quizList, setQuizList] = useState<Quiz[]>([]); //새로 만든 quiz 리스트 
  const [state, setState] = useState<State | null>(null);
  
  const wordListLength = voca?.length; //voca data 수 
  function random (length:number){ 
    return  Math.floor(Math.random()* length);
  }
  //voca 수만큼 돌면서 새로운 배열 만들어주기
  let quizLists = voca!.map((word, idx)=>{
    let newObj:Quiz = {
      'text' : word.text,
      'index' : idx,
      'answer' : word.meaning,
      'selections' : [word.meaning, voca[random(wordListLength)].meaning, voca[random(wordListLength)].meaning ]
    };
    return newObj;
  });
  useEffect(()=>{
    setQuizList(quizLists);
    setInitalLoaded(!initalLoaded);
  },[])

    let initalState = {
      'isCompleted' : false,
      'correctCount' : 0,
      'inCorrectCount' : 0,  
      'currentIndex' : 0,
      quizList,
      quizResults :[]
    };

useEffect(()=>{
  if(initalLoaded){
    setState(initalState);
    setInitalLoaded(!initalLoaded);
  }
},[initalState]);

  //   // TODO
  //   // initialData를 State 타입으로 변경 후 리턴한다.
  //   // quizList[].selections 을 만드는 조건은
  //   // 해당 단어의 뜻 하나와 다른 단어의 뜻 둘을 포함하여
  //   // 3지 선다형 뜻 찾기 문제 보기로 변환한다.
  //   // 아래 데이터는 예시 데이터이므로 삭제.

  //   // 퀴즈리스트 만들기 : 받아온 데이터 wordList 를 map 으로 돌려서 , 
  //   // 하나의 각각 리스트를 만들기. 
  //   // 현재 인덱스 = data.index, text: data.text, answer : data.meaning, 
  //   // selections : [data.meaning,  data.random(0~데이터수까지)[랜덤] ,data.random(0~데이터수까지)[랜덤] ] ;
  //   // quizList  한 번씩 돌면서,  
  //   // 1. 답 선택하면 완료여부(isCompleted 바꾸고)
  //   // 2. 선택한 답이 answer과 같으면 corretCount ++ / 아니면 inCorretCount ++ 
  //   // 3. currentIndex : quizList의 index 찍어주기

  //퀴즈 정답 눌러따 
  const quizSelected = (selected: string) => {
    if (state == null) return

    const newState = quizSessionReducer(state, {
      type: 'SELECT',
      payload: {
        quizIndex: state.currentIndex,
        selected: selected
      }
    })
    setState(newState)
  }
 

  
  return (
    <div>
      {state ? (
        <>
          {QuizSessionView(state, quizSelected)}
        </>
      ) : (
        '로딩중...'
      )}
    </div>
  )
}

export default QuizSession

