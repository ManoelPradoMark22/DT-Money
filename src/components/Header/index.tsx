import { HeaderContainer, HeaderContent, NewTransactionBtn } from "./styles";

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />

        <NewTransactionBtn>Nova transação</NewTransactionBtn>
      </HeaderContent>
    </HeaderContainer>
  )
}