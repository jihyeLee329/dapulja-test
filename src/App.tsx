import Router from './Router'


function App() {
  const Wrapper:object = {
    textAlign:'center',
   marginTop:'30px'
  }
  return (
    <section style={Wrapper}>
      <h1 style={{marginBottom:'50px'}}>다풀자 영단어</h1>
      <Router />
    </section>
  )
}

export default App
