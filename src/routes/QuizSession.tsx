import { useState, useEffect } from 'react'
import { State, Action } from '../types'
import QuizSessionView from '../components/QuizSessionView'
import HomeBtn from '../components/HomeBtn'

function quizSessionReducer(state: State, action: Action) {
  // TODO
  // 선택한 선지에 따라
  // state 값이 변경되어야 함.
  // 예를 들어, 퀴즈 결과가 생성되고
  // 맞은 혹은 틀린 개수가 업데이트 되고,
  // 다음 퀴즈로 넘어가야 함.
  const newState = { ...state }
  return newState
}

function QuizSession() {
  const [initalLoaded, setInitalLoaded] = useState(false) //초기 로딩 여부
  const [state, setState] = useState<State | null>(null)

  const initState: () => Promise<State> = async () => {
    // 임시로 1초간 타임 아웃.
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // TODO
    // initialData를 State 타입으로 변경 후 리턴한다.
    // quizList[].selections 을 만드는 조건은
    // 해당 단어의 뜻 하나와 다른 단어의 뜻 둘을 포함하여
    // 3지 선다형 뜻 찾기 문제 보기로 변환한다.
    // 아래 데이터는 예시 데이터이므로 삭제.
    return {
      isCompleted: false,
      correctCount: 0,
      inCorrectCount: 0,
      currentIndex: 0,
      quizList: [
        {
          index: 0,
          text: 'apple',
          answer: 'n. 사과',
          selections: ['n. 사과', 'n. 밀가루 반죽']
        },
        {
          index: 1,
          text: 'brick',
          answer: 'n. 벽돌',
          selections: ['n. 벽돌', 'v. 뛰다, 급증하다']
        }
      ],
      quizResults: []
    }
  }

  useEffect(() => {
    ;(async () => {
      // 초기 데이터 불러오기
      if (!initalLoaded) {
        const initalState = await initState()
        setState(initalState)
        setInitalLoaded(true)
      }
    })()
  }, [initalLoaded])

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
          <HomeBtn />
        </>
      ) : (
        '로딩중...'
      )}
    </div>
  )
}

export default QuizSession
