import React from "react"
import Image from 'next/image'
import * as S from "./styled"

const Footer = () => (
  <S.Wrapper>
    
    <S.Image>
      <Image
        src="/Profile.png"
        alt="Picture of the author"
        width={80}
        height={80}
      />
    </S.Image>
    <S.Title>Distribuição Eletrônica de Linus Pauling</S.Title>
  </S.Wrapper>
)

export default Footer