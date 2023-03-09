import React from "react";
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import ContractList from "./components/Contracts.js";
import AddressList from "./components/Address.js";
import ContractAddressList from "./components/ContractAddress";
import ContractForm from "./components/ContractForm";
import {Route, Link, Switch, BrowserRouter, Redirect} from 'react-router-dom'
import address from "./components/Address.js";



const NotFound404 = ({ location }) => {
    return (
        <div>
            <h1>Страница по адресу `{location.pathname}` не найдена</h1>
        </div>
    )
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'contracts': [],
            'address': [],
        }
    }

    createContract(last_name, first_name, surname, phone, email, created_date, conclusion_date) {
        const data = {last_name: last_name, first_name: first_name, surname: surname, phone: phone, email: email,
            created_date: created_date, conclusion_date: conclusion_date, address: address}
        axios.post('http://127.0.0.1:8000/api/contracts/', data)
            .then(response => {
                let new_contract = response.data
                const address = this.state.address.filter((item) => item.id === new_contract.address)[0]
                new_contract.address = address
                this.setState({contracts: [...this.state.contracts, new_contract]})
            }).catch(error => console.log(error))
    }

    // deleteContract(last_name) {
    //     axios.delete('http://127.0.0.1:8000/api/contracts/${last_name}')
    //         .then(response => {
    //             this.setState({contracts: this.state.contracts.filter((contract)=>contract.last_name !== last_name)})
    //         }).catch(error => console.log(error))
    // }

    load_data() {
        axios.get('http://127.0.0.1:8000/api/contracts')
            .then(response => {
                const contracts = response.data
                    this.setState(
                        {
                            'contracts': contracts['results']
                        }
                    )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/address')
            .then(response => {
                const address = response.data
                    this.setState(
                        {
                            'address': address['results']
                        }
                    )
        }).catch(error => console.log(error))
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/contracts')
            .then(response => {
                const contracts = response.data
                    this.setState(
                    {'contracts': contracts}
                    )
            }).catch(error => console.log(error))
    }


    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Договора</Link>
                            </li>
                            <li>
                                <Link to='/address'>Address</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={() => <ContractList contracts={this.state.contracts} />} />
                            {/*// deleteContract={(last_name)=>this.deleteContract(last_name)} />} />*/}
                        <Route exact path='/contracts/create' component={() =>
                            <ContractForm address={this.state.address}
                                createContract={(last_name, first_name, surname, phone, email, created_date, conclusion_date)=>
                                    this.createContract(last_name, first_name, surname, phone, email, created_date, conclusion_date)} />} />
                        <Route exact path='/address' component={() => <AddressList items={this.state.address}/>}/>
                        <Route path='/contracts/:last_name'><ContractAddressList items={this.state.contracts} /></Route>
                        <Redirect from='/contracts' to='/' />
                        <Route component={NotFound404}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
