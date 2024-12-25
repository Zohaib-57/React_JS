import './App.css'
import Title from './Title'
import { Discription } from './Title'
import CurlyBrace from './CurlyBrace'
function App() {

  return (
    <> {/*  this is parent opening tags called as react fragment*/ }
    <h1>Hello World</h1>
    <button>Hello,There:</button>
    <Title />  {/*rendered the title component*/}
    <Discription />
    <CurlyBrace />

    {/*  this is parent closing tags called as react fragment*/ } 
    </>
  )
}

export default App
