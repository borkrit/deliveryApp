import { useEffect, useMemo, useState } from 'react';
import { useStore } from '../../store/store'
import s from './style.module.css'
import axios from 'axios'


export const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [menu, setMenu] = useState([]);
  const [categoryRestaurant, setCategoryRestaurant] = useState();
  const [disableRest, setDisableRest] = useState(false);


  const addProducts = useStore((state)=>state.addToCard);
  const total  = useStore((state)=>state.updateTotal);

  const addProduct = (el)=>{ 
    setDisableRest(true);

    let product = menu.find(item => item.id === el.id);

    setCategoryRestaurant( el.restaurant)

    addProducts(product)
    // total(product.price)

  }


  useEffect(()=>{
    const featchRest = async ()=>{
      try {
        const res = await axios('http://localhost:3002/restaurants');
        setRestaurants(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    const featchProduct = async ()=>{
      try {
        const res = await axios('http://localhost:3002/menu');
        setMenu(res.data);
      } catch (error) {
        console.log(error)
      }
    }

    featchProduct();
    featchRest();
    
  },[]);



  const filterProduct = () => {
    if(!categoryRestaurant){
      return menu;
    }
    return menu.filter(item => item.restaurant === categoryRestaurant);
  }
  const memo = useMemo( filterProduct, [menu, categoryRestaurant])

  
  return (
    <>
      <div className={s.product__container}>

        <div className={s.restaurants + ' ' +  (disableRest ? s.restaurantDisable : s.restaurants) }>
        {
          restaurants.map((item,id)=>{
            return (
              <>
                <div className={ s.category + ' ' +  ( item.id === categoryRestaurant ? s.active: '' )} key={id} onClick={ disableRest ? null :  ()=>setCategoryRestaurant(item.id)   }>

                {item.title}

                </div>
              </>
            )
          })
        }

        </div>
       


        {memo.map((item) => (
          <>
           <div className={s.product__item} key={item._id}>
            <p className="product__title">{item.Title} </p>
            <p className="product__price"> {item.Price}  </p>
            <button className="add" onClick={()=>addProduct(item)}> Add to Card  </button>
          </div>
          </>
           
        ))}
        
      </div>
    
    </>
  )
}
