import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'

//
// int main(void) for the achievements application.
// Import and run.
//
export const main = ({
  rootId = 'captains-log'
} = {}) => {
  let root = document.getElementById(rootId)

  if (!root) {
    root = document.createElement('div')
    root.id = rootId
    document.body.appendChild(root)
  }

  ReactDOM.render(
    <App />,
    root
  )
}

export default main
