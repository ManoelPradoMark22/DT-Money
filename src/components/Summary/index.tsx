import { useContext } from "react";
import { defaultTheme } from "../../styles/themes/default";
import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  console.log('Summary')
  console.log(transactions)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={defaultTheme['green-300']}/>
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={defaultTheme['red-300']}/>
        </header>

        <strong>R$ 1.259,00</strong>
      </SummaryCard>
      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={defaultTheme['white']}/>
        </header>

        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}