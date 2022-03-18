import styles from "../_assents/css/EntradaNumerica.module.css"


interface EntradaNumericaProps{
    texto: string
    value: number
    onChange: (newValue: number) => void
}

export default function EntradaNumerica(props: EntradaNumericaProps){
    
    const dec = ()  => props.onChange(props.value > 0 ? props.value - 1: props.value)
    const inc = ()  => props.onChange(props.value >= 0 ? props.value + 1: props.value)
    
    return(
        <div className={styles.entrada}>
           <span className={styles.texto}>{props.texto}</span>
           <span className={styles.value}>{props.value}</span>
           
           <div className={styles.botoes}>
                    <button className={styles.btn} onClick={dec}>-</button>
                    <button className={styles.btn} onClick={inc}>+</button>
           </div>
          
        </div>
    )
}