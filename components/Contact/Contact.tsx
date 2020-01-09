import React, {Component} from "react";
import PropTypes from 'prop-types';
import Input from "./Input/Input";
import classes from './Contact.module.css';
class Contact extends Component {
    state = {
        name: "",
        message: "",
        email: ""
    };

    // @ts-ignore
    textChangeHandler(type, text) {
        const oldState = {...this.state};
        // @ts-ignore
        oldState[type] = text;
        this.setState(oldState);
    }

    render() {
        // Change div to AUX HOC?
        // const allInputs = Object.keys(this.state).map((key: String, index: number) => {
        //     return <Input key={index} name={key} message={this.state[name]} textChange={this.textChangeHandler}/>
        // });
        return (
            <div className={classes.Contact}>
                <p>Interested in working on a project together? Feel free to send an email here or at
                    hello@hiimchrislim.co</p>
                <p>Responses take 1-2 days!</p>
                <Input name={"name"}/>
                {/*<button>Submit</button>*/}
                {/*{allInputs}*/}
            </div>
        )
    }
}

export default Contact;

// Contact.propType = {
//     name: String,
//     message: String,
//     email: String,
//
// }
