import React from 'react'
import { buyBeer } from '../redux/Beer/BeerActions'
import { connect} from 'react-redux'

const BeerContainer = (props) => {
  return (
    <div>
        <h2>Number of Beers -{props.numberOfBeers} </h2>
        <button onClick={props.buyBeer}>Buy Beer</button>
    </div>
  )
}

const mapStateToProps = state=>{
    return{
        numberOfBeers: state.beer.numberOfBeers
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        buyBeer:()=>dispatch(buyBeer())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (BeerContainer)