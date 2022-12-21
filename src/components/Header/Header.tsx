import { FC, useContext } from  'react';
import { S } from './index'
import ThemeButton from '../ThemeButton/ThemeButton'
import GlobalStyle from '../../styles/global';
import { ThemeContext } from 'styled-components';
import logoDark from "../../img/logoDark.svg";
import logoWhite from "../../img/logoWhite.svg";

interface Props {
  toggleTheme(): void;
}

const Header: FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext)
  const logo = title === 'dark' ? logoDark : logoWhite
  
  return (
    <S.Container>
      <GlobalStyle />
      <S.Wrapper>
        <S.ImgWrapper>
          <S.Logo src={logo} alt="logo" />
        </S.ImgWrapper>
        <S.Title>
          Memory Monsters
        </S.Title>
      </S.Wrapper>
      <S.SwitchWrapper>
        <ThemeButton 
          onChange={toggleTheme}
        />
      </S.SwitchWrapper>  
    </S.Container>
  );
};

export default Header