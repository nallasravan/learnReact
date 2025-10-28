import { useReducer } from "react";

let initalState = {
  viewersCount: 0, //store
};

function reducer(state, action) {
  //actions here we need to perform
  switch (action.type) {
    case "join":
      return { viewersCount: state.viewersCount + 1 };
    case "exit":
      return { viewersCount: state.viewersCount - 1 };
    default:
      break;
  }
}

export const UsereducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  function JoinClick() {
    dispatch({ type: "join" });
  }
  function ExistClick() {
    dispatch({ type: "exit" });
  }

  return (
    <div className="container-fluid">
      <div className="card w-50">
        <div className="card-header">
          <iframe
            title="YouTube Video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Added valid YouTube video ID
            width="100%"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="card-body">
          <h4>youtube live display</h4>
          {/* viwers component */}
          <h5>viewers count: {state.viewersCount}</h5>
        </div>
        <div className="card-footer">
          <button onClick={JoinClick} className="btn btn-warning p-2 m-2">
            join
          </button>
          <button onClick={ExistClick} className="btn btn-danger p-2 m-2">
            exit
          </button>
        </div>
      </div>
    </div>
  );
};
