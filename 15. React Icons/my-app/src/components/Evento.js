import Button from "./Button";

export default function Evento() {
    function meuEvento(e) {
        console.log(`Ativando primeiro evento`);
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento');
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </div>
    )
}