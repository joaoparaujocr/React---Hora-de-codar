import './Select.css'

export default function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className="form_control">
      <label htmlFor={name}>{text}</label>
      <select
        onChange={handleOnChange}
        name={name}
        id={name}
        value={value || "default"}
      >
        <option value="default" disabled>Selecione uma opção</option>
        {options.length > 0 && (
          options.map((opt) => (
            <option value={opt.id} key={opt.id}>{opt.name}</option>
          ))
        )}
      </select>
    </div>
  )
}