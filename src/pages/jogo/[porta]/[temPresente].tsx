import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import {criarPortas, atualizarPortas} from "../../../_assents/js/portas"
import Porta from '../../../components/Porta'
import styles from "../../../_assents/css/Jogo.module.css"
import Link from 'next/link'



export default function Jogo(){

    const [validaPorta, setPorta] = useState(false)
    const [portas, setPortas] = useState([])

    const router = useRouter()


    useEffect(() => {

      const porta = + router.query.porta
      const temPresente = +router.query.temPresente

     const qtdPortaValida =  porta >= 3 && porta <= 100
     const temPresenteValida = temPresente >= 3 && temPresente <= porta

     setPorta(qtdPortaValida && temPresenteValida)
      
    }, [portas, router.query.portas, router.query.temPresente]);
   
    useEffect(() => {

      const porta = +router.query.porta
      const temPresente = +router.query.temPresente
      setPortas(criarPortas(porta,temPresente))

    }, [router?.query]);
   


    function renderPortas(){
        return portas.map( porta => {
          return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta ))}/>
              })
    }
    return(
        <div id={styles.jogo}>
          <div className={styles.portas}>
              {validaPorta == true?
               renderPortas() : <h1>Valores Invalidos!</h1>}
          </div>
          <div className={styles.botoes}>

            <Link href="/" passHref>
                <button>Reiniciar Game</button>
            </Link>
            
          </div>
      </div>
    )
}