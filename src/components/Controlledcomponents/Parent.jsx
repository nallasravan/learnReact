
import Child from "./Child";
const Parent = () => {
  return (
    <div>
      <div className="container">
        <h1>Parent Component</h1>
        <ul>
          <li>React: You describe what you want to render.
</li>
          <li>Vanilla JS: You write how to render it (manipulating DOM step-by-step).</li>
        </ul>
        <hr />
        <Child
          backgroundColor="red"
          cardheader="bathroom"
          cardbndy="Toilet.png"
          cardfooter="explore"
        />
         <Child
          backgroundColor="blue"
          cardheader="faucets"
          cardbndy="Faucets.png"
          cardfooter="explore"
        />
          <Child
          backgroundColor="yellow"
          cardheader="faucets"
          cardbndy="Faucets.png"
          cardfooter="explore"
        />
      </div>
    </div>
  );
};

export default Parent;