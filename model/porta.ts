export default class PortaModel{

    #numero:number// atributo privado
    #temPresente:boolean // para acessar um atributo privado é enecessariocriar um método
    #selecionada:boolean
    #aberta:boolean

    constructor(numero:number , temPresente=false, selecionada=false, aberta=false){
        this.#numero = numero // atributo privado
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
   
    }

    get numero(){
        return this.#numero
    }

    get temPresente(){
        return this.#temPresente
    }

    get selecionada(){
        return this.#selecionada
    }
    get aberta(){
        return this.#aberta
    }
    get fechada(){
        return !this.aberta
    }


    deselecionar(){
        const selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada,  this.aberta)
    }

    alternarSelecao(){
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }
    
    abrir(){
        const aberta = true
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }
}



