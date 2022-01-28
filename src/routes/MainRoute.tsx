import React, { FunctionComponent } from "react";
import SideBar from "../components/Sidebar";
import styled from "styled-components"

import { useSelector } from 'react-redux';
import { currentResourceSelector } from '../store/app-state/app-state-selectors';
import ResourceDashboard from "../components/ResourceDashboard";


interface Props {

}

const MainRoute: FunctionComponent<Props> = () => {
    const currentResource = useSelector(currentResourceSelector)

    return (
        <StyledContainer className="route">
            <Left>
                <SideBar />
            </Left>
            <Right>
                <ResourceDashboard />
            </Right>
        </StyledContainer>
    );
}

export default MainRoute;

const StyledContainer = styled.div`
    display: flex;
`

const Left = styled.div`
    background-color: #fff9e0;
    border-right: 5px solid #fff59d;
    border-left: 5px solid #fff59d;
    width: 300px;
`

const Right = styled.div`
    background-color: #fffde7;
    flex-grow: 1;
`