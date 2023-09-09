import React, { useEffect, useState } from 'react'
import dollar_icon from '../assets/icon-dollar.svg'
import person_icon from '../assets/icon-person.svg'

const Functions = ({props}) => {
  const [activeButton, setActiveButton] = useState('')
  const [isZero, setIsZero] = useState(false)
  const [customTip, setCustomTip] = useState('')
  const [tipAmount, setTipAmount] = useState(0)
  const currentButton=(e)=>{

    if(activeButton === '' || activeButton !== e.target.name ){
    setTipAmount(Number(e.target.name)/100)
    setActiveButton(e.target.name)
    setCustomTip('')
  }
    
    else{
    setTipAmount(0)
    setActiveButton('')
    }
  }

  useEffect(()=>{
    if(Number(props.person) ===0 && props.person !== '' ){

      setIsZero(true)
    }else{
      setIsZero(false)
    }
    if(props.person==='' && activeButton!== ''){
      props.handleTotal(0)
      props.handleTip(0)
    }
  },[props.person])

  useEffect(()=>{
    if(props.person>0){
      props.handleTotal(props.bill/props.person)
      props.handleTip((props.bill*tipAmount)/props.person)
    }
    if(props.bill ===''){
      setCustomTip('')
    }
    if(props.removeButtonStyle ){
      setTipAmount(0)
      setActiveButton('')
      props.handleButtonStyle(false)
    }
  },[props.bill, props.person,tipAmount,props.total])
  
  
  useEffect(()=>{
      if(customTip !== '' ){
        props.handleTip(0)
        setActiveButton('')
        setTipAmount(Number(customTip)/100)
      }

  },[customTip,props.bill])
  

  return (
    <div className='w-[44%] max-[800px]:w-full max-[800px]:gap-8 flex flex-col gap-4'>
      <div className='sm-container relative'>
        <h2 className="sm-header">Bill</h2>
        <div>
        <img src={dollar_icon} height={14} width={10} className='img '  alt="dollar" />
        <input className='input px-4 outline-primary'
         type="text" placeholder='0'
         value={props.bill}
         onChange={(e)=>{props.handleBill(e.target.value)}}
         />
        </div>
      </div>

      <div className='sm-container'>
        <h2 className="sm-header">Select Tip %</h2>
        <div className='tip-container max-[800px]:grid-cols-2'>
          <button className={`${activeButton==='5'? 'active' : 'not-active'}`} name='5'  onClick={currentButton}>5%</button>
          <button className={`${activeButton==='10'? 'active' : 'not-active'}`} name='10' onClick={currentButton}>10%</button>
          <button className={`${activeButton==='15'? 'active' : 'not-active'}`} name='15' onClick={currentButton}>15%</button>
          <button className={`${activeButton==='25'? 'active' : 'not-active'}`} name='25' onClick={currentButton}>25%</button>
          <button className={`${activeButton==='50'? 'active' : 'not-active'}`} name='50' onClick={currentButton}>50%</button>
          <input className='input text-center placeholder-darkGrayishCyan outline-primary'
           type="text" placeholder='Custom' value={customTip} onChange={(e)=>{setCustomTip(e.target.value)}} />
        </div>
      </div>
      
      <div className='sm-container relative'>
        <div className='flex justify-between'>
        <h2 className="sm-header">Number Of People</h2>
        <span className={`text-sm text-red-500 ${isZero? 'show':'hidden'}`}>Can't be zero</span>  
        </div>
        <div>
        <img src={person_icon} height={16} width={11} className='img' alt="person" />
        <input className={`input px-4 ${isZero?'outline-red-500' : 'outline-primary'}`}
        value={props.person}
        onChange={(e)=>{props.handlePerson(e.target.value)}}
        type="text"  placeholder='0'/>
        </div>

      </div>
    </div>
  )
}

export default Functions