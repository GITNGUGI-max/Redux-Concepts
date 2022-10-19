import React from 'react'
import { buyIcecream } from '../redux/Icecream/IcecreamActions'
import { connect } from 'react-redux'


const IcecreamContainer = (props) => {
  return (
    <div>
        <h2>Number of Icecreams - {props.numberOfIcecreams} </h2>
        <button onClick={props.buyIcecream}>Buy Icecream</button>
    </div>
  )
}

const mapStateToProps = state=>{
    return{
        numberOfIcecreams:state.icecream.numberOfIcecreams
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIcecream:()=>dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (IcecreamContainer)