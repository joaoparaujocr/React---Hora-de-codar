import LinkButton from '../../layout/LinkButton';
import savings from './../../../img/savings.svg';
import './style.css';

export default function Home() {
  return (
      <section className='section_home'>
        <h1>Bem-vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton text="Criar Projeto" to="/newproject" />
        <img src={savings} alt="Costs" />
      </section>
  )
}