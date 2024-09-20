import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="max-w-md max-h-md bg-cyan-800">
        <p>devrepofinder</p>


        <div className="bg-cyan-700 flex flex-row items-center">
          <input className="bg-cyan-700 text-white" placeholder="Search Github Username">
          </input>
          <button className="p-2 bg-sky-500 text-white">Search</button>
        </div>

        <div>
          <div className="flex flex-row">
            <img src=''/>
            <div>
              <p>name</p>
              <p>username</p>
              <p>Joined Date</p>
            </div>
          </div>
          <p>this the paragraph bio</p>

          <div className="flex flex-row">
            <div>
              <p>Repos</p>
              <span>8</span>
            </div>
            <div>
              <p>Followers</p>
              <span>290</span>
            </div>
            <div>
              <p>Following</p>
              <span>800</span>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row">
          <div>
            <p> <span></span>Location</p>
            <p> <span></span>Link</p>
          </div>
          <div>
            <p> <span></span>twitter</p>
            <p> <span></span>Location</p>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
