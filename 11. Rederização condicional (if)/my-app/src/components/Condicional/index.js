import { useState } from "react";

export default function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();
    
    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    }

    function clearEmail(e) {
        e.preventDefault();
        const inputEmail = document.querySelector('input[type="email"]');
        inputEmail.value = '';
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input
                    type="email"
                    placeholder="digite o seu e-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <button onClick={enviarEmail} >Enviar e-mail</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={clearEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )

}