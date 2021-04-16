import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { ButtonType, Container, TransactionTypeContainer } from './style';
import { FormEvent, useState } from 'react';
import { useTransactionsContext } from '../../hooks/useTransactionsContext';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } = useTransactionsContext();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [typeButton, setTypeButton] = useState('deposit');

    async function createNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type: typeButton,
        });

        setTitle('');
        setAmount(0);
        setCategory('');
        setTypeButton('deposit');

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <h2>Cadastrar transação</h2>

            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={createNewTransaction} >
                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input 
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <ButtonType
                        type="button"
                        onClick={() => { setTypeButton('deposit'); }}
                        isActive={typeButton === 'deposit'}
                        activeColor="green"
                        >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </ButtonType>
                    <ButtonType
                        type="button"
                        onClick={() => { setTypeButton('withdraw'); }}
                        isActive={typeButton === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </ButtonType>
                </TransactionTypeContainer>
                <input 
                    placeholder="Categotia"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit" >Cadastrar</button>
            </Container>

        </Modal>
    )
}