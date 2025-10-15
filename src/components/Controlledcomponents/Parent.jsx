import Child from "./Child"

const Parent = () =>{
    return(
    <div>
     <div className="cantainer">
<h1>parent component</h1>

<Child backgroundColor="red" cardheader="toilet" cardbndy="Toilet.png" cardfooter="explore" />

<Child backgroundColor="green" cardheader="bathroom" cardbndy="Toilet.png" cardfooter="explore" />
{/* <Child cardheader="bathroom" cardbody="Toilet.png" cardfooter = "explore" /> */}
     </div>
    </div>
    )
}

export default Parent