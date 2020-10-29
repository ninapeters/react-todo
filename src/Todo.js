import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

export default Todo

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
}

function Todo({ title, isDone }) {
  return (
    <TodoWrapper>
      <label>
        <input type="checkbox" checked={isDone} />
        {title}
      </label>
    </TodoWrapper>
  )
}

const TodoWrapper = styled.div`
  font-size: 2em;
  color: cornflowerblue;
  input {
    width: 2em;
    height: 2em;
  }
`
