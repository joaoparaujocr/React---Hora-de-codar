import PropTypes from 'prop-types';

export default function Item({ marca, anoLancamento }) {
    return (
        <>
            <li>{marca} - {anoLancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    anoLancamento: 0,
}