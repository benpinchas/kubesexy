import styled from "styled-components";

const Item = ({ item, onClick, isFirst, isSelected }) => {


    return (
        <StyledContainer
            onClick={() => onClick(item.resourceId)}
            isSelected={isSelected}
            isFirst={isFirst}>
            {item.formattedName} {isSelected && <span>👀</span>}
        </StyledContainer>
    )
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
    padding-right: 8px;
    border-top:  ${(props: StyledContainerProps) => props.isFirst ? "1px solid lightgray" : "none"};
    border-bottom: 1px solid lightgray;;
    
    background-color: ${(props: StyledContainerProps) => props.isSelected ? "#c8e6c9" : "none"};


    background-image: linear-gradient(beige);

    display: flex;
    justify-content: space-between;
`