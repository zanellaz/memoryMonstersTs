import { FC } from  'react';
import { S } from './index'

interface Props {
  imgUrl: string;
}

const MonsterCard: FC<Props> = ({ imgUrl }) => {
  return (
    <S.CardWrapper>
      <S.CardImage>
        <S.RoundDiv>
          
        </S.RoundDiv>
      </S.CardImage>
    </S.CardWrapper>
  );
};

export default MonsterCard