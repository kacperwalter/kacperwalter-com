import React from "react"

const TagName = ({ type, children }) => {
  return React.createElement(type, { className: type }, children)
}

const Heading = ({ type = 'h1', children }) => {
  return (
    <TagName type={type}>
      {children}
    </TagName>
  )
}

export default Heading