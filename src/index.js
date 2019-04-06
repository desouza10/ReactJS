import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button"

class App extends Component {

    state = {
        counter: 0,
    };

    handleClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    /**
     * this.setState -> É uma função síncrona. Para torná-la assíncrona, é necessário que a estrutra seja seguida por um callback
     * exempplo:
     *
     *  handleClick = () => {
     *       this.setState( { counter: this.state.counter + 1 }, () => {
     *          console.log(this.state.counter); //Neste caso, podemos ver a alteração dinâmicamente
     *      });
     *  }
     *
     * Para ter acesso a fila do estado, e poder alterar dados de forma dinâmica, devemos passar uma função dentro
     * do this.setState
     * Exemplo:
     *
     *  handleClick = () => {
     *      this.setState(state => ( {counter: state.counter + 1 } ));
     *      this.setState(state => ( {counter: state.counter + 1 } ));
     *   }
     *
     */

    render() {
        return (
            <Fragment>
                <h1>Hello World</h1>
                <h2>{this.state.counter}</h2>
                <Button onClick={this.handleClick}>Somar</Button>
            </Fragment>
        );
    }
}

render(<App />, document.getElementById("app"));