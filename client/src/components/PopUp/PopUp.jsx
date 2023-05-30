import s from './style.module.css'
/* eslint-disable react/prop-types */

const PopUp = ({props,message}) => {
    console.log(props);
  return (
    <>
    <div className={s.popUp}>
        
       {message}  {props}
    </div>
    </>
  )
}

export default PopUp