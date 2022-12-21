import { FC, useContext, useEffect, useState } from  'react';
import { S } from './index'
import CardLine from '../CardLine/CardLine';

const MonstersWrapper: FC = () => {
  const [correctWidth, setWidth] = useState(window.innerWidth - window.innerWidth/10)
  const [correctHeight, setHeight] = useState(window.innerHeight - window.innerHeight/10)

  const resizeAdjust = () => {
    const widthRatio = correctWidth/16
    const heightRatio = correctHeight/9
    if (widthRatio > heightRatio)
        setWidth(heightRatio * 16)
    else 
        setHeight(widthRatio * 9)
  }

  useEffect(() => {
    const wrapper = S.Wrapper
    wrapper.width = `${correctWidth}px`
    wrapper.height = `${correctHeight}px`
  }, [correctHeight, correctWidth])

window.addEventListener('resize', resizeAdjust)

  return (
    <S.Wrapper
        width={`${correctWidth}px`}
        height={`${correctHeight}px`}>
      <CardLine />
      <CardLine />
      <CardLine />
      <CardLine />
      <CardLine />
    </S.Wrapper>
  );
};

export default MonstersWrapper