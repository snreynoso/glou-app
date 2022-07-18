import { Routes, Route } from 'react-router-dom';
import LoginLayout from './components/LoginLayout';
import BudgetLayout from './components/BudgetLayout';

// Import pages
import Login from "./pages/Login";
import BudgetCreation from "./pages/BudgetCreation";
import BudgetResult   from "./pages/BudgetResult";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginLayout />} >
                <Route index element={<Login />} />
            </Route>
            <Route path="/budget" element={<BudgetLayout />}>
                <Route path="budget-creation" element={<BudgetCreation />} />
                <Route path="budget-result" element={<BudgetResult />} />
            </Route>
        </Routes>
    )
}

export default App;