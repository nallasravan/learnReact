const Child = (props) =>{
    console.log("props=", props)
    return(
        <div>
            <h2>child component</h2>
<div className="container w-50">    
            <div style={props.backgrondcolor} className="card">
                <div className="card-header">
                    <div>{props.cardheader}</div>
                </div>
                <div className="card-body">
                    <div><img src={props.cardbndy} alt="img"/></div>
               </div>
                <div className="card-footer">
                    <div>
                        {props.cardfooter}
                    </div>
                </div>
            </div>
            
            </div>

        </div>
    )
}

export default Child
