import { Link, useSearchParams } from "react-router-dom";

const BudgetResult = () => {

    const [searchparams] = useSearchParams();
    const data = JSON.parse(searchparams.get("dataRes"));
    console.log(data);

    const expenseList = data.rows.map((row, index) => {
        if (!row.isExpense) {
            return (
                <div key={index}>
                    {row.category}
                    <i className="dollar sign icon"></i>
                    {row.amount}
                    {" al mes"}
                </div>
            );
        } else {
            return null;
        }
    });

    const notExpenseList = data.rows.map((row, index) => {
        if (row.isExpense) {
            return (
                <div key={index}>
                    {row.category}
                    <i className="dollar sign icon"></i>
                    {row.amount}
                    {" al mes"}
                </div>
            );
        } else {
            return null;
        }
    });

    return (
        <>
            <div className="ui segment placeholder">
                <h1>Mi situación actual</h1>
                <div className="ui segment ">
                    <h2 className="ui header"> Mis Ingresos</h2>
                    <div className="ui celled grid">
                        <div className="row">
                            <div className="four wide column middle aligned contents">
                                <h3>Ingresos Totales</h3>
                            </div>
                            <div className="six wide column middle aligned contents">
                                <div className="ui right aligned container">
                                    <i className="dollar sign icon"></i>
                                    {data.moneyIn} al mes
                                </div>
                            </div>
                            <div className="six wide column middle aligned contents">
                                <div className="ui right aligned container">
                                    {expenseList}
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2> Cuánto gastaré los próximos meses en:</h2>
                    <div className="ui celled grid">
                        <div className="row">
                            <div className="four wide column middle aligned contents">
                                <h3>Gastos Recurrentes</h3>
                            </div>
                            <div className="six wide column middle aligned contents">
                                <div className="ui right aligned container">
                                    <i className="dollar sign icon"></i>
                                    {data.moneyOut} al mes
                                </div>
                            </div>
                            <div className="six wide column middle aligned contents">
                                <div className="ui right aligned container">
                                    {notExpenseList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui celled grid">
                        <div className="row">
                            <div className="four wide column middle aligned contents">
                                <h3>Resto</h3>
                            </div>
                            <div className="six wide column middle aligned contents">
                                <div className="ui right aligned container">
                                    <i className="dollar sign icon"></i>
                                    {data.moneyIn - data.moneyOut} al mes
                                </div>
                            </div>
                            <div className="six wide column middle aligned contents">
                                <div className="ui right aligned container">
                                    Esto nos queda para otros gastos y ahorro
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='../budget-creation'>
                    <input className="ui green button" type="submit" value="Crear nuevo presupuesto" style={{ marginTop: '5px' }} />
                </Link>
            </div>
        </>
    );
};

export default BudgetResult;