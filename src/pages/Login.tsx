import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { url } from "../global.config";
import { user } from "../interfaces";
import { actionCreators } from "../state";
import {
  LoginContainer,
  LoginFormContainer,
  LoginHeading,
  LoginSubHeading,
  LogoContainer,
  CatLogo,
  LoginForm,
  EmailLabel,
  EmailField,
  PasswordLabel,
  PasswordField,
  SignInButton,
} from "../styles/login.styles";

const Login: React.FC<{}> = () => {
  const [users, setUsers] = useState<user[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { setCurrentUser } = bindActionCreators(actionCreators, dispatch);

  const getUsers = async () => {
    const response = await axios.get(url + `/users`);
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const validateLogin = () => {
    let i: number = 0;
    let found: number = 0;
    if (email === "" || password === "") {
      alert("Please fill the empty field");
    } else {
      while (i < users.length && found === 0) {
        if (email === users[i].email) {
          if (password === users[i].password) {
            found = 1;
          } else {
            found = -1;
          }
        }
        i++;
      }
      if (found === 1) {
        setCurrentUser(email);
        localStorage.setItem("current_user", email);
        navigate("/");
      } else if (found === -1) {
        alert("Wrong email and password combination");
      } else {
        alert("Email doesn't exists!");
      }
    }
  };
  return (
    <>
      <LoginContainer>
        <LoginFormContainer>
          <LoginHeading>FIND THE MOST LOVED ACTIVITIES</LoginHeading>
          <LoginSubHeading>BLACK CAT</LoginSubHeading>
          <LogoContainer>
            <CatLogo />
          </LogoContainer>
          <LoginForm>
            <EmailLabel>
              <EmailField
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </EmailLabel>
            <PasswordLabel>
              <PasswordField
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </PasswordLabel>
          </LoginForm>
        </LoginFormContainer>

        <SignInButton onClick={validateLogin}>SIGN IN</SignInButton>
      </LoginContainer>
    </>
  );
};

export default Login;
