import styled from "styled-components"

export default ({ item }) => {
    return (
        <StyledContainer>{item.metadata.name}</StyledContainer>
    )
}

const StyledContainer = styled.div`
    padding: 10px 5px;
    background-color: #fefef0;
    border-bottom: 1px solid lightgray;
    font-size: 14px;
`