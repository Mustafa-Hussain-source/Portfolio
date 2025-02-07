import { useState } from 'react'
import './App.css'
import Page1 from './components//Page1/Page1'
import Page2 from './components/Page2/Page2'
import Page3 from './components/Page3/Page3'
import Page4 from './components/Page4/Page4'

function App() {

  return (
    <>
      <div className="container">
        <div className="Page1">
        <nav>
            <h1>Mustafa</h1>
            <div className="sections">
                <a href='#Page1'>Home</a>
                <a href='#Page2'>Projects & Skills</a>
                <a href="#Page3">Education</a>
                    </div>
            <div className="github">
                <a href="https://github.com/Mustafa-Hussain">GitHub</a>/<a href="http://www.linkedin.com/in/mustafa-hussain-b60b9534b/">LinkedIn</a>
            </div>
            
        </nav><hr />
          <Page1 />
        </div>
        <Page2 />
        <Page3 />
        <Page4 />
      </div>
    </>
  )
}

export default App
