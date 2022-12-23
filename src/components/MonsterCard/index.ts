import styled from 'styled-components'
import card from '../../img/card.png'

export const S = {
    CardWrapper: styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,
    CardImage: styled.div`
        border: 1px solid purple;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-image: url(${card});
        background-size: 100%, contain;
        background-repeat: no-repeat, no-repeat;
        background-position:center;
        padding-top: 100%; // (h/w) x 100
    `,
    RoundDiv: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `
}