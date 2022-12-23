import styled from 'styled-components'

interface wrapperProps {
    width: number,
    height: number
}

export const S = {
    Wrapper: styled.div<wrapperProps>`
        position: relative;
        border: 2px solid blueviolet;
        width: 100%;
        max-width: ${({width}) => width}px;
        aspect-ratio: 10 / 6;
        display: grid;
        grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
        grid-template-rows: calc(100%/6) calc(100%/6) calc(100%/6) calc(100%/6) calc(100%/6) calc(100%/6);
    `,
    MonsterRow: styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        height: 100%;
    `
}