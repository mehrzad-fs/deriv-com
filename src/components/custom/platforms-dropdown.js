import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import {
    NavPlatform,
    NavCompany,
    NavResources,
    NavMarket,
} from 'components/custom/other-platforms.js'
import { Container, Show, Flex } from 'components/containers'

const FadeInDown = keyframes`
    from {
        opacity:0;
        transform: translateY(7.2rem) rotateY(-15deg);
    }
    to {
        opacity:1;
        transform: translateY(7.2rem) rotateY(0);
    }
`
const NavDropdown = styled.div`
    width: ${(props) => (props.is_trade ? '90%' : 'auto')};
    max-width: 1200px;
    left: ${(props) => (props.offset && !props.is_trade ? props.offset + 'px !important' : 'none')};
    position: absolute;
    padding: 2.2rem 0.8rem;
    z-index: -1;
    height: auto;
    transform: translateY(7.2rem);
    background-color: var(--color-white);
    opacity: 0;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    transition: opacity 0.3s, transform 0.3s;
    animation-name: ${FadeInDown};
    will-change: display, left, opacity;
    animation-fill-mode: both;
    animation-duration: 0.3s;
    overflow: visible;

    ::after {
        content: ' ';
        position: absolute;
        top: -9px;
        left: ${(props) => (props.offset_arrow ? props.offset_arrow + 'px !important' : 'none')};
        border-top: none;
        border-right: 15px solid transparent;
        border-left: 15px solid transparent;
        border-bottom: 15px solid white;
    }
`
const StyledContainer = styled(Container)`
    justify-content: flex-start;
    align-items: flex-start;
    width: 100% !important;

    .active {
        border: 0.2rem solid var(--color-green);
    }
`

const getNavigationContents = (parent, is_ppc, is_ppc_redirect) => {
    if (parent === 'trade') return <NavPlatform is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect} />
    if (parent === 'markets') return <NavMarket is_ppc={is_ppc} />
    if (parent === 'about') return <NavCompany />
    if (parent === 'resources') return <NavResources />
}

const PlatformsDropdown = ({
    current_ref,
    is_ppc,
    is_ppc_redirect,
    parent,
    setActiveDropdown,
    active_dropdown,
}) => {
    const dropdownContainerRef = useRef(null)
    const is_trade = active_dropdown === 'trade'
    const current_offset = current_ref.offsetWidth / 2 - 15
    const setTradeArrowOffset = (dropdownOffset) =>
        current_ref.offsetLeft - dropdownOffset + current_offset
    const [left_offset, setLeftOffset] = useState(current_ref.offsetLeft)
    const [left_arrow_offset, setLeftArrowOffset] = useState()

    const updateOffsets = useCallback(() => {
        if (is_trade) {
            setLeftArrowOffset(setTradeArrowOffset(dropdownContainerRef.current.offsetLeft))
        } else if (current_ref && !is_trade) {
            setLeftOffset(current_ref.offsetLeft)
            setLeftArrowOffset(current_offset)
        }
    }, [current_ref])

    const setInitArrowOffset = () => {
        const dropdown_offset = dropdownContainerRef.current.offsetLeft
        setLeftArrowOffset(is_trade ? setTradeArrowOffset(dropdown_offset) : current_offset)
    }

    useEffect(() => setInitArrowOffset(), [])

    useEffect(() => {
        if (dropdownContainerRef) {
            setActiveDropdown(dropdownContainerRef)
        }
        window.addEventListener('resize', updateOffsets)
        return () => {
            window.removeEventListener('resize', updateOffsets)
        }
    }, [parent])

    return (
        <Show.Desktop>
            <Flex>
                <NavDropdown
                    ref={dropdownContainerRef}
                    offset={left_offset}
                    offset_arrow={left_arrow_offset}
                    is_trade={is_trade}
                >
                    <StyledContainer>
                        {getNavigationContents(parent, is_ppc, is_ppc_redirect)}
                    </StyledContainer>
                </NavDropdown>
            </Flex>
        </Show.Desktop>
    )
}

PlatformsDropdown.propTypes = {
    active_dropdown: PropTypes.string,
    current_ref: PropTypes.object,
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    parent: PropTypes.string,
    setActiveDropdown: PropTypes.func,
}

export default React.memo(PlatformsDropdown)
