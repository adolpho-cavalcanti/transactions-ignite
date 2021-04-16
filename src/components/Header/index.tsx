import logo from '../../assets/logo.svg';
import { Container, Content } from './style';

interface HeaderProps {
    onOpenModalTransaction: () => void;
}

export function Header({ onOpenModalTransaction }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logo} alt="elas vip money" />
                <button type="button" onClick={onOpenModalTransaction}>Nova Transação</button>
            </Content>
        </Container>
    )
}