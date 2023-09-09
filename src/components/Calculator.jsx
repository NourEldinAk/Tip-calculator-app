import React, { useState } from 'react'
import Functions from './Functions'
import Screen from './Screen'

const Calculator = () => {
  const [bill, setBill] = useState('')
  const [person, setPerson] = useState('')
  const [total, setTotal] = useState(0)
  const [tip, setTip] = useState(0)
  const [removeButtonStyle, setRemoveButtonStyle] = useState(false)

  const billObj = {
    bill:bill,
    handleBill:setBill,
    person:person,
    handlePerson:setPerson,
    total: total,
    handleTotal: setTotal,
    tip:tip,
    handleTip:setTip,
    removeButtonStyle:removeButtonStyle,
    handleButtonStyle:setRemoveButtonStyle
  }
  return (
    <div className="bg-white h-[400px]
     w-[800px] flex p-9 rounded-3xl
     justify-between
     max-[800px]:mobile-design
     ">
        <Functions props={billObj} />
        <Screen props={billObj}/>

    </div>
  )
}

export default Calculator