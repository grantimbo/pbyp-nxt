import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ children, activeClassName, partialMatch, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''
  let className;
  if(partialMatch){
    className =
    asPath.includes(props.href) || asPath.includes(props.as)
      ? `${activeClassName}`.trim()
      : childClassName
  }else{
    className =
    asPath === props.href || asPath === props.as
      ? `${activeClassName}`.trim()
      : childClassName
  }

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink