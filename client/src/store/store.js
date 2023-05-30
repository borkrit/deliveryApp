import { create } from 'zustand'

// eslint-disable-next-line no-unused-vars
export const useStore = create((set,get) => ({
  basketCard: [],
  total:0,
  selectRestaurant: null,

  
  updateSelectRestaurant : (id)=> set(() => ( {selectRestaurant: id })  ),


  // eslint-disable-next-line no-undef
  
  addToCard: (product) =>{

    let cart = get().basketCard;
    let prod = cart.find(item => item.id === product.id);

    if(prod){
        const cardUpdate = cart.map( item => item.id === product.id ? {...item, quantity: item.quantity +1} : item )

        set((state) => ({
            basketCard: cardUpdate,
            total: state.total + Number(product.Price)
        }))
    }else{
        const cardUpdate = [...cart, {...product, quantity : 1}];

        set((state =>({
            basketCard: cardUpdate,
            total: state.total + Number(product.Price)
        })))
    }

  } ,

  removeFromCard: (id) => {

    let cart = get().basketCard;
    const cardUpdate = cart.filter((item) => item.id !== id);
    const totalUp = cardUpdate.map((item)=> Number(item.Price) * item.quantity).reduce((acc, current)=> acc + current)

    
    set((state)=> ({
      basketCard : cardUpdate,
      total : totalUp
    }))
  },

  updateQuantity: (productTitle,qat) =>{
    let cart = get().basketCard;
    let prod = cart.find(item => item.Title === productTitle);


    if(prod){

        const cardUpdate = cart.map( item => item.Title === productTitle ? {...item, quantity: Number(qat) } : item )

        const totalUp = cardUpdate.map((item)=> Number(item.Price) * item.quantity).reduce((acc, current)=> acc + current)

        set((state) => ({
            basketCard: cardUpdate,

            total: totalUp

        }))
    }

  },



  clearCard: () => set(() =>  ({ basketCard: [], total:0, selectRestaurant:null}) ),
}))

