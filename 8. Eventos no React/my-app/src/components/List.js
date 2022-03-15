import Item from "./Item"

export default function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" anoLancamento={1985} />
                <Item marca="Fiat"  anoLancamento={1964} />
                <Item marca="Renault" />
                <Item marca="Ford" anoLancamento={1959} />
                <Item />
            </ul>
        </>
    )
}