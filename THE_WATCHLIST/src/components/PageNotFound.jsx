import React from 'react'
import {Link} from "react-router-dom"

function PageNotFound() {
  return (
    <div>
      Error(404):PageNotFound
      <div>
        <Link to="/"><button>Back To Homepage</button></Link>
      </div>
    </div>
  )
}

export default PageNotFound
