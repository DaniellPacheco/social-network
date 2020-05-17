import * as React from "react";

class Login extends React.Component {

    render() {
        return(
            <section>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <form action="" method="POST">
                        <img src="" alt="Logo Cloud"/>
                        <h1>Entrar no <span>Lumus</span></h1>
                        <label htmlFor="email">
                            <input type="email" name="email" id=""/>
                        </label>
                        <label htmlFor="senha">
                            <input type="password" name="senha" placeholder="6+ Digitos"/>
                        </label>
                        <a href="#">Esqueci a senha!</a>
                        <button type="submit">Entrar no Lumus</button>
                    </form>
                </div>
            </section>
        );
    };
};

export default Login;