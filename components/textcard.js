import styles from './textcard.module.css'

export default function TextCard(props) {
    return (
        <>
            <div style={ props.color ? {borderColor: props.color} : {borderColor: "#bb4430"}} className={styles.content}>
              {props.title ? <h1 style={{textAlign: props.align}}>{ props.title }</h1> : null }
              { props.content ? props.content : null}
            </div>
        </>
    )
}