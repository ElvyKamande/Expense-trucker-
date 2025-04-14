app.jsx

import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/Form'
import ExpenseList from './components/Table'

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Mama Mboga's groceries",
      amount: 75.30,
      date: "2025-07-06",
      category: "Food"
    },
    {
      id: 2,
      description: " Prime videos subscription",
      amount: 1200.,
      date: "2025-04-01",
      category: "Entertainment"
    },
    {
      id: 3,
      description: "School fees for the kids",
      amount: 15000,
      date: "2025-05-15",
      category: "Education"
    },
    {
      id: 4,
      description: "Electricity bill",
      amount: 2500,
      date: "2025-06-20",
      category: "Utilities"
    },
    {
      id: 5,
      description: "Car fuel",
      amount: 3000,
      date: "2025-07-01",
      category: "Transport"
    },
    {
      id: 6,
      description: "Rent for the month",
      amount: 20000,
      date: "2025-07-01",
      category: "Housing"
    },
    {
      id: 7,
      description: "Internet bill",
      amount: 1500,
      date: "2025-07-05",
      category: "Utilities"
    },
    {
      id: 8,
      description: "Groceries for the week",
      amount: 5000,
      date: "2025-07-10",
      category: "Food"
    }
  ]);

  // Handler for adding a new expense
  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // Handler for deleting an expense
  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="expense-tracker-container">
      <h1>Expense Tracker</h1>
      <div className="expense-tracker-content">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList 
          expenses={expenses} 
          onDeleteExpense={handleDeleteExpense} 
        />
      </div>
    </div>
  )
}

export default App