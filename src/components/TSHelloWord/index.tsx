import React from "react";

interface TSHelloWordProps {
    name?: string;
}

const TSHelloWord: React.FC<TSHelloWordProps> = (props: any) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>hello world  tscript by {props.name}</h1>
        </div>
    )
}

export default TSHelloWord;