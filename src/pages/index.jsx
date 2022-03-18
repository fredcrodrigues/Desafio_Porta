import styles from "../_assents/css/Formulario.module.css"
import Cartao from "../components/Cartao"
import EntradaNumerica from "../components/EntradaNumerica"
import Link from "next/link"
import { useState } from "react"

export default function Formulario() {
  

  const [qtd, setQtdportas] = useState(0)
  const [compresente, setComPresente] = useState(0)


  return (
    <div className={styles.formulario} >
     <div>
        <Cartao bgColor="#c0392c">
            <h1>Monty Hall</h1>
        </Cartao>
       
        <Cartao>
          <EntradaNumerica texto="Qtde Portas?" value={qtd} onChange={novoValor => setQtdportas(novoValor)}/>
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica texto="Porta com Presente?" value={compresente} onChange={novoValor => setComPresente(novoValor)}/>
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${qtd}/${compresente}`}>
            <h2 className={styles.link} > Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
