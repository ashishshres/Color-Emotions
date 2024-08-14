import React, { useEffect, useState } from "react";

function Message({ background }) {
    const [color, setColor] = useState("");
    const [message, setMessage] = useState("Choose your emotion");

    const messages = [
        {
            name: "Red",
            color: "crimson",
            msg: "Passion, excitement, love",
        },
        {
            name: "Pink",
            color: "#E11584",
            msg: "Soft, reserved, earthy",
        },
        {
            name: "Purple",
            color: "purple",
            msg: "Mysterious, noble, glamorous",
        },
        {
            name: "Blue",
            color: "#007FFF",
            msg: "Wisdom, hope, reason, peace",
        },
        {
            name: "Green",
            color: "green",
            msg: "Nature, growth, freshness",
        },
        {
            name: "Yellow",
            color: "#FFDF00",
            msg: "Hope, joy, danger",
        },
        {
            name: "Orange",
            color: "orange",
            msg: "Warmth, kindness, joy",
        },
        {
            name: "White",
            color: "white",
            msg: "Truth, indifference",
        },
        {
            name: "Black",
            color: "black",
            msg: "Noble, mysterious, cold",
        },
    ];

    useEffect(() => {
        messages.map(({ color, name, msg }) => {
            if (color === background) {
                setMessage(msg);
                setColor(name);
            }
        });
    }, [background]);

    return (
        <div className="text-center">
            <div>
                <span className="text-2xl">{color}</span>
                <p className="text-6xl font-normal tracking-tight">{message}</p>
            </div>
        </div>
    );
}

export default Message;
