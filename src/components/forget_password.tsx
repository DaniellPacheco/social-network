import * as React from 'react' ;
import { Link } from 'react-router-dom';

class ForgetPassword extends React.Component{
    render() {
        return(
            <section className="background">
                <div className="login-wrap form-wrap-forgetpass">
                    <form className="form-wrap" action="" method="POST">
                        <div className="header">
                            <Link className="header-logo" to="/">
                                <img className="logo" src="img/logo.svg" alt="Logo Cloud"/>
                            </Link>
                            <h1 className="title">Esqueci a senha da <span className="subtitle">Cloud</span></h1>
                        </div>
                        <div className="input-field">
                            <label className="input-title" htmlFor="email">Endereço de E-mail</label>
                            <input className="input-item" type="email" name="email" placeholder="email@example.com"/>
                        </div>
                        <button className="form-button" type="submit">Solicitar Suporte</button>
                    </form>
                </div>
            </section>
        );
    };
};

export default ForgetPassword;