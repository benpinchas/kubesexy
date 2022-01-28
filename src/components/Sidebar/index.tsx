import React, { FunctionComponent, ReactChild, ReactChildren, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { switchCurrentResource } from "../../store/app-state/app-state-actions";
import { currentResourceSelector } from "../../store/app-state/app-state-selectors";
import Item from "./Item";
import StyledLabel from "./StyledLabel";
import StyledList from "./StyledList";


interface Props {

}

const SideBar: FunctionComponent<Props> = () => {

    const resources = useMemo(() => {
        return [
            {
                "resourceId": "POD",
                "formattedName": "Pods",
            },
            {
                "resourceId": "DEPLOYMENT",
                "formattedName": "Deployments",
            },
            {
                "resourceId": "REPLICA_SET",
                "formattedName": "ReplicaSets",
            }
        ]
    }, [])

    const dispatch = useDispatch()

    const currentResource = useSelector(currentResourceSelector)

    const onClick = (resourceId: string) => {
        dispatch(switchCurrentResource(resourceId))
    }

    return (
        <div>
            <StyledLabel>Workloads</StyledLabel>
            <StyledList>
                {
                    resources.map(
                        (resource, idx) => <Item
                            key={resource.resourceId}
                            resource={resource}
                            onClick={onClick}
                            isFirst={idx === 0}
                            isSelected={currentResource === resource.resourceId} />)
                }
            </StyledList>
        </div>
    );
}




export default SideBar;