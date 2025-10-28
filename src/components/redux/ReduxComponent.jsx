  import { MobileAction } from "./Actions"

  import { connect } from "react-redux"
  
  const ReduxComponent = (props) =>{
    return(
        <div>
            <h1>ReduxComponent</h1>
            <h2>moboiles : {props.numberOfMobiles}</h2>
            <button onClick={props.MobileAction}>buy</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        numberOfMobiles : state.numberOfMobiles
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        MobileAction : () => dispatch(MobileAction())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)( ReduxComponent)

