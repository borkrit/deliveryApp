import { useEffect, useMemo, useState } from "react";
import { useStore } from "../../store/store";
import s from "./style.module.css";
import axios from "axios";
import PopUp from "../PopUp/PopUp";

export const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopUp , setShowPopUp] = useState({
    product:{},
    show:false
  })

  const [disableRest, setDisableRest] = useState(false);

  const addProducts = useStore((state) => state.addToCard);
  const basket = useStore((state)=> state.basketCard);

  const categoryRestaurant = useStore((state) => state.selectRestaurant);
  const updateSelectRestaurant = useStore(
    (state) => state.updateSelectRestaurant
  );

  const addProduct = (el) => {
    showPop(el)
    setDisableRest(true)

    let product = menu.find((item) => item.id === el.id);

    updateSelectRestaurant(el.restaurant);

    addProducts(product);
    
  };

  useEffect(() => {
    const fetchRest = async () => {
      try {
        setLoading(true);
        const res = await axios(
          "https://deliveryapp-r062.onrender.com/restaurants"
        );
        const res1 = await axios("https://deliveryapp-r062.onrender.com/menu");
        setRestaurants(res.data);
        setMenu(res1.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRest();
  }, []);

  const filterProduct = () => {
    if (!categoryRestaurant) {
      return menu;
    }
    return menu.filter((item) => item.restaurant === categoryRestaurant);
  };
  const memo = useMemo(filterProduct, [menu, categoryRestaurant]);

  const disableRestaurants = () =>{
    if( basket.length >0){
      setDisableRest(true);
    }
  }
  const disable = useMemo (disableRestaurants,[disableRest] );

const showPop = (e)=> {

  setShowPopUp({
    product: e.Title,
    show:true
  })


  setTimeout(()=>{
    setShowPopUp({
      show:false
    })
  },4000)
}


  return (
    <>
      <main>
        <div className={s.products__container}>
          {loading ? (
            "Loading ..."
          ) : (
            <>
              <div
                className={
                  s.restaurants +
                  " " +
                  (disableRest ? s.restaurantDisable : s.restaurants)
                }
              >
                {restaurants.map((item, id) => {
                  return (
                    <>
                      <div
                        className={
                          s.category +
                          " " +
                          (item.id === categoryRestaurant ? s.active : "")
                        }
                        key={id}
                        onClick={
                          disableRest
                            ? null
                            : () => updateSelectRestaurant(item.id)
                        }
                      >
                        {item.title}
                      </div>
                    </>
                  );
                })}
              </div>

              <div className={s.products__list}>
                {memo.map((item) => (
                  <>
                    <div className={s.products__item} key={item.id}>
                      <img
                        className={s.products_img}
                        src={
                          item.img
                            ? item.img
                            : "data:image/jpeg;base64,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"
                        }
                        alt={item.Title}
                      />
                      <p className="product__title">{item.Title} </p>
                      <p className="product__price"> Price {item.Price} </p>
                      <button className="add" onClick={() => addProduct(item)}>
                        Add to Card
                        
                      </button>
                     {
                      showPopUp.show ?  <PopUp props={showPopUp.product} message={'Product add to basket :'} /> : null
                     }
                     
                    </div>
                  </>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};
