import React from 'react';
import './Login.css';  // Custom styles for additional CSS if needed.

const Login = () => {
  return (
    <div className="container-fluid login-page d-flex justify-content-center align-items-center">
      <div className="login-card p-5">
        <h2 className="text-center mb-4">Bienvenue!</h2>
        <div className="row">
          <div className="col-md-6 text-center">
            <img src="path-to-your-logo.png" alt="Zed@Space Logo" className="img-fluid mb-3" />
          </div>
          <div className="col-md-6">
            <form>
              <div className="form-group mb-3">
                <label>Connectez-vous pour savourer chaque moment</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Entrez votre email"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Entrez votre mot de passe"
                />
              </div>
              <div className="form-group mb-3 text-end">
                <a href="#">Mot de passe oublié ?</a>
              </div>
              <button type="submit" className="btn btn-dark w-100">Connexion</button>
              <div className="text-center mt-3">
                <a href="#">Vous n'avez pas de compte ? Inscrivez-vous dès maintenant !</a>
              </div>
            </form>
          </div>
        </div>
        <button className="close-button" onClick={() => { /* Add close logic here */ }}>X</button>
      </div>
    </div>
  );
};

export default Login;