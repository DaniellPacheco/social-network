import * as React from "react";

class Login extends React.Component {

    render() {
        return(
            <section className="background">
                {/* <img src="img/back-login.png" alt=""/> */}
                <div className="login-wrap">
                    <div className="login-inner">
                        <img src="img/img-login.svg" alt=""/>
                    </div>
                    <div className="login-inner">
                        <form action="" method="POST" className="form-wrap">
                            <a href="/">
                                <img className="logo" src="img/logo.svg" alt="Logo Cloud"/>
                            </a>
                            <h1>Entrar na <span className="title">Cloud</span></h1>
                            <fieldset className="input-field">
                                <label htmlFor="email">Endereço de E-mail</label>
                                <input type="email" name="email" id=""/>
                            </fieldset>
                            <fieldset className="input-field">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" name="senha" placeholder="6+ Digitos"/>
                            </fieldset>
                            <a href="/">Esqueci a senha!</a>
                            <a href="/">Ainda não possuo conta!</a>
                            <button type="submit">Entrar no Lumus</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    };
};

export default Login;