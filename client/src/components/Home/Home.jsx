import { useStore } from '../../store/store'

const products = [
  {
    _id: 1,
    title: 'Burger',
    price: 20,
    quantiti:1,
  },
  {
    _id: 2,
    title: 'Cheeseburger',
    price: 21,
    quantiti:1,
  },
  {
    _id: 3,
    title: 'Cola',
    price: 2,
    quantiti:1,
  },
  {
    _id: 4,
    title: 'Fanta',
    price: 3,
    quantiti:1,
  },
]

export const Home = () => {






  const addProducts = useStore((state)=>state.addToCard);


  const total  = useStore((state)=>state.updateTotal);

  const addProduct = (el)=>{ 

    let product = products.find(item => item._id == el)

    addProducts(product)
    total(product.price)

  }




  return (
    <>
      <div className="product__container">
        {products.map((item) => (
          <>
           <div className="product__item" key={item._id}>
            <p className="product__title">{item.title} </p>
            <p className="product__price"> {item.price}  </p>
            <button className="add" onClick={()=>addProduct(item._id)}> Add to Card  </button>
          </div>
          </>
           
        ))}
        
      </div>
    
    </>
  )
}
