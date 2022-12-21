import styled from 'styled-components'
import { between } from 'polished'

export const S = {
    RoundDiv: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        overflow: hidden;
        height: ${between('20px', '35px')}; 
        width: ${between('20px', '35px')};
    `,
    Button: styled.button`
        border: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: Center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        font-size: ${between('10px', '15px')};
        color: ${({theme}) => theme.colors.font};
        box-shadow: rgba(0, 0, 0, 0.15) 0px -12px 12px 0px inset, rgba(0, 0, 0, 0.11) 0px -20px 15px 0px inset, rgba(0, 0, 0, 0.07) 0px -40px 20px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px, 0 0 1px 0px ${({theme}) => theme.colors.backgroundSecond} inset, 0 0 1px 0px ${({theme}) => theme.colors.backgroundSecond};
        background-color: ${({theme}) => theme.colors.backgroundSecond};
    `
}