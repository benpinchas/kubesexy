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
                type: "label",
                content: "💪 Workloads"
            },
            {
                "isFirst": true,
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
            },

            {
                type: "label",
                content: "📝 Configuration"
            },
            {
                "isFirst": true,
                "resourceId": "FOO",
                "formattedName": "Foo",
            },
            {
                "resourceId": "BAR",
                "formattedName": "Bar",
            },

        ]
    }, [])

    const dispatch = useDispatch()

    const currentResource = useSelector(currentResourceSelector)

    const onItemClick = (resourceId: string) => {
        dispatch(switchCurrentResource(resourceId))
    }

    return (
        <div>
            <StyledList>
                {
                    resources.map(
                        (resource, idx) => {
                            if (resource.type === "label") {
                                return <StyledLabel> {resource.content} </StyledLabel>
                            }

                            return <Item
                                key={resource.resourceId}
                                resource={resource}
                                onClick={onItemClick}
                                isFirst={resource.isFirst}
                                isSelected={currentResource === resource.resourceId} />


                        })
                }
            </StyledList>
        </div>
    );
}




export default SideBar;