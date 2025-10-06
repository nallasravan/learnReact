const Onewaybinding = () => {
    // 👉 Functional logic and data declarations
    const string = "kohler";
    const number = 123;
    const boolean = true;
    const array = [1, 2, 3, 4, 5];
    const object = { name: "kohler", age: 100 };

    // 👉 JSX rendering starts here
    return (
        <div>
            <div>String: {string}</div>
            <div>Number: {number}</div>
            <div>Boolean: {boolean.toString()}</div>

            <ul>
                Array:
                {array.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <dl>
                <dt>Name</dt>
                <dd>{object.name}</dd>
                <dt>Age</dt>
                <dd>{object.age}</dd>
            </dl>
        </div>
    );
};

export default Onewaybinding;
