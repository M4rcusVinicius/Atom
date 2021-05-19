import React from "react"
import Image from 'next/image'
import * as S from "./styled"
import * as I from "@styled-icons/boxicons-logos/"
import { Envelope } from "@styled-icons/boxicons-regular/Envelope"

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
        <S.Social>
          <S.Icon>
            <I.Twitter />
          </S.Icon>
          <S.Icon>
            <Envelope />
          </S.Icon>
          <S.Icon>
            <I.Discord />
          </S.Icon>
          <S.Icon>
            <I.Github />
          </S.Icon>
          <S.Icon>
            <I.Linkedin />
          </S.Icon>
        </S.Social>
      </S.ProfileInfo>
    </S.Profile>
  </S.Wrapper>
)

export default Footer