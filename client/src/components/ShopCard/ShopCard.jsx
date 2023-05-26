/* eslint-disable no-unused-vars */
import s from "./style.module.css";
import { Form } from "../Form/Form";
import { Button } from "../../elements/Button/Button";
import { useEffect, useState } from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import { useStore } from '../../store/store'

export const ShopCard = () => {
  const [order, setOrder] = useState();



  const allProduct = useStore(state => state.basketCard);


  const totalBasket = useStore(state => state.total);




  const handelSubmit = () => {
    console.log("submit"+ order);
    

  };
  const handelInformation =(value)=>{
    console.log('form')
    console.log (typeof(value));
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
                <ItemCard price={item.price} title={item.title}   /> 
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
    </>
  );
};
