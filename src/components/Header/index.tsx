import { HeaderContainer, HeaderContent, NewTransactionBtn } from "./styles";

import logoImg from '../../assets/logo.svg'
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionBtn>Nova transação</NewTransactionBtn>
          </Dialog.Trigger>

          <NewTransactionModal/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}