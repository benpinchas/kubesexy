import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { switchTab } from "../../store/tabs-state/tabs-state-actions"
import { currentTabSelector, tabsSelector } from "../../store/tabs-state/tabs-state-selectors"
import TabItem from "./TabItem"

export default () => {
    const tabs = useSelector(tabsSelector)
    const dispatch = useDispatch()
    const currentTab = useSelector(currentTabSelector)

    const switchToTab = (tabId) => {
        dispatch(switchTab(tabId))
    }

    return (
        <StyledContainer>
            <TabItem 
                selected={currentTab === null}
                onClick={() => switchToTab(null)}>Cluster View</TabItem>
            {tabs.map(tab => <TabItem 
                                selected={tab.id === currentTab}
                                onClick={() => switchToTab(tab.id)}>
                                    <div>{tab.resourceId}</div> <XButton>❌</XButton>
                            </TabItem>
                        )}
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    background-color: lavender;
    padding-top: 10px;
    border-bottom: 3px solid lightgrey;

    > ${TabItem} {
        /* display: inline-block; */
    }
`

const XButton = styled.div`
    font-size: 8px;
    margin-left: 15px;
`