/* eslint-disable react/prop-types */
import s from './style.module.css'

export const Button = ({ handelSubmit ,children}) => {

  
  return ( 
  <button onClick={handelSubmit('wowsss')} className={s.btn} >
    {children}</button>
  )
}
