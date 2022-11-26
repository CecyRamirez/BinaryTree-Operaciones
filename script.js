class Nodo{
    constructor(simbolo){
        this.simbolo=simbolo;
        this.izq = null;
        this.der= null;
        this.sig=null;
        this.ant=null; 
    }
}
class Pila{
    constructor(){
      this.pila = [];
    }
    push(element){
      this.pila.push(element);
    }
    pop(){
      return this.pila.pop();
    }
    resolver(){

    }
}  
let pila = new Pila();

class Cola{
    constructor(){
      this.cola = [];
    }
    enqueue(element){
      this.cola.push(element);
    }
    dequeue(){
      return this.cola.shift();
    }
}
let cola = new Cola();

class ArbolBinario{
    constructor(){
        this.raiz=null;
        this.primero=null;
    }
    listado(){
        let res="";
        let aux=this.primero;
        while (aux!=null){
            res += aux.simbolo + " ";
            aux=aux.sig;
        }
        console.log('lista: ' + res);
    }
    generarLista(expresion){
        let nodo= new Nodo();
        let largo = Number(expresion.length);
        console.log(expresion);
        for(let i=0; i<largo; i++){
            nodo = new Nodo(expresion[i]);
            this.agregar(nodo);

        }
        this.generarArbol();
    }
    agregar(nodo){
        if (this.primero==null){
            this.primero=nodo;
            console.log('se agregó ' + nodo);
        }
        else{
            let temp=this.primero;
            while (temp.sig!=null){
                temp=temp.sig;
            }
            temp.sig=nodo;
            temp.sig.ant= temp;
        }
        
    }
    
    generarArbol(){
        let aux=this.primero;
        //buscar * y /
        while (aux!=null){
            if(aux.simbolo == '*' || aux.simbolo == '/'){
                aux.izq= aux.ant;
                aux.der=aux.sig;
                //borrar ant y sig
                aux.sig=aux.sig.sig;
                aux.sig.ant=aux
                if(aux.ant==this.primero){
                    this.primero=aux
                }
                else{
                    aux.ant=aux.ant.ant;
                    aux.ant.sig=aux;

                }
            }
            aux=aux.sig;
        }
        //buscar + y -
        while (aux!=null){
            if(aux.simbolo == '+' || aux.simbolo == '-'){
                aux.izq= aux.ant;
                aux.der=aux.sig;
                //borrar ant y sig
                aux.sig=aux.sig.sig;
                aux.sig.ant=aux;
                if(aux.ant==this.primero){
                    this.primero=aux
                }
                else{
                    aux.ant=aux.ant.ant;
                    aux.ant.sig=aux;

                }
            }
            aux=aux.sig;
        }
        this.raiz=this.primero;
        let root=this.raiz;
        console.log(root);
    }
    preOrder(aux = this.raiz){
        if (!aux){
            return;
        }
        pila.push(aux.simbolo);
        this.preOrder(aux.izq);
        this.preOrder(aux.der);
    }
    postOrder(aux = this.raiz){
        if (!aux){
            return;
        }
        this.preOrder(aux.izq);
        this.preOrder(aux.der);
        cola.enqueue(aux.simbolo);
    }
    listaPre(){
        let res="";
        for(let i=0; i<cola.length; i++){
            res+= pila[i] + " ";
        }
        console.log(res);
    }
    listaPost(){
        let res="";
        for(let i=0; i<cola.length; i++){
            res+= cola[i] + " ";
        }
        console.log(res);
    }
}

