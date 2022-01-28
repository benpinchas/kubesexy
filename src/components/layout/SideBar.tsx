import React, { FunctionComponent, ReactChild, ReactChildren } from "react";
interface Props {
    children: ReactChild
}

const SideBar: FunctionComponent<Props> = ({ children }) => {
    return (
        <main>
            <p>SideBar cmp</p>

            {children}

        </main>
    );
}

export default SideBar;