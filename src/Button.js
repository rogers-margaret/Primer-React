import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {mapWhitespaceProps} from './props'

function Button({
  tag: Tag = 'button',
  children,
  size,
  block,
  linkStyle,
  grouped,
  scheme,
  onClick,
  disabled,
  ...rest
}) {
  const {className} = mapWhitespaceProps(rest)
  const classes = classnames(
    className,
    {
      btn: !linkStyle,
      'btn-link': linkStyle,
      'btn-sm': size === 'sm',
      'btn-large': size === 'large',
      'btn-block': block,
      'BtnGroup-item': grouped
    },
    scheme ? `btn-${scheme}` : null
  )

  return (
    <Tag {...rest} type="button" disabled={disabled} onClick={disabled ? undefined : onClick} className={classes}>
      {children}
    </Tag>
  )
}

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  grouped: PropTypes.bool,
  linkStyle: PropTypes.bool,
  onClick: PropTypes.func,
  scheme: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'large']),
  tag: PropTypes.oneOf(['button', 'a', 'summary'])
}

export default Button
