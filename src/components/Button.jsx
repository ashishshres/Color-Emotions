import React from "react";

function Button({ bgColor, setState }) {
    function changeBackground() {
        setState(bgColor);
    }

    return (
        <button
            onClick={changeBackground}
            className="h-10 w-10 rounded-full border-4 border-solid border-white hover:scale-105 active:scale-95"
            style={{ backgroundColor: bgColor }}
        ></button>
    );
}

export default Button;
