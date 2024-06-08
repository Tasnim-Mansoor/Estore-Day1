export const ADD=(item)=>{
    return{
        type :"ADD_TO_CART",
        payload:item
    }
}
// remove item
export const REMOVE=(id)=>{
    return{
        type :"REMOVE_TO_CART",
        payload:id
    }
}  
  export const INCREMENT = (id) => {
    return {
      type: 'INCREMENT',
      payload: id,
    };
  };
  
  export const DECREMENT = (id) => {
    return {
      type: 'DECREMENT',
      payload: id,
    };
  };