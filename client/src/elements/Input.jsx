/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react"

export const Input = ({type, name, handelChange,value='' }) => {

  const [date, setDate] = useState('')




  return (
    <> 
        <label htmlFor={name}>{name}</label>
        <input type={type} 
        placeholder={`Write your ${name}`}  
        name={name}
        value={date || value}
        onChange={(e)=>{
          handelChange(e.target)
          setDate(e.target.value)
        }
        }

        />
    </>
  )
}
