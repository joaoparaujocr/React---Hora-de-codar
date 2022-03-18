import './InputForm.css'

export default function InputForm({ type, placeholder, text, name, handleOnChange, value }) {
  return (
    <div className="form_control">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  )
}