import styled from 'styled-components'

interface Props {
    width: string;
    height: string;
}

export const S = {
    Wrapper: styled.div<Props>`
        border: 2px solid blueviolet;
        display: flex;
        flex-direction: column;
        width: ${props => props.width};
        height: ${props => props.height};
    `,
    MonsterRow: styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        height: 100%;
    `
}