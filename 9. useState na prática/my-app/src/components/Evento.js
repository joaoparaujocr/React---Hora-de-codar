export default function Evento({ numero }) {
    function meuEvento(e) {
        console.log(`Opa, fui ativado ${numero}`);
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}