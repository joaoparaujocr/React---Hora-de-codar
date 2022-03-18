import { useEffect, useState } from "react";
import InputForm from "../../Form/InputForm/InputForm";
import Select from "../../Form/Select/Select";
import SubmitButton from "../../Form/SubmitButton/SubmitButton";
import './ProjectForm.css';

export default function ProjectForm({ btnText, handleSubmit, projectData }) {

  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.log(err))
  }, []);

  const eventSubmit = e => {
    e.preventDefault();
    handleSubmit(project);
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      }
    });
  }

  return (
    <form onSubmit={eventSubmit} action="">
      <InputForm
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <InputForm
        type="number"
        text="Valor do orçamento"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}