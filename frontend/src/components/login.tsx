import * as React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {

    render() {
        return(
            <section className="background">
                <div className="login-wrap">
                    <div className="login-inner">
                        <img src="img/img-login.svg" alt=""/>
                    </div>
                    <div className="login-inner">
                        <form action="" method="POST" className="form-wrap">
                            <Link to="/">
                                <img className="logo" src="img/logo.svg" alt="Logo Cloud"/>
                            </Link>
                            <h1 className="title">Entrar na <span className="subtitle">Cloud</span></h1>
                            <fieldset className="input-field">
                                <label className="input-title" htmlFor="email">Endereço de E-mail</label>
                                <input className="input-item" type="email" name="email" placeholder="email@example.com"/>
                            </fieldset>
                            <fieldset className="input-field">
                                <label className="input-title" htmlFor="senha">Senha</label>
                                <input className="input-item" type="password" name="senha" placeholder="6+ Digitos"/>
                            </fieldset>
                            <Link className="input-link" to="/forget-password">Esqueci a senha!</Link>
                            <Link className="input-link" to="/register">Ainda não possuo conta!</Link>
                            <button className="form-button" type="submit">Entrar no Lumus</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    };
};

export default Login;