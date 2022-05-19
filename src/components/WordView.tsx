import { Word } from '../types'
import styled from 'styled-components'

const WordWrap = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  align-items: middle;
  border-bottom: none;
  > span {
    color : #0e2526;
    display: inline-block;
    width: 50%;
    padding: 10px;
    text-align: left;
  }
`

export default function WordView({ text, meaning }: Word) {
  return (
    <>
      <WordWrap>
        <span>{text}</span>
        <span>{meaning}</span>
      </WordWrap>
    </>
  )
}
