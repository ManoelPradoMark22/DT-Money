import { HeaderContainer, HeaderContent, NewTransactionBtn } from "./styles";

import logoImg from '../../assets/logo.svg'
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionBtn>Nova transação</NewTransactionBtn>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay/>

            <Dialog.Content>
              <Dialog.Title>Nova transação</Dialog.Title>
              <Dialog.DialogClose />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}