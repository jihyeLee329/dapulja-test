import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import QuizResult from './routes/QuizResult'
import QuizSession from './routes/QuizSession'
import WordList from './routes/WordList'
import styled from 'styled-components'
const Box = styled.div`
  background:#fff; 
  border-radius:20px; 
  padding:20px;
  margin-bottom:30px;
  > a { background:#eee;}

`;

export default function Router() {
  return (
    <Box >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='quiz' element={<QuizSession/>} />
        <Route path='wordlist' element={<WordList />} />
        <Route path='result' element={<QuizResult />} />
    </Routes>
    </Box>
  )
}
