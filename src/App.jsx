import { useState } from 'react'
// import DisplayTimer from './components/DisplayTimer'

import './App.css'
import Timer from './components/Timer'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>

      <div>

        {/* <DisplayTimer /> */}
        <Timer time={20} />
        <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </div>

    </div>
  )
}

export default App
