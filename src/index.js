import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./routes/Login";
import BudgetCreatForm from "./routes/BudgetCreation";
import BudgetResult from "./routes/BudgetResult";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="budget-creation" element={<BudgetCreatForm />} />
            <Route path="budget-result" element={<BudgetResult />} />
        </Routes>
    </BrowserRouter>
);