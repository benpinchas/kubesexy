import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { switchCurrentNamespace } from "../store/namespace-state/namespace-actions"
import { currentNamespaceSelector, namespacesSelector } from "../store/namespace-state/namespace-selectors"

function useOutsideAlerter(ref, cb) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log('DEGUB: you clicked outside of me');
                cb()
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default () => {
    const dispatch = useDispatch()
    const current = useSelector(currentNamespaceSelector)
    const namespaces = useSelector(namespacesSelector)
    const [isOpen, setIsOpen] = useState(false)

    const openList = () => setIsOpen(true)
    const closeList = () => setIsOpen(false)
    const setNamespace = (namespace: string) => {
        closeList()
        if (namespace != current) {
            dispatch(switchCurrentNamespace(namespace))
        }
    }

    const wrapperRef = useRef(null);
    // useOutsideAlerter(wrapperRef, closeList);

    let jsx = null
    if (isOpen) {
        jsx = (
            <StyledList>
                {namespaces.map(namespace => {
                    const isSelected = current === namespace
                    return <StyledItem
                        onClick={() => setNamespace(namespace)}
                        key={namespace}>
                        <span>{namespace}</span> {isSelected && <span>👈</span>}
                    </StyledItem>
                }
                )}
            </StyledList>
        )
    } else {
        jsx = (
            <StyledButton onClick={openList}>
                {current}
            </StyledButton>
        )
    }

    return (
        <StyledContainer ref={wrapperRef}>
            {jsx}
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    background-color: red;
    width: 160px;
    height: 30px;
`

const StyledList = styled.ul`
    border: 1px solid red;
    position: relative; // TODO
`

const StyledItem = styled.li`
    padding: 3px 2px;
    background-color: yellow;
    user-select: none;
    cursor: pointer;
    &:hover {
        background-color: #00ffb3;
    }
`
const StyledButton = styled.button`
    background-color: #fff176;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: none;
    padding: 3px;
    &:hover {
        outline: 2px solid orange;
    }
`