import * as Dialog from "@radix-ui/react-dialog";
import { CloseBtn, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay/>

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseBtn>
          <X size={24}/>
        </CloseBtn>
        
        <form action="">
          <input type="text" placeholder="Descrição" required/>
          <input type="number" placeholder="Preço" required/>
          <input type="text" placeholder="Categoria" required/>

          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}