import { useContext } from 'react';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';
import { useTransactionsContext } from '../../hooks/useTransactionsContext';
import { Container } from './style';

export function Sumary() {

    const { transactions } = useTransactionsContext();

    const summary = transactions.reduce((acc, transaction) => { 

        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.totals += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.totals -= transaction.amount;
        }

        return acc;

    }, { 
        deposits: 0,
        withdraws: 0,
        totals: 0,
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImage} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImage} alt="Saídas" />
                </header>
                <strong>- 
                {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={totalImage} alt="Total" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.totals)}
                </strong>
            </div>
        </Container>
    )
}