import React, { FunctionComponent, useEffect } from "react";
import SideBar from "../components/Sidebar";
import styled from "styled-components"

import ResourceDashboard from "../components/ResourceDashboard";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsRequest } from "../store/resource-state/resource-actions";
import { currentResourceSelector } from "../store/resource-state/resource-selectors";


interface Props {

}

const MainRoute: FunctionComponent<Props> = () => {
    const currentResource = useSelector(currentResourceSelector)
    const d = useDispatch()
    useEffect(() => {
        d(fetchItemsRequest())
    }, [currentResource])
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