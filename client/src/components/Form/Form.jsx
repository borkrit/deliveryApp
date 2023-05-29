/* eslint-disable react/prop-types */
import s from './style.module.css';
import { Input } from '../../elements/Input'
import { useState } from 'react';

export const Form = ({handelInformation}) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('');

    // const[ contact, setContact ] = useState({
    //     name:'',
    //     phone:0,
    //     email:'',
    //     address:''
    // })
    
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
    // setContact(prev=> ( {...prev, [value.name] : value.value}))

    if(name !== '' & phone !== '' & address.length > 10 & email !== ""){
        if(prompt('All information correct?','yes')){
            console.log('work')
            handelInformation({
                'name' : name,
                'phone' : phone,
                'email' : email,
                'address': address
            })
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
