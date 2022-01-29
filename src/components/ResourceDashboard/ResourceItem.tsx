import styled from "styled-components"

export default ({ item }) => {
    return (
        <StyledContainer>{item.metadata.name}</StyledContainer>
    )
}

const StyledContainer = styled.div`
    padding: 15px 5px;
    background-color: #fafafa;
    border-bottom: 1px solid yellow;
`