import React, { useState } from "react";
import Header from "../components/Header";
import Message from "../components/Message";
import Color from "../components/Color";

function Page() {
    const [background, setBackground] = useState("bg-zinc-900");
    return (
        <div
            className="h-screen w-full bg-zinc-900 flex flex-col items-center justify-center gap-8 text-white duration-300"
            style={{ backgroundColor: background }}
        >
            <Header />
            <Message background={background} />
            <Color setState={setBackground} />
        </div>
    );
}

export default Page;
