import React from "react";
import Button from "./Button";

function Color({ setState }) {
    return (
        <div className="fixed bottom-10 flex gap-4 bg-zinc-700 px-4 py-2 rounded-full shadow-md">
            <Button bgColor="crimson" setState={setState} />
            <Button bgColor="#E11584" setState={setState} />
            <Button bgColor="purple" setState={setState} />
            <Button bgColor="#007FFF" setState={setState} />
            <Button bgColor="green" setState={setState} />
            <Button bgColor="orange" setState={setState} />
        </div>
    );
}

export default Color;
