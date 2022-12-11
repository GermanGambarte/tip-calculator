import { Display } from './components/Display'
import { Form } from './components/Form'
import logo from './assets/logo.svg'
const App = () => {
  return (
    <div className="wrapper">
      <img alt="Splitter Logo" src={logo} />
      <div className="container">
        <Form />
        <Display />
      </div>
    </div>
  )
}

export default App
