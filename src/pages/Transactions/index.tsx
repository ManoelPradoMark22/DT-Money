import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header/>
      <Summary />

      <TransactionsContainer>
        <SearchForm/>
        
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/08/2023</td>
            </tr>
            <tr>
              <td width="50%">Salário</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>27/01/2024</td>
            </tr>
            <tr>
              <td width="50%">Alimentação</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 59,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>13/12/2023</td>
            </tr>
            <tr>
              <td width="50%">Cinema</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 50,00
                </PriceHighlight>
              </td>
              <td>Lazer</td>
              <td>05/01/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}