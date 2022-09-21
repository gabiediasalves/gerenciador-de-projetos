import styles from './Home.module.css'
import saving from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Manager</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
    <LinkButton to="/newproject" text="Criar projetos"/>
      <img src={saving} />

    </section>
  )
}

export default Home