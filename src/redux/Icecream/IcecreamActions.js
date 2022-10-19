import { BUY_ICECREAM } from "./IcecreamTypes";

export const buyIcecream = (number=1)=>{
    return{
        type:BUY_ICECREAM,
        payload:number
    }
}