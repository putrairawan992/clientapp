import React, { useState } from "react";
import { Input, Icon, Button, Form, Row, Col } from "antd";
import { Formik } from "formik";
import "./style.sass";
import {Link} from "react-router-dom";
import { schema } from "./schema";
import ButtonIcon from "../../components/ButtonIcon";
import {Redirect} from "react-router-dom";
import history from "../../routers/history";

function Login(props) {
    const [wrongPassword,setWrongPassword] = useState('Password Salah');
    const [isWrongPassword,setIsWrongPassword] = useState(false);
    function handleLogin(values){
        console.log(values);
        if (values.password !== 'counter') {
            setIsWrongPassword(true)
            setTimeout(()=>{
                setIsWrongPassword(false)
            })
        }
        if (values.email === "putrairawan992@yahoo.com" && values.password === "counter") {
            return history.push("/dashboard")
        }
        
    }
    return (
        <Row className="ipay88-login-wrapper">
            <Col md={24}>
            <h1>E-PKS iPay88</h1>
                    <div className="ipay88-login-form">
                    <div className="ipay88-login-form-wrapper">
                    <div  className="ipay88-login-form-wrapper__top-content-style">
                        <img alt="" src={require("../../assets/image/login/logo.jpg")}/>
                    </div>
                    <Formik  
                    onSubmit={values => {
                        handleLogin(values);
                      }}
                        validationSchema={schema}
                        initialValues={{ email: "", password: "", role: "" }}>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        }) => (
                                <Form  
                                onSubmit={handleSubmit} 
                                className="ipay88-login-form__children">
                                    <p class="ipay88-login-form__children__legend">
                                        Login Here
                                    <span class="fa fa-hand-o-down">
                                    </span>
                                    </p>
                                    <Form.Item validateStatus={errors.email && "error"} 
                                    help={errors.email}>
                                        <Input
                                            placeholder="Email"
                                            name="email"
                                            prefix={
                                                <Icon
                                                    type="user"
                                                    style={{
                                                        color: "rgba(0,0,0,.25)",
                                                        fontSize: "15.64px"
                                                    }}
                                                />
                                            }
                                            onChange={handleChange}
                                            value={values.email}
                                            className="ipay88-login-form-wrapper__input-text"
                                        />
                                    </Form.Item>
                                    <Form.Item 
                                    validateStatus={errors.password && "error" || isWrongPassword && wrongPassword && "error"   } 
                                    help={errors.password || isWrongPassword && wrongPassword}>
                                        <Input
                                            name="password"
                                            prefix={
                                                <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                                            }
                                            type="password"
                                            placeholder="Password"
                                            onChange={handleChange}
                                            value={values.password}
                                            className="ipay88-login-form-wrapper__input-text"
                                        />
                                    </Form.Item>
                                    <ButtonIcon
                                        htmlType="submit"
                                        type="primary" 
                                        icon="export"
                                ></ButtonIcon>
                                   
                                </Form>
                            )}
                    </Formik>
                    <Link to="" className="ipay88-login-form-wrapper__forgot-password">
                        Forgot Password?
                    </Link>
                    </div>
                    </div>
          </Col>
        
        </Row>
            );
};



export default Login;
