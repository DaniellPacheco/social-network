import * as React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
    render(){
        return(
            <section className="background">
                <div className="login-wrap">
                    <div className="login-inner">
                        <img src="img/img-register.svg" alt="Fique conectado na Cloud"/>
                    </div>
                    <div className="login-inner">
                        <form className="form-wrap" action="" method="POST">
                            <div className="header">
                                <Link className="header-logo" to="/">
                                    <img className="logo" src="img/logo.svg" alt="Logo Cloud"/>
                                </Link>
                                <h1 className="title">Registre-se na <span className="subtitle">Cloud</span></h1>
                            </div>
                            <div className="input-field-half">
                                <div className="field-half">
                                    <label className="input-title" htmlFor="nome">Nome Completo</label>
                                    <input className="input-item input-half" type="text" name="nome" placeholder="Vanessa Camargo"/>
                                </div>
                                <div className="field-half">
                                    <label className="input-title" htmlFor="apelido">Apelido</label>
                                    <input className="input-item input-half pl-10" type="text" name="apelido" placeholder="Vanecinha"/>
                                </div>
                            </div>
                            <div className="input-field">
                                <label className="input-title" htmlFor="email">Endereço de E-mail</label>
                                <input className="input-item" type="email" name="email" placeholder="email@example.com"/>
                            </div>
                            <div className="input-field">
                                <label className="input-title" htmlFor="senha">Senha</label>
                                <input className="input-item" type="password" name="senha" placeholder="6+ Digitos"/>
                            </div>
                            <Link className="input-link" to="/login">Já possuo conta!</Link>
                            <button className="form-button" type="submit">Entrar no Lumus</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
};

export default Register;