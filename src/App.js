import React from 'react'
import './App.css'
import img from './login/images/skcet.jpeg'
const App = () => {
  return (
    <>
    <div className='text'>
    <h1 className='title'>Sri Krishna College of Engineering And Technology</h1>
    <img src={img} alt="error" className='image'></img>
    <p>Do visit us here: <a href="https://www.skcet.ac.in/">skcet</a></p><br/>
    <h3>DETAILS:</h3>
    <h4>Name : Kasthuri Krishna L M</h4>
    <h4>Dept : B.E.CSE(Cybersecurity)</h4>
    <h5>DEPARTMENTS:</h5>
    <list className='lists'>
    <ol>
    <li>Cybersecurity</li>
    <li>CSE</li>
    <li>IT</li>
    <li>CSD</li>
    <li>AIDS</li>
    </ol>
    <ul>
    <li>Cybersecurity</li>
    <li>CSE</li>
    <li>IT</li>
    <li>CSD</li>
    <li>AIDS</li>
    </ul>
    <dl>
    <dt>CYS:</dt>
    <dd>B.E.CSE(CYBERSECURITY) is a full time course at skcet since 2022</dd>
    <dd>Currently we are having react js training for our 3rd sem</dd>
    </dl>
    </list>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/1jkszm02PbY?si=1Gr5RjEXRRZQnv2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </>
  )
}
export default App