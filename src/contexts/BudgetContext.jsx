import { createContext } from "react";

const BudgetContext = createContext();

export function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
      {children}
    </BudgetContext.Provider>
  );
}

export default BudgetContext;