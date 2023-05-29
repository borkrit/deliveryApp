import { create } from 'zustand'

// eslint-disable-next-line no-unused-vars
export const useStore = create((set,get) => ({
  basketCard: [],
  total:0,
  // eslint-disable-next-line no-undef
  updateTotal: (price )=> set((state) => ({ total : state.total + price })),
  
  addToCard: (product) =>{

    let cart = get().basketCard;
    let prod = cart.find(item => item.id === product.id);

    if(prod){
        const cardUpdate = cart.map( item => item.id === product.id ? {...item, quantity: item.quantity +1} : item )
        console.log(cardUpdate)

        set((state) => ({
            basketCard: cardUpdate,
            total: state.total + product.Price
        }))
    }else{
        const cardUpdate = [...cart, {...product, quantity : 1}];
        console.log(cardUpdate)

        set((state =>({
            basketCard: cardUpdate,
            total: state.total + product.Price
        })))
    }

  } ,

  updateQuantity: (productTitle,price,qat) =>{
    let cart = get().basketCard;
    let prod = cart.find(item => item.Title === productTitle);


    if(prod){

        const cardUpdate = cart.map( item => item.Title === productTitle ? {...item, quantity: Number(qat) } : item )


        set((state) => ({
            basketCard: cardUpdate,
        }))
    }

  },



  clearCard: () => set(() =>  ({ basketCard: [], total:0}) ),
}))

