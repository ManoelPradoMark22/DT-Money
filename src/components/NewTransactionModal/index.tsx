import * as Dialog from "@radix-ui/react-dialog";
import { CloseBtn, Content, Overlay, TransactionType, TransactionTypeBtn } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

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

          <TransactionType>
            <TransactionTypeBtn variant="income" value='income'>
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeBtn>
            <TransactionTypeBtn variant="outcome" value='outcome'>
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeBtn>
          </TransactionType>

          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}