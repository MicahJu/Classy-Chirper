import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task: '',
            todos: []
        };
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({ 
            Chirp: '', 
            Chirps: [...this.state.chirps,{ id: 2, chirp: this.state.chirp}] 
        });
    }

    render() {
        return (
            <main className="container">
                <section className="row justify-content mt-5">
                    <div className="col-md-7">
                        <form className="form-group">
                            <label>Chirp:</label>
                            <input
                                value={this.state.task}
                                onChange={e=> this.setState({ chirp: e.target.value})}
                                className='form-control'
                            />
                            <button onClick={e => this.handleSubmit(e)} className="btn btn-primary">
                                Add Chirp
                            </button>
                        </form>
                    </div>
                </section>
                <section className="row justify-content-center my-5">
                    <div className="col-md-6">
                        <ul className= "list-group">
                            {this.state.chirps.map(chirps => (
                                <li className="list-group-item" key={`chirp-task-${chirp.id}`}>
                                    {chirp.task}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        );
    }
