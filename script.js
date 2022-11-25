class Nodo{
    constructor(simbolo){
        this.simbolo = null;
        this.izq = null;
        this.der= null;
        this.sig=null;
        this.ant=null; 
    }
}

class Expresion{
    constructor(){
        this.primero=null;
    }
    agregar(nuevo){
        if (this.primero==null)
            this.primero=nuevo;
        else{
        let temp=this.primero;
        while (temp.sig!=null)
            temp=temp.sig;
        temp.sig=nuevo;
        temp.sig.ant= temp
        }
    }
}

class ArbolBinario{
    constructor(){
        this.raiz=null;
    }
    generarLista(expresion){
        while(expresion[i] != null){
            let nodo=new Nodo(expresion[i]);
            lista.agregar(nodo);
        }
        console.log(listaExpresion);
    }
    
    generarArbol(listaExpresion){
        aux=listaExpresion.primero;
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
}

