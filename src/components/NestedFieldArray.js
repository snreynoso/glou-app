import React from "react";
import { useFieldArray } from "react-hook-form";

export default function NestedFieldArray({ nestIndex, control, register }) {
    const { fields, remove, append } = useFieldArray({
        control,
        name: `test.${nestIndex}.nestedArray`
    });

    return (
        <>
            {fields.map((item, k) => {
                return (
                    <tr key={item.id} >
                        <td>
                            <select {...register(`test.${nestIndex}.nestedArray.${k}.isExpense`)}>
                                {/* Llevar las option a un componente */}
                                <option value="false">Ingreso</option>
                                <option value="true" >Gasto</option>
                            </select>
                        </td>
                        <td>
                            <select {...register(`test.${nestIndex}.nestedArray.${k}.category`)} >
                                <option value="Hogar">Hogar</option>
                                <option value="Personal">Familia o Personal</option>
                                <option value="Financieros">Financieros</option>
                            </select>
                        </td>
                        <td>
                            <select {...register(`test.${nestIndex}.nestedArray.${k}.subcategory`)} >
                                <option value="Servicios">Servicios</option>
                                <option value="Internet">Internet</option>
                                <option value="Cuentas">Cuentas</option>
                                <option value="Comida">Comida</option>
                                <option value="Salud">Salud</option>
                                <option value="Educacion">Educación</option>
                                <option value="credit-card">Tarjeta de Crédito</option>
                                <option value="debit-card">Tarjeta de Débito</option>
                                <option value="lease">Prestamo</option>
                            </select>
                        </td>
                        <td>
                            <input placeholder="Nombre" required {...register(`test.${nestIndex}.nestedArray.${k}.name`)} />
                        </td>
                        <td>
                            <input placeholder="Monto" required {...register(`test.${nestIndex}.nestedArray.${k}.amount`)} />
                        </td>
                        <td>
                            <input className="ui red button" type="button" onClick={() => remove(k)} value="X" />
                        </td>
                    </tr>
                );
            })}
            <input className="ui primary button" type="button" onClick={() => append({
                isExpense: true,
                category: "Hogar",
                subcategory: "Servicios",
                name: "",
                amount: ""
            })
            } value="Agregar Item" style={{ marginTop: '5px' }} />
        </>
    );
};