import React, { FunctionComponent, ReactChild } from "react";
interface Props {
    children: ReactChild
}

const Main: FunctionComponent<Props> = ({ children }) => {
    return (
        <main>
            <p>Main cmp</p>
            {children}
        </main>
    );
}

export default Main;