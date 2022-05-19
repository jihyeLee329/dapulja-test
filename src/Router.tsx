import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import QuizSession from './routes/QuizSession'
import WordList from './routes/WordList'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='quiz' element={<QuizSession />} />
      <Route path='wordlist' element={<WordList />} />
    </Routes>
  )
}
