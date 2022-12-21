import { FC, useContext } from  'react';
import { S } from './index'
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons'

interface Props {
  onChange(): void;
}

const ThemeButton: FC<Props> = ({ onChange }) => {
  const { title } = useContext(ThemeContext)
  const icon = title === 'dark' ? <FontAwesomeIcon icon={faLightbulb} /> : <FontAwesomeIcon icon={faMoon} />
  
  return (
    <S.RoundDiv>
          <S.Button
           onClick={onChange}>
            {icon}
          </S.Button>
      </S.RoundDiv>
  );
};

export default ThemeButton