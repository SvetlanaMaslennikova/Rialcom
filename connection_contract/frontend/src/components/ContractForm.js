import React from "react";


class ContractForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {last_name: '', first_name: '', surname: '', phone: '', email: '', created_date: '', conclusion_date: '',
            address: 0}
    }

    handleChange(event)
    {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleSubmit(event) {
        this.props.createContract(this.state.last_name, this.state.first_name, this.state.surname,
            this.state.phone, this.state.email, this.state.created_date, this.state.conclusion_date,
            this.state.address)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label for="last_name">Фамилия</label>
                    <input type="text" className="form-control" name="last_name" value={this.state.last_name}
                           onChange={(event)=>this.handleChange(event)} />
                </div>
                <div className="form-group">
                    <label for="first_name">Имя</label>
                    <input type="text" className="form-control" name="first_name" value={this.state.first_name}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label for="surname">Отчество</label>
                    <input type="text" className="form-control" name="surname" value={this.state.surname}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label for="phone">Телефон</label>
                    <input type="tel" className="form-control" name="phone" value={this.state.phone}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" name="email" value={this.state.email}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label for="created_date">Дата создания</label>
                    <input type="date" className="form-control" name="created_date" value={this.state.created_date}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label for="conclusion_date">Дата заключения</label>
                    <input type="date" className="form-control" name="conclusion_date" value={this.state.conclusion_date}
                           onChange={(event) => this.handleChange(event)}/>
                </div>

                <div className="form-group">
                    <label for="address">Адрес</label>
                    <select name="address" className="form-control" onChange={(event)=>this.handleChange(event)}>
                        {this.props.address.map((item)=><option value={item.id}>{item.name}</option>)}
                    </select>
                </div>
                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        );
    }
}

export default ContractForm