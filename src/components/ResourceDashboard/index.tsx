import React, { FunctionComponent } from "react";
import styled from "styled-components";
import DashboardController from "./DashboardController";

interface Props {
}

const ResourceDashboard: FunctionComponent<Props> = () => {
    return (
        <div>
            <DashboardController />
        </div>
    );
}


export default ResourceDashboard;