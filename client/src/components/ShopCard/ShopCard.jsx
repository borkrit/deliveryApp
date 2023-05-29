/* eslint-disable no-unused-vars */
import s from "./style.module.css";
import { Form } from "../Form/Form";
import { Button } from "../../elements/Button/Button";
import { useEffect, useState } from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import { useStore } from '../../store/store'
import axios from "axios";

export const ShopCard = () => {
  const [order, setOrder] = useState();



  const allProduct = useStore(state => state.basketCard);
  const totalBasket = useStore(state => state.total);
  const clearCard = useStore ((state)=> state.clearCard );




  const handelSubmit = async (e) => {
    e.preventDefault();

    let orderedProduct =``;
    allProduct.map(el => {
      orderedProduct += `Product:${el.Title} , quantity:${el.quantity} ;\n`
    })
    
    const createOrder = {
      ...order, 'orderInfo': orderedProduct
    }
    try {
    await axios.post('http://localhost:3002/order', createOrder )
    
      
    } catch (error) {
      console.log(error);
    }


    clearCard()
  };


  const handelInformation =(value)=>{
    setOrder(value);
  }





  return (
    <>
      <div className={s.shopping__basket}>
        <Form handelInformation={handelInformation} />
        <div className="shopping_items">
          {/* <ItemCard price={20} title={'burger'} />
          <ItemCard price={10} title={'pasta'}  />
          */}
          { allProduct.map(item=>(
            <>
                <ItemCard id={item.id} price={item.Price} title={item.Title} quantity={item.quantity}   /> 
            </>
          ))}
        </div>

        <div>
          <p className="price">Total {totalBasket>""?totalBasket : 0}</p>
          {/* <Button handelSubmit={handelSubmit} >Send</Button> */}
          <button onClick={handelSubmit} className={s.btn}>
            Send
          </button>
        </div>
      </div>
      <button onClick={()=>clearCard()} >Clear All </button>

    </>
  );
};
