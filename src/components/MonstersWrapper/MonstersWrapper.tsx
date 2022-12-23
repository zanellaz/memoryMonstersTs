import { FC } from  'react';
import { S } from './index'
import Cards from '../Cards/Cards';

const MonstersWrapper: FC = () => {
  const correctWidth = window.innerWidth - window.innerWidth / 2
  const correctHeight = window.innerHeight - window.innerHeight / 2
  return (
    <S.Wrapper
      width={correctWidth}
      height={correctHeight}
    >
      <Cards />
  </S.Wrapper>
  );
};

export default MonstersWrapper