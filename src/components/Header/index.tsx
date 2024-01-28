import { HeaderContainer, HeaderContent, NewTransactionBtn } from "./styles";

import logoImg from '../../assets/logo.svg'
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  function closeModalAfterSubmit() {
    setOpen(false);
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionBtn>Nova transação</NewTransactionBtn>
          </Dialog.Trigger>

          <NewTransactionModal closeModal={closeModalAfterSubmit}/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}