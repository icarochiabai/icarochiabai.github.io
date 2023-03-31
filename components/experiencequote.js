import styles from './experiencequote.module.css'
import utilStyles from '../styles/utils.module.css'

export default function ExperienceQuote(props) {
    return (
      <div className={styles.box}>
        <h3>{props.nome}</h3>
        <p>{props.lugar}, {props.inicio} - {props.fim}. {props.pub ? (props.pub) : null}</p>
      </div>
    )
}