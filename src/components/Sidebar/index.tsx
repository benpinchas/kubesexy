import React, { FunctionComponent, ReactChild, ReactChildren, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { switchCurrentResource } from "../../store/resource-state/resource-actions";
import { currentResourceSelector } from "../../store/resource-state/resource-selectors";
import Item from "./Item";
import StyledLabel from "./StyledLabel";


interface Props {

}

const SideBar: FunctionComponent<Props> = () => {

    const items = useMemo(() => {
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
            <Top>
                kubesexy 🕺
            </Top>
            <Middle>
                {
                    items.map(
                        (item, idx) => {
                            if (item.type === "label") {
                                return <StyledLabel key={item.content}> {item.content} </StyledLabel>
                            }

                            return <Item
                                key={item.resourceId}
                                item={item}
                                onClick={onItemClick}
                                isFirst={item.isFirst}
                                isSelected={currentResource === item.resourceId} />


                        })
                }
            </Middle>
        </div>
    );
}

const Top = styled.div`
    height: 60px;

    padding-left: 8px;
    padding-top: 8px;
    font-size: 22px;
    font-weight: 300;
`

const Middle = styled.div`
`
const Bottom = styled.div`
    
`



export default SideBar;