import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard/index';
import { NewTransactionModal } from './components/NewTransactionModal/index';

import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './hooks/useTransactionsContext';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactioMmodalOpen,setIsNewTransactioMmodalOpen] = useState(false);

  function openModalTransaction() {
    setIsNewTransactioMmodalOpen(true);
  }

  function closeModalTransaction(){
    setIsNewTransactioMmodalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenModalTransaction={openModalTransaction}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactioMmodalOpen}
        onRequestClose={closeModalTransaction} />

      <GlobalStyle />
    </TransactionsProvider>
  );
}