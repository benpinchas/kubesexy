import { useDispatch } from "react-redux";
import styled from "styled-components";
import { switchCurrentResource } from "../../store/app-state/app-state-actions";

const Item = ({ resource, onClick, isFirst, isSelected }) => {


    return (
        <StyledContainer
            onClick={() => onClick(resource.resourceId)}
            isSelected={isSelected}
            isFirst={isFirst}>
            {resource.formattedName}
        </StyledContainer>)
}

export default Item

interface StyledContainerProps {
    isSelected: boolean
    isFirst: boolean
}
const StyledContainer = styled.div`
    cursor: pointer;
    padding: 10px 0px;
    padding-left: 8px;
    border-top:  ${(props: StyledContainerProps) => props.isFirst ? "5px solid #f4ecab" : "none"};
    border-bottom: 5px solid #fff59d;
    
    background-color: ${(props: StyledContainerProps) => props.isSelected ? "#c8e6c9" : "none"};
    font-weight: ${(props: StyledContainerProps) => props.isSelected ? "bold" : "unset"};
`