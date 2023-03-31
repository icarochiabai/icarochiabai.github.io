import styles from './textcard.module.css'
import Image from 'next/image'

export default function TextCard(props) {
    return (
        <div style={ {flex:props.flex} } className={styles.content}>
          {props.title ? <h1 style={{textAlign: props.align}}>{ props.title }</h1> : null }
          { props.content ? props.content : null}
        </div>
    )
}