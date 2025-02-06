import Header from "../Header"

import "./Template.css"

function Template({ children }) {
  return (
    <div className="container-fluid">
      <Header />
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Template
