import React from 'react'
import './Page2.css'
import { forwardRef } from "react";

const Page2 = forwardRef((props, ref) => {
  return (
    <div className='container' id='Page2'>
        <h1>Key Projects</h1>
        <br />
        <div className="cards">
            <div className="card" id="card1">
                <h1>Drum-Kit</h1>
                <p>The Drum Kit project is an interactive web application that emulates a virtual drum set, allowing users to play various drum sounds directly in their browser. Developed using HTML, CSS, and JavaScript, this application offers an engaging platform for users to explore rhythm and music creation.</p>
                <a href="https://github.com/Mustafa-Hussain-source/Drum-Kit"><button>&lt;&gt; Source Code</button></a>
                
            </div>
            <div className="card" id="card2">
                <h1>Simon-Game</h1>
                <p>The Simon Game is a web-based rendition of the classic memory challenge, developed using HTML, CSS, and JavaScript. Players are tasked with memorizing and replicating sequences of colors and sounds that become progressively more complex with each round. </p>
                <a href="https://github.com/Mustafa-Hussain-source/Simon-Game"><button>&lt; &gt; Source Code</button></a>
            </div>
            <div className="card" id="card3">
                <h1>Data-Science</h1>
                <p>The Data Science Project is an in-depth analysis of Netflix's movie and TV show catalog, utilizing Python and its data analysis libraries. This project aims to uncover insights into the streaming giant's content distribution, genre popularity, and release trends.</p>
                <a href="https://github.com/Mustafa-Hussain-source/DataScience_Project"><button>&lt; &gt; Source Code</button></a>
            </div>
            <div className="card" id="card4">
                <h1>Hot Module Replacement</h1>
                <p>This setup offers a streamlined environment for React development, featuring Hot Module Replacement (HMR) and a set of ESLint configurations to maintain code quality.</p>
                <a href="https://github.com/Mustafa-Hussain-source/vite-react"><button>&lt; &gt; Source Code</button></a>
            </div>
            <div className="card" id="card5">
                <h1>Description</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima recusandae ut nihil obcaecati distinctio exercitationem maxime maiores quos libero. Rerum alias et labore animi cumque nihil porro vel culpa amet!</p>
                <button href="#">&lt; &gt; Source Code</button>
            </div>
        </div>
        <br />
        <div className="skills">
            <h1>Skills</h1>
            <div className="lang">
                <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="" />
                <img src="https://w7.pngwing.com/pngs/4/808/png-transparent-css3-css3-logo-logo-language-programming-language-css-3d-icon-thumbnail.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                <img src="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png" alt="" />
                <img src="https://images.seeklogo.com/logo-png/38/2/bootstrap-5-logo-png_seeklogo-386607.png" alt="" />
                <img src="https://e7.pngegg.com/pngimages/465/779/png-clipart-blue-and-white-c-logo-the-c-programming-language-computer-programming-computer-icons-programmer-blue-angle.png" alt="" />
                <img src="https://pluralsight.imgix.net/paths/path-icons/c-plus-plus-93c7ddd5cc.png" alt="" />
                <img src="https://w7.pngwing.com/pngs/140/948/png-transparent-blue-and-yellow-logo-python-logo-programmer-fierce-python-s-cdr-angle-text-thumbnail.png" alt="" />
            </div><br />
        </div>
      
    </div>
  )
})

export default Page2
