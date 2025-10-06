import { useState } from "react";

const Twowaybinding = () => {
    // 👉 State declaration
    const [inputValue, setInputValue] = useState("");

    // 👉 Event handler to update state
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    // 👉 JSX rendering
    return (
        <div>
            <h2>Two-Way Binding Example</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <p>You typed: {inputValue}</p>
        </div>
    );
};

export default Twowaybinding;