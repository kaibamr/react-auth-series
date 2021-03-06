import React, { Component } from 'react';
import SignupComponent from "./Component";
import {connect} from "react-redux";

class SignupContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: "",
                email: ""
            }
        }
    }
    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    clearInputs() {
        this.setState({
            inputs: {
                username: "",
                password: "",
                email: ""
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        // This is where we will call our signup function from redux
        alert(JSON.stringify(this.state.inputs));
        this.clearInputs();
    }
    render() {
        return (
            <SignupComponent
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                {...this.state.inputs} />
        )
    }
}

export default connect(null,{})(SignupContainer);



