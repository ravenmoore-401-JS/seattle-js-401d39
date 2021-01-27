// The cart reducer.

import productSelection from "./products-reducer";

const initialState = {
  cart: [],
  cartCount: 0,
};

// Actions go here
export const addItem = (item) => {
  return {
    type: 'ADD-ITEM',
    payload: item,
  };
};

export const changeQuantity = (item) => {
  return {
    type: 'CHANGE-QUANTITY',
    payload: item,
  }
}

// { category: 'pickaxes', name: 'wooden pickax', description: 'Minecraft Wooden Pickax', price: 'Two Sticks', inventoryCount: 5, quantityInCart: 1 },


const cart = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ADD-ITEM':
      payload = {...payload, quantityInCart: payload.quantityInCart+1}
      console.log('Payload in ADD-ITEM:', payload)
      return {...state, cart: [...state.cart, payload], cartCount: state.cartCount+1};

    case 'CHANGE-QUANTITY':
      state.cart.forEach(value => {
      if (value.name === payload.name) {
        payload = {...payload, quantityInCart: payload.quantityInCart+1}
        console.log('Payload in CHANGE-QUANTITY:', payload)
        console.log('Initial State:', initialState);
      }
    })
    return {...state, cart: [payload]}

    default:
      return state; 
  }
}

export default cart; 