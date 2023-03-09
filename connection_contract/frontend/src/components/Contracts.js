import React from "react";
import {Link} from "react-router-dom";


const ContractItem = ({contract, deleteContract}) => {
    return (
        <tr>
            <td><Link to={`contracts/${contract.last_name}`}>{contract.last_name}</Link></td>
            <td>{contract.first_name}</td>
            <td>{contract.surname}</td>
            <td>{contract.created_date}</td>
            <td>{contract.conclusion_date}</td>
            <td>{contract.address}</td>

            {/*<td><button onClick={()=>deleteContract(contract.last_name)} type='button'>Удалить</button></td>*/}
        </tr>
    )
}


const ContractList = ({contracts, deleteContract}) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Дата создания</th>
                    <th>Дата заключения</th>
                    <th>Address</th>
                    {/*<th>Город</th>*/}
                    {/*<th>Улица</th>*/}
                    {/*<th>Дом</th>*/}
                    {/*<th>Дата подключения</th>*/}
                    {/*<th>Дата отключения</th>*/}
                </tr>
                    {contracts.map((contract) => <ContractItem contract={contract} deleteContract={deleteContract}/>)}
            </table>
            <Link to='/contracts/create'>Создать</Link>
        </div>
    )
}


export default ContractList
