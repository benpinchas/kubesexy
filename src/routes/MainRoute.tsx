import React, { FunctionComponent } from "react";
import Main from "../components/layout/Main";
import SideBar from "../components/layout/SideBar";
import styled from "styled-components"

import { useSelector } from 'react-redux';
import { currentResourceSelector } from '../store/app-state/app-state-selectors';


interface Props {

}

const MainRoute: FunctionComponent<Props> = () => {
    const currentResource = useSelector(currentResourceSelector)

    return (
        <StyledContainer className="route">
            <Left>
                <SideBar>
                    <div>{currentResource} List</div>
                </SideBar>
            </Left>
            <Right>
                <Main>
                    <div>Pod dashboard</div>
                </Main>
            </Right>
        </StyledContainer>
    );
}

export default MainRoute;

const StyledContainer = styled.div`
    display: flex;
`

const Left = styled.div`
    border: 1px solid red;
    width: 300px;
`

const Right = styled.div`
    border: 1px solid red;
    flex-grow: 1;
`