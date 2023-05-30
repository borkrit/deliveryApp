/* eslint-disable no-unused-vars */
import s from "./style.module.css";
import { Form } from "../Form/Form";
import { Button } from "../../elements/Button/Button";
import { useEffect, useState } from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import { useStore } from '../../store/store'
import axios from "axios";
import PopUp from "../PopUp/PopUp";

export const ShopCard = () => {
  const [order, setOrder] = useState();
  const[showPopUp, setShowPopUp] = useState(false)



  const allProduct = useStore(state => state.basketCard);
  const totalBasket = useStore(state => state.total);
  const clearCard = useStore ((state)=> state.clearCard );




  const handelSubmit = async (e) => {
    e.preventDefault();
   
    if(order !== undefined){
      setShowPopUp(true);

      const createOrder = {
        ...order, 'orderInfo': JSON.stringify(allProduct), 'total':totalBasket
      }
      try {
      await axios.post('https://deliveryapp-r062.onrender.com/order', createOrder )
      
        
      } catch (error) {
        console.log(error);
      }

      clearCard();
      setTimeout(()=>{
        setShowPopUp(false);
      }, 4000)
    }else{ 
      alert( new Error('You dont write your data'));
    }

      


  };


  const handelInformation =(value)=>{
    setOrder(value);
  }





  return (
    <>
      <div className={s.shopping__basket}>
        <Form handelInformation={handelInformation} />
        <div className="shopping">
          <div className={s.shoppng__list}>
          { allProduct.map(item=>(
            <>
                <ItemCard key={item.id} id={item.id} price={item.Price} title={item.Title} quantity={item.quantity}  img={item.img} /> 
            </>
          ))}
          </div>
          
            <div>
              <p className="price">Total {totalBasket>""?  totalBasket : 0}</p>
              <button onClick={handelSubmit} className={s.btn}>
                Send
              </button>
              <button className={s.btn + ' ' + s.delete } onClick={()=>clearCard()} >Clear Basket </button>
          </div>
        </div>

        
      </div>
      {showPopUp ?<PopUp message={'Order sended'} /> :null}
      

    </>
  );
};
