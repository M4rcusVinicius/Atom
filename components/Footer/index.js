import React from "react"
import Image from 'next/image'
import * as S from "./styled"

const Footer = () => (
  <S.Wrapper>
    <S.Profile>
      <S.Image>
        <Image
          src="/Profile.png"
          alt="Picture of the author"
          width={80}
          height={80}
        />
      </S.Image>
      <S.ProfileInfo>
        <S.Name>Desenvolvido por Marcus Vinícius</S.Name>
      </S.ProfileInfo>
    </S.Profile>
  </S.Wrapper>
)

export default Footer