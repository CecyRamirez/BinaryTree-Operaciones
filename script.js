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
      return this.pila;
    }
    pop(){
      return this.pila.pop();
    }
    resolver(){

    }
}  
const pila = new Pila();

class Cola{
    constructor(){
      this.cola = [];
    }
    enqueue(element){
      this.cola.push(element);
      return this.cola;
    }
    dequeue(){
      return this.cola.shift();
    }
}
const cola = new Cola();

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
        return res;
    }
    generarLista(expresion){
        let nodo= new Nodo();
        let largo = Number(expresion.length);
        console.log(expresion);
        for(let i=0; i<largo; i++){
            nodo = new Nodo(expresion[i]);
            this.agregar(nodo)

        }
    }
    agregar(nodo){
        if (this.primero==null){
            this.primero=nodo;
            console.log('se agregó ' + nodo);
        }
        else{
            let temp=this.primero;
            while (temp.sig!=null)
            temp=temp.sig;
            temp.sig=nodo;
            temp.sig.ant= temp
        }
        
    }
    
    generarArbol(binaryTree){
        aux=binaryTree.primero;
        //buscar * y /
        while (aux!=null){
            if(aux.simbolo == '*' || aux.simbolo == '/'){
                aux.izq= aux.ant;
                aux.der=aux.sig;
                //borrar ant y sig
                aux.sig.sig.ant=aux;
                aux.sig=aux.sig.sig;
                aux.ant.ant.sig=aux;
                aux.ant=aux.ant.ant;

            }
            aux=aux.sig;
        }
        //buscar + y -
        while (aux!=null){
            if(aux.simbolo == '+' || aux.simbolo == '-'){
                aux.izq= aux.ant;
                aux.der=aux.sig;
                //borrar ant y sig
                aux.sig.sig.ant=aux;
                aux.sig=aux.sig.sig;
                aux.ant.ant.sig=aux;
                aux.ant=aux.ant.ant;

            }
            aux=aux.sig;
        }
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
}

