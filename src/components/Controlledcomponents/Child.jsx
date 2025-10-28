const Child = (props) => {
  console.log("props=", props);

  return (
    <div>
      <h2>Child Component</h2>
      <div className="container w-50">
        <div style={{ backgroundColor: props.backgroundColor }} className="card">
          <div className="card-header">
            <div>{props.cardheader}</div>
          </div>
          <div className="card-body">
            <div>
              <img src={props.cardbndy} alt="img" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="card-footer">
            <div>{props.cardfooter}</div>
          </div>
        </div>
      </div>
      <hr />
   
    </div>
  );
};

export default Child;