export default function SeuNome({ setNome }) {
  return (

    <div>
      <label htmlFor="name">Digite o seu nome:</label>
      <br/>
      <input
        id="name"
        type="text"
        placeholder="Qual é o seu nome ?"
        onChange={e => setNome(e.target.value)}
      />
    </div>

  )
}