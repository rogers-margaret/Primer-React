import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {withSystemProps, COMMON} from './system-props'

const schemeMap = {
  green: 'success',
  red: 'error',
  yellow: 'warn'
}

function Flash({children, className, full, scheme, ...rest}) {
  const classes = classnames(
    className,
    'flash',
    full && 'flash-full',
    scheme && `flash-${schemeMap[scheme]}`
  )
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Flash.propTypes = {
  children: PropTypes.node,
  full: PropTypes.bool,
  scheme: PropTypes.oneOf(Object.keys(schemeMap))
}

export default withSystemProps(Flash, COMMON)
