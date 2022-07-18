import { Outlet } from "react-router-dom";
//import Navbar from "./Navbar";

const BudgetLayout = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Outlet />
        </>

    );
}

export default BudgetLayout;