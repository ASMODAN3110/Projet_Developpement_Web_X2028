import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Login.css';


function Login() {
    return (
        <div className="container" style={{backgroundColor: 'transparent'}}>
            <div className="row">
                <h1 className="title">Bienvenue !</h1>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="image-section">
                    <img src={require('../assets/Screenshot (171) 2.png')} alt="Zeduc-Sp@ce Logo"
                         style={{width: '100%', height: '500px'}}/>
                </div>
                <div className="form-section" style={{height:'500px'}} >

                    <div className="form-container" style={{height:'100%'}} >
                        <h2 className="subtitle">Connectez-vous pour savourer chaque moment</h2>
                        <form>
                            <div className="input-group">
                                <input
                                    type="email"
                                    placeholder="Entrez votre email"
                                    className="input-field"
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="password"
                                    placeholder="Entrez votre mot de passe"
                                    className="input-field"
                                />
                            </div>
                            <div className="text-right">
                                <a href="#" className="forgot-password">Mot de passe oublié ?</a>
                            </div>
                            <div className="input-group">
                                <NavLink type="submit" className='submit-btn' to="/AcceuilGerant">Connexion</NavLink>
                            </div>
                            <div className="text-center">
                                <p className="signup-link">
                                    Vous n'avez pas de compte ?
                                    {/* <Link to="/register" className="text-black font-bold"> Inscrivez-vous dès maintenant
                                        !</Link> */}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;