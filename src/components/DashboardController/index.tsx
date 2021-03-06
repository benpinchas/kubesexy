import React, { FunctionComponent } from "react";
import styled from "styled-components";
import StyledInput from "../common/StyledInput";
import NamespaceChooser from "../NamespaceChooser";

interface Props {

}

const DashboardController: FunctionComponent<Props> = () => {

    return (
        <StyledContainer>
            <Left>
                <NamespaceChooser />
            </Left>
            <Seperator />
            <Center>
                Middle
            </Center>
            <Seperator />
            <Right>
                <StyledSearchInput placeholder={`Search for items`} />
            </Right>
        </StyledContainer>
    );
}

export default DashboardController;


const StyledContainer = styled.div`
    background-color: lightgrey;
    padding: 0 10px;

    display: flex;
    align-items: center;
`

const Left = styled.div`
`
const Center = styled.div`
    flex-grow: 1;
`
const Right = styled.div`
`
const Seperator = styled.div`
    margin: 10px;
    border-left: 1px solid black;
    height: 20px; // debt
`

const StyledSearchInput = styled(StyledInput)`
    width: 200px;
    padding: 4px;
    border-radius: 2px;
`