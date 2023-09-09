import React, { useEffect, useState } from 'react'

const Screen = ({props}) => {

  const [isActive, setIsActive] = useState(false)
  
  useEffect(()=>{
    if(props.total !== 0)
    setIsActive(true)

  },[props.total])

  const handleReset=()=>{
    props.handleBill('')
    props.handlePerson('')
    props.handleTip(0)
    props.handleTotal(0)
    props.handleButtonStyle(true)
  }
  return (
    <div className='w-[50%] max-[800px]:w-full h-full bg-[#00474b] text-white 
    rounded-lg pt-11 pb-9 flex flex-col gap-10'>
      <div className='screen-content'>
        <h1 className='text-xs leading-relaxed'>Tip Amount <br/><span className='span'>/ person</span></h1>
        <p className='text-3xl text-primary'> 
        ${Number(props.tip).toFixed(2)}
        </p>
      </div>
      <div className='screen-content'>
        <h1 className='text-xs'>Total<br/><span className='span'>/ person</span></h1>
        <p className='text-3xl text-primary '>${props.total.toFixed(2)}</p>
      </div>

      <button 
      onClick={handleReset}
      className={`screen-button ${isActive? '': 'opacity-25 cursor-not-allowed text-opacity-50'}`}>Reset</button>
    </div>
  )
}

export default Screen