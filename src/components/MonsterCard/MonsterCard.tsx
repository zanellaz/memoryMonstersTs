import { FC, useContext } from  'react';
import { S } from './index'
import { ThemeContext } from 'styled-components';

interface Props {
  imgUrl: string;
}

const MonsterCard: FC<Props> = ({ imgUrl }) => {
  const { title } = useContext(ThemeContext)
  
  return (
    <S.CardWrapper>
      <S.CardImage>
        <S.RoundDiv>
          a
        </S.RoundDiv>
      </S.CardImage>
    </S.CardWrapper>
  );
};

export default MonsterCard