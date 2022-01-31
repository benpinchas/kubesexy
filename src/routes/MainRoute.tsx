import React, { FunctionComponent, useEffect } from "react";
import SideBar from "../components/Sidebar";
import styled from "styled-components"

import ResourceDashboard from "../components/ResourceDashboard";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsRequest } from "../store/resource-state/resource-actions";
import { currentResourceSelector } from "../store/resource-state/resource-selectors";
import { fetchNamespacesRequest } from "../store/namespace-state/namespace-actions";


interface Props {

}

const MainRoute: FunctionComponent<Props> = () => {
    const currentResource = useSelector(currentResourceSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchNamespacesRequest())
        dispatch(fetchItemsRequest())
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
    background-color: #fffef7;
    border-right: 1px solid lightgrey;
    border-left: 1px solid lightgrey;
    width: 300px;
`

const Right = styled.div`
    background-color: #fcfcfc;
    flex-grow: 1;
`