import { useSelector } from "react-redux/es/exports";
import { useForm, useFieldArray } from "react-hook-form";
import NestedFieldArray from '../components/NestedFieldArray';
import axios from 'axios';
import { createSearchParams, useNavigate } from 'react-router-dom';
import Header from "../components/Header";

const defaultValues = {
    test: [
        {
            name: "",
            nestedArray: [{
                isExpense: "false",
                category: "Hogar",
                subcategory: "Servicios",
                name: "",
                amount: ""
            }]
        }
    ]
};

const BudgetCreation = () => {
    const navigate = useNavigate();

    // Leer de redux
    const user = useSelector(state => state.user);
    const token = user.token;

    const { control, register, handleSubmit, } = useForm({ defaultValues });
    const { fields } = useFieldArray({ control, name: "test" });

    const onSubmit = async data => {
        const databody = {
            name: data.test[0].name,
            rows: data.test[0].nestedArray
        };

        // POST request to log in an get the TOKEN
        await axios.post(
            'https://glou-back.herokuapp.com/budgets',
            databody,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then(res => {
            const data = JSON.stringify(res.data);
            alert("El presupuesto ha sido guardado correctamente");
            navigate({
                pathname: "../budget-result",
                replace: true,
                search: createSearchParams({
                    dataRes: data
                }).toString()
            })
        }).catch(error => {
            console.log(error);
            alert("Hubo un error en la carga del presupuesto")
        });
    };

    return (
        <div className="ui segment placeholder">
            <Header title={"Crear nuevo presupuesto"} />

            <form className="ui small form" onSubmit={handleSubmit(onSubmit)}>
                {fields.map((item, index) => {
                    return (
                        <div key={item.id}>

                            <div className="two fields">
                                <div className="field">
                                    <div className="ui header" >Nombre del Presupuesto</div>
                                    <input placeholder="Ingrese el nombre" {...register(`test.${index}.name`)} required />
                                </div>
                                <div className="field">
                                    <div className="ui header" >Acces Token</div>
                                    <input name="accToken" type="text" />
                                </div>
                            </div>

                            <table className="ui celled table">
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Categoria</th>
                                        <th>Subcategoria</th>
                                        <th>Nombre</th>
                                        <th>Monto en $</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <NestedFieldArray nestIndex={index} {...{ control, register }} />
                                </tbody>
                            </table>

                        </div>
                    );
                })}
                <input className="ui green button" type="submit" value="Guardar" style={{ marginTop: '5px' }} />
            </form>
        </div>
    );
};

export default BudgetCreation;