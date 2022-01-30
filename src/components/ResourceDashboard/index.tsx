import React, { FunctionComponent } from "react";
import DashboardController from "../DashboardController";
import DashboardPanel from "./DashboardPanel";

interface Props {
}

const ResourceDashboard: FunctionComponent<Props> = () => (
    <div>
        <DashboardController />
        <DashboardPanel />
    </div>
)


export default ResourceDashboard;