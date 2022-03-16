export default function Saudacao({ nome }) {

  function gerarSaudacao(algumNome) {
    if (typeof nome !== "string" || nome === '') {
      return 'Não existe nenhum nome para a saudação.'
    }
    return `Olá, ${algumNome}, tudo bem?`
  }

  return <><p>{gerarSaudacao(nome)}</p></>

}