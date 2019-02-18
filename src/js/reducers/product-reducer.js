import {PRODUCTINFO,PRODUCTCLEAR} from ".././constants/product-constants";
import {initialState} from ".././constants/initialState"

export default function productsReducer(state = initialState.products,action)
{
    switch(action.type)
    {
     case PRODUCTINFO:
     return {
        ...state,
            products : action.product
      };
      case PRODUCTCLEAR:
      return {
        ...state,
        state : initialState.products
      };
      default:
      return state
    }  
}
