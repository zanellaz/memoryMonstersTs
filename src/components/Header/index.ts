import styled from 'styled-components'
import { between } from 'polished'

const defaultMargin = between('5px', '16px')

export const S = {
    Container: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        height: ${between('30px', '50px')};
        background-color: ${({theme}) => theme.colors.primary};
    `,
    Wrapper: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: Center;
        height: 100%;
        color: ${({theme}) => theme.colors.font};
    `,
    SwitchWrapper: styled.div`
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: Center;
        height: 50%;
        margin-right: ${defaultMargin};
        color: ${({theme}) => theme.colors.font};
    `,
    Title: styled.h1`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${between('16px', '20px')}
    `,
    ImgWrapper: styled.div`
        display: flex;
        margin-left: ${defaultMargin};
        flex-direction: row;
        align-items: center;
        justify-content: Center;
        height: 100%;
        color: ${({theme}) => theme.colors.font};
    `,
    Logo: styled.img`
        width: 100%;
        height: 100%;
    `
}