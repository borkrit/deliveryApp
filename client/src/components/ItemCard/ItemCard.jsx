/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Input } from "../../elements/Input";
import { useStore } from '../../store/store'


export const ItemCard = ({price=0, title='', quantity}) => {


    const total  = useStore((state)=>state.updateTotal);

    const updateQuantity  = useStore((state)=>state.updateQuantity);


    const [cost, setCost] = useState(0);
    // const priceItem=price * quantity;

    const handelChange = (value)=>{
        if( value.value >0){
           
            const priceItem=price * value.value;
            console.log(priceItem);
            updateQuantity(title, priceItem, value.value);
            total(priceItem)
        }
        
    }

    useEffect(()=>{
        // setCost(priceItem)
    },[]);



  return (
   <>
    <img src="" alt="" />
        <p className="title">{title}</p>
        <p className="price">price one item {price}</p>
        {/* <p className="price">price for all this items {cost}</p> */}
        <Input name={'how'} type={'number'} handelChange={handelChange} value={quantity} />
   </>
  )
}
