import React, { useState } from 'react';


function App() {
  const [copy,setCopy]=useState(false)
  const text="LK237";
  return (
    <div className="App">
      <img src="/img/index1.png" alt="1xbet" className='img'/>
      <p className='title'>Best Promo Code </p>
      <div className='btns'> 
        <button className="btn" > {text} </button>
        <button className={copy?"btn fill":"btn2"} onClick={()=>{setCopy(!copy)
                navigator.clipboard.writeText("LK237")
          }} > {copy?"Copied":"Click to Copy"} </button>
      </div>
      <div className='imgBlock'>
        <div className='img-block'>
          <img src="/img/index1.jpg" alt="1xbet" className='img'/>
          <img src="/img/index.png" alt="1xbet" className='img'/>
          <img src="/img/index3.jpg" alt="1xbet" className='img'/>
        </div>
        <div className='comment'>
          
        </div>
      </div>
     
    </div>
  )
}

export default App;
