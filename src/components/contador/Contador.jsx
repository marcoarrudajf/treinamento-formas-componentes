import './Contador.css';
import React from 'react';
import Display from './Display';
import PassoForm from './PassoForm';
import Botton from './Botton';

export default class Contador extends React.Component {
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0,
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }
    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }
    render() {
        return (
            <div>
                <div className="Contador">
                    <h2>Contador</h2>
                    <PassoForm passo={this.state.passo}
                        onPassoChange={this.mudarPasso}></PassoForm>
                    <Display valor={this.state.valor}></Display>
                    <Botton onInc={this.inc} onDec={this.dec}></Botton>

                </div>
            </div>

        );
    }


}