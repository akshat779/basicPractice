import './App.css'
import PostById from './postById'
import PostComponent from './postComponent'
import CreatePost from './Createpost'
import { useState } from 'react'
function App() {
  const [toggle, setToggle] = useState(true)
 
  
  
  return (
    <>
      {/* <button onClick={handleToggle}>Toggle</button> */}
      {/* <input type="number" value={id} onChange={(e) => setid(e.target.value)} /> */}
      {/* {
       <PostById id={3} />
      } */}
      <CreatePost />
      <PostComponent /> 
      {/* <button onClick={handleSubmit}>submit</button> */}

    
    </>
  )
}

export default App
