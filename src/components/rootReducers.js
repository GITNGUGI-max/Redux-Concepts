import { combineReducers } from "redux";
import beerReducer from "../redux/Beer/BeerReducers";
import cakeReducer from "../redux/Cake/CakeReducer";
import icecreamReducer from "../redux/Icecream/IcecreamReducers";
import userReducer from "../redux/User/UserReducer";



const rootReducers = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer,
    beer:beerReducer,
    user:userReducer
})

export default rootReducers