import React from "react";
import { useParams } from "react-router-dom";

const ContractAddressItem = ({item}) => {
    return (
        <tr>
            <td>{item.address.city}</td>
            <td>{item.street}</td>
            <td>{item.house}</td>
            <td>{item.connection_date}</td>
            <td>{item.blackout_date}</td>
            <td>{item.last_name}</td>
        </tr>
    )
}


const ContractAddressList = ({items}) => {
    let {last_name} = useParams();
    let filtered_items = items.filter((item) => item.last_name === last_name)
    return (
        <table>
            <tr>
                <th>Город</th>
                <th>Улица</th>
                <th>Дом</th>
                <th>Дата подключения</th>
                <th>Дата отключения</th>
                <th>Фамилия</th>
            </tr>
            {filtered_items.map((item) => <ContractAddressItem item={item} />)}
        </table>
    )
}

export default ContractAddressList