import React from 'react';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Expense Form</h1>
      <ExpenseForm />
    </div>
  );
};

export default App;
