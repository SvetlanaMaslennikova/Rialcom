import React from "react";


const AddressItem = ({item}) => {
    return (
        <tr>
            <td>{item.city}</td>
            <td>{item.street}</td>
            <td>{item.house}</td>
            <td>{item.connection_date}</td>
            <td>{item.blackout_date}</td>
        </tr>
    )
}


const AddressList = ({items}) => {
    return (
        <table>
            <th>Город</th>
            <th>Улица</th>
            <th>Дом</th>
            <th>Дата подключения</th>
            <th>Дата отключения</th>
            {items.map((item) => <AddressItem item={item} />)}
        </table>
    )
}

export default AddressList
