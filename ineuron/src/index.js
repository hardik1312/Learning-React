import ReactDOM from 'react-dom'
import './index.css'

function Ineuron() {
  return (
  <div className='hardik'>
  <h1>React is best.</h1>
  <Blockchain/>
  <Blockchain/>
  <Blockchain/>
  <Blockchain/>
  <ReactJS/>
  </div>
  )
}

const Blockchain = () => {
  return <h4>React and Blockchain is a deadly combo.</h4>
}

const ReactJS = () => {
  return <h4>Learning ReactJS can get us more pay. FOCUS is key.</h4>
}

ReactDOM.render(<Ineuron></Ineuron>, document.getElementById('root'))