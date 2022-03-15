import Item from "./Item"

export default function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" />
                <Item marca="Fiat" />
            </ul>
        </>
    )
}