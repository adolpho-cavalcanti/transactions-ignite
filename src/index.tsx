import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Pizza',
          type: 'withdraw',
          category: 'Alimentação',
          amount: 48,
          createdAt: new Date('2021-03-10 18:00:00')
        },
        {
          id: 2,
          title: 'Gasolina',
          type: 'withdraw',
          category: 'Combustível',
          amount: 250,
          createdAt: new Date('2021-03-23 18:00:00')
        },
        {
          id: 3,
          title: 'Freelancer',
          type: 'deposit',
          category: 'Dev',
          amount: 900,
          createdAt: new Date('2021-03-23 18:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
