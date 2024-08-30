import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  height: 560px;
  width: 100%;
  font-weigth: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    postion: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weigth: bold;
  max-width: 450px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    texto-decoration: line-ttrought;
  }
`
