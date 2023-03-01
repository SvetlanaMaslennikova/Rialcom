import React from "react";
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import ContractList from "./components/Contracts.js";
import ConnectionAddressList from "./components/ConnectionAddress.js";
import {Route, Link, Routes, BrowserRouter} from 'react-router-dom'

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
                                <Link to='/address'>Адреса</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path='/' element={() => <ContractList contracts={this.state.contracts} />} />
                        <Route path='/address' element={() => <ConnectionAddressList address={this.state.address} />} />
                        <Route component={NotFound404}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
