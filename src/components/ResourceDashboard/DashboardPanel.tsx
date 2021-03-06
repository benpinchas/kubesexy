import { useSelector } from "react-redux"
import styled from "styled-components"
import { currentResourceItemsSelector } from "../../store/resource-state/resource-selectors"
import ResourceItem from "./ResourceItem"

export default () => {
    const items = useSelector(currentResourceItemsSelector)
    return (
        <div>
            {
                items.map(item => <ResourceItem key={item.metadata.uid} item={item} />)
            }
        </div>
    )
}

const StyledContainer = styled.div`

`