import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const Button = styled.button`
  padding: 20px;
  background: ${({ color = 'plum' }) => color};
  font-size: 1.4em;
`

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Button
