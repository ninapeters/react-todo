import Todo from './Todo'
import Button from './Button'

function App() {
  return (
    <div className="App">
      <Todo title="Coffee" isDone />
      <Todo title="Milk" />
      <Todo title="Honey" />
      <Button>Klick hier</Button>
      <Button color="deeppink" />
    </div>
  )
}

export default App
