import './SubmitButton.css';

export default function SubmitButton({ text }) {
  return (
    <div className="form_control">
      <button className="btn">{text}</button>
    </div>
  )
}