import styled from "styled-components";

const Item = ({ item, onClick, isFirst, isSelected }) => {


    return (
        <StyledContainer
            onClick={() => onClick(item.resourceId)}
            isSelected={isSelected}
            isFirst={isFirst}>
            {item.formattedName}
        </StyledContainer>)
}

export default Item

interface StyledContainerProps {
    isSelected: boolean
    isFirst: boolean
}
const StyledContainer = styled.div`
    cursor: pointer;
    user-select: none;
    padding: 10px 0px;
    padding-left: 8px;
    border-top:  ${(props: StyledContainerProps) => props.isFirst ? "5px solid #f4ecab" : "none"};
    border-bottom: 5px solid #fff59d;
    
    background-color: ${(props: StyledContainerProps) => props.isSelected ? "#c8e6c9" : "none"};
`