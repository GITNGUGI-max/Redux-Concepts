import React, {useState} from 'react'
import { buyIcecream } from '../redux/Icecream/IcecreamActions'
import { connect } from 'react-redux'


const NewIcecreamContainer = (props) => {

    const [number, setNumber] = useState(1)
  return (
    <div>
        <h2>Number of Icecreams - {props.numberOfIcecreams} </h2>
        <input type="text"  value={number} onChange={e=>setNumber(e.target.value)} placeholder='Enter number of Icecreams'/>
        <button onClick={()=>props.buyIcecream(number)}>Buy Icecream</button>
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
        buyIcecream:number=>dispatch(buyIcecream(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewIcecreamContainer)