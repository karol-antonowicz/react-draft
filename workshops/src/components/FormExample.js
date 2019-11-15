import React from "react";

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
        <input
          onChange={this.changeHandler}
          value={this.state.form.firstName}
          type="text"
          name="firstName"
        />
        <input
          onChange={this.changeHandler}
          value={this.state.form.lastName}
          type="text"
          name="lastName"
        />
        <input
          onChange={this.changeHandler}
          value={this.state.form.email}
          type="email"
          name="email"
        />
      </form>
    );
  }
}

export default FormExample;
