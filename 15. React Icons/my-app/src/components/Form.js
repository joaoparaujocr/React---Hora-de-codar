import { useState } from 'react';

export default function Form() {
    const cadastrarUsuario = (e) => {
        e.preventDefault();
        console.log(`Usuário: ${name}\nSenha: ${password}`);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Digite o seu nome"
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Digite sua senha"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
                <h3>Nome: {name}</h3>
                <h3>Senha: {password}</h3>
            </form>
        </div>
    )

}