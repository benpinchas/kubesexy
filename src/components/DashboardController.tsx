import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { currentResourceSelector } from "../store/app-state/app-state-selectors";

interface Props {

}

const DashboardController: FunctionComponent<Props> = () => {
    const currentResource = useSelector(currentResourceSelector)

    return (
        <StyledContainer>
            current resource: {currentResource} / search bar
        </StyledContainer>
    );
}

export default DashboardController;


const StyledContainer = styled.div`
    background-color: lightgrey;
`