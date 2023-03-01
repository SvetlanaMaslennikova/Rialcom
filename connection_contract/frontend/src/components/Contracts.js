import React from "react";
import {Link} from "react-router-dom";


const ContractItem = ({contract}) => {
    return (
        <tr>
            <td><Link to={`contract/${contract.last_name}`}>{contract.last_name}</Link></td>
            <td><Link to={`contract/${contract.first_name}`}>{contract.first_name}</Link></td>
            <td><Link to={`contract/${contract.surname}`}>{contract.surname}</Link></td>
            <td><Link to={`contract/${contract.address}`}>{contract.address}</Link></td>
        </tr>
    )
}


const ContractList = ({contracts}) => {
    return (
        <table>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Адрес</th>
            {contracts.map((contract) => <ContractItem contract={contract} />)}
        </table>
    )
}


export default ContractList
