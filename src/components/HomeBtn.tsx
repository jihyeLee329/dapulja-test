import { Link } from 'react-router-dom'

export default function HomeBtn() {
  const linkStyle = {
    display: 'block',
    width: '50vw',
    margin: '30px auto 0',
    padding: '15px',
    color: '#fff',
    textDecoration: 'none',
    background: '#0E2526',
    borderRadius: '5px'
  }
  return (
    <Link to='/' style={linkStyle}>
      홈으로
    </Link>
  )
}
