import './App.css'
import Card from './components/Card'

function App() {

  return (
   <div className='box'>
             <h1>Products</h1>
             <div className="ota">
              <Card bg="#CBCBCB" btn="#A5A5A5"/>
              <Card bg="#5CA7FF" btn="#FFC700"/>
              <Card bg="#D083FF"  btn="#00FFB2"/>
              <Card bg="#FF99E2"  btn="#FFF500"/>
              <Card bg="#C5C1C7"  btn="#00FFB2"/>
              <Card bg="#5CFF62"  btn="#FFC700"/>
             </div>
   </div>
  )
}

export default App
