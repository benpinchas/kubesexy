import styled, { css } from "styled-components";

interface Props {
    selected: boolean;
}
export default styled.div<Props>`
    margin: 2px;
    border: 1px solid;
    user-select: none;
    padding: 8px 15px;
    font-size: 14px;
    cursor: pointer;

    border-top-left-radius: 2px;
    border-top-right-radius: 2px;

    margin-bottom: 0;
    border-bottom: none;
    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ${(props) => css`
        border-color: ${props.selected? "black": "gray"};
        background-color: ${props.selected? "lightgrey": "unset"};
    `}


    display: inline-flex;
    align-items: center;

`