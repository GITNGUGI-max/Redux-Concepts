import { BUY_BEER } from "./BeerTypes"


const initialState={
    numberOfBeers: 30
}

const beerReducer =(state=initialState, action)=>{

    switch(action.type){
        case BUY_BEER:
            return{
                ...state,
                numberOfBeers:state.numberOfBeers-1
            }
        default: return state
    }

}

export default beerReducer