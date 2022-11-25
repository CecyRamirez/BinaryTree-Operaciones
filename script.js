class Nodo{
    constructor(simbolo){
        this.simbolo = null;
        this.izq = null;
        this.der= null;
        this.sig=null;
        this.ant=null; 
    }
}


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
        console.log(expresion);
        let i=0;
        let valor;
        let nodo;
        while(expresion[i] != null){
            console.log(expresion[0]);
            valor= expresion[0]
            nodo = new Nodo(valor);
            console.log(nodo);

            if (this.primero==null){
                this.primero=nodo;
            }
            else{
                let temp=this.primero;
                while (temp.sig!=null)
                    temp=temp.sig;
                temp.sig=nodo;
                temp.sig.ant= temp
            }
            i++
        }
        console.log(binaryTree.listado());
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
            return
        }
        console.log(aux.simbolo)
        this.preOrder(aux.izq)
        this.preOrder(aux.der)
    }
    postOrder(aux = this.raiz){
        if (!aux){
            return
        }
        this.preOrder(aux.izq)
        this.preOrder(aux.der)
        console.log(aux.simbolo)
    }

}

