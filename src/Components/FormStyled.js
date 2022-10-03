import styled from "styled-components";

const Form = styled.form`
  @import url(https://fonts.googleapis.com/css?family=Roboto:300);

  body {
    background: #76b852;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .form-container {
    width: 360px;
    background-color: white;
    margin: auto;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    padding: 10px;
  }

  .register-form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .success-message {
    font-family: "Roboto", sans-serif;
    background-color: #3f89f8;
    padding: 15px;
    color: white;
  }

  .form-field {
    margin: 10px 0 10px 0;
    padding: 15px;
    font-size: 16px;
    border: 0;
    font-family: "Roboto", sans-serif;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: red;
    margin-bottom: 15px;
  }

  input {
    background: #f2f2f2;
  }

  .error {
    border-style: solid;
    border: 2px solid #ffa4a4;
  }

  button {
    background: #8456ec;
    border-color: #8456ec;
    color: white;
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
  }
`;

export default Form;
