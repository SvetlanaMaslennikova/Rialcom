import React from "react";


const ConnectionAddressItem = ({address}) => {
    return (
        <tr>
            <td>{address.city}</td>
            <td>{address.street}</td>
            <td>{address.house}</td>
        </tr>
    )
}


const ConnectionAddressList = ({address}) => {
    return (
        <table>
            <th>Город</th>
            <th>Улица</th>
            <th>Дом</th>
            {address.map((address) => <ConnectionAddressItem address={address} />)}
        </table>
    )
}


export default ConnectionAddressList
