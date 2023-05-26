/* eslint-disable react/prop-types */
import s from './style.module.css';
import { Input } from '../../elements/Input'
import { useState } from 'react';

export const Form = ({handelInformation}) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    
const handelChange = (value)=>{
    if(value.name === 'name' ){
        setName(value.value);
    }
    if(value.name === 'phone' ){
        setPhone(value.value);
    }
    if(value.name === 'email' ){
        setEmail(value.value);
    }
    if(value.name === 'address' ){
        setAddress(value.value);
    }

    if(name !== '' & phone !== '' & address.length > 10 & email !== ""){
        if(prompt('All information correct?','yes')){
            console.log('work')
            handelInformation([name,address,phone,email])
        }
    }
}

  return (
    <>
        <div className={s.contact__form} >
            <Input type={'text'} name={'name'} handelChange={handelChange} />
            <Input type={'phone'} name={'phone'} handelChange={handelChange}/>
            <Input type={'email'} name={'email'} handelChange={handelChange}/>
            <Input type={'text'} name={'address'} handelChange={handelChange}/>

        </div>
      
    </>
  )
}
