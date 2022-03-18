import { useNavigate } from 'react-router-dom';
import ProjectForm from '../../project/ProjectForm/ProjectForm';
import './NewProject.css';

export default function NewProject() {
  const history = useNavigate;
  function createPost(project) {
    

    // initialize cost and services
    project.cost = 0;
    project.services = []

    fetch("http://localhost:5000/project", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(project),
    })
      .then(res => res.json)
      .then(data => {
        console.log(data);
        history('/projects')
      })
      .catch(err => console.log(err))
  }

  return (
    <section className="section_new_project">
      <h1>Crie Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </section>
  )
}