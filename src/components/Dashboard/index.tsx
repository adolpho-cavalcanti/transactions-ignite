import { Container } from './style';

import { Sumary } from '../Sumary/index';
import { TransactionTable } from '../TransactionsTable/index';

export function Dashboard() {
    return (
        <Container>
            <Sumary />
            <TransactionTable />
        </Container>
    )
}