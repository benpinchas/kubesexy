import React, { FunctionComponent } from "react";
import styled from "styled-components";
import DashboardController from "../DashboardController";
import DashboardPanel from "./DashboardPanel";

interface Props {
}

const ResourceDashboard: FunctionComponent<Props> = () => (
    <StyledContainer>
        <DashboardController />
        <DashboardPanel />
    </StyledContainer>
)


export default ResourceDashboard;

const StyledContainer = styled.div`
`