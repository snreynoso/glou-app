import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import BudgetCreation from "./routes/BudgetCreation";
import BudgetResult from "./routes/BudgetResult";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="buget-creation" element={<BudgetCreation />} />
            <Route path="buget-result" element={<BudgetResult />} />
        </Routes>
    </BrowserRouter>
);