type Word = {
  meaning: string
  text: string
}

// State
type Quiz = {
  index: number
  text: string // 문제
  answer: string // 정답
  selections: string[] // 보기 목록 (정답 포함), 2지 선다
}

type State = {
  isCompleted: boolean // computed
  correctCount: number // computed
  inCorrectCount: number // computed
  currentIndex: number // computed
  quizList: Quiz[]
  quizResults: QuizResult[]
}

type QuizResult = {
  quizIndex: number
  createdAt: Date
  answer: string // 정답
  selected: string // 선택한 답
  isCorrect: boolean // 정답여부
}


// Action

// Select 동작방식
// 선지를 선택하면, 새로운 퀴즈결과가 생기고,
// 다음 문제로 넘어가야 한다.
type Select = {
  type: 'SELECT'
  payload: {
    quizIndex: number
    selected: string
  }
}

type Action = Select

export type { Word, Quiz, QuizResult, State, Action }
