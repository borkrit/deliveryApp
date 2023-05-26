/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Input } from "../../elements/Input";
import { useStore } from '../../store/store'


export const ItemCard = ({price=0, title=''}) => {


    const total  = useStore((state)=>state.updateTotal);

    const [cost, setCost] = useState(0);
    const priceItem=price;

    const handelChange = (value)=>{
        console.log(value);
        if( value.value >0){
            let updatePrice = priceItem * value.value;
            setCost(updatePrice)
            total(priceItem)

        }
        
    }

    useEffect(()=>{
        setCost(priceItem)
    },[]);



  return (
   <>
    <img src="" alt="" />
        <p className="title">{title}</p>
        <p className="price">{cost}</p>
        <Input name={'how'} type={'number'} handelChange={handelChange} value="1" />
   </>
  )
}
