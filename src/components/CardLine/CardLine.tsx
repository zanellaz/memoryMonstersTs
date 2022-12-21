import { FC, useContext } from  'react';
import { S } from './index'
import { ThemeContext } from 'styled-components';
import MonsterCard from '../MonsterCard/MonsterCard';

const CardLine: FC = () => {
  const { title } = useContext(ThemeContext)
  
  return (
      <S.MonsterRow>
        <MonsterCard
          imgUrl=''
        />
        <MonsterCard
          imgUrl=''
        />
        <MonsterCard
          imgUrl=''
        />
        <MonsterCard
          imgUrl=''
        />
        <MonsterCard
          imgUrl=''
        />
        <MonsterCard
          imgUrl=''
        />
        <MonsterCard
          imgUrl=''
        />
        <MonsterCard
          imgUrl=''
        />
        <MonsterCard
          imgUrl=''
        />
        <MonsterCard
          imgUrl=''
        />
      </S.MonsterRow>
  );
};

export default CardLine