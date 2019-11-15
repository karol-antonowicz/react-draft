import React from "react";
import { Input } from "semantic-ui-react";

const TextInput = props => {
  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <Input name={props.name} {...props} />
    </div>
  );
};

class FormExample extends React.Component {
  state = {
    form: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com"
    }
  };

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  };

  render() {
    return (
      <form className={"my-form"}>
        <TextInput
          onChange={this.changeHandler}
          value={this.state.form.firstName}
          type="text"
          name="firstName"
        />
        <TextInput
          onChange={this.changeHandler}
          value={this.state.form.lastName}
          type="text"
          name="lastName"
        />
        <TextInput
          onChange={this.changeHandler}
          value={this.state.form.email}
          type="email"
          name="email"
          error
        />
      </form>
    );
  }
}

export default FormExample;
