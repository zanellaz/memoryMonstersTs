import { FC } from  'react'
import MonsterCard from '../MonsterCard/MonsterCard'

const Cards: FC = () => {
  return(
    <>
      {[...Array(60)].map(x => {
          return <MonsterCard imgUrl=''/>
      })}
    </>
  )
};

export default Cards