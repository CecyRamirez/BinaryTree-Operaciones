class Nodo{
    constructor(simbolo){
        this.simbolo=simbolo;
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
        this.pila=[];
        this.cola=[];
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
                if(aux.sig==null){
                    aux.ant.sig=null;
                }
                else{
                    aux.sig.ant=aux;
                }
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
        aux=this.primero;
        //buscar + y -
        while (aux!=null){
            if(aux.simbolo == '+' || aux.simbolo == '-'){
                aux.izq= aux.ant;
                aux.der=aux.sig;
                //borrar ant y sig
                aux.sig=aux.sig.sig;
                if(aux.sig==null){
                    aux.ant.sig=null;
                }
                else{
                    aux.sig.ant=aux;
                }
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
    inorder(){
        if(this.raiz==null){
            return "";
        }
        else{
            return this._inOrder(this.raiz);
        }
    }
    _inOrder(nodo){ // IRD
        if(nodo.izq!=null){
            this._inOrder(nodo.izq);   //I
        }
        console.log(nodo.simbolo);  // R
        if(nodo.der!=null){
            this._inOrder(nodo.der); //D
        }
    }
    preOrder(){
        if(this.raiz==null){
            return "";
        }
        else{
            return this._preOrder(this.raiz);
        }
    }
    _preOrder(nodo){
        console.log(nodo.simbolo);  // R
        this.pila.push(nodo.simbolo);
        if(nodo.izq!=null){
            this._preOrder(nodo.izq);   //I
        }
        if(nodo.der!=null){
            this._preOrder(nodo.der); //D
        }

    }
    postOrder(){
        if(this.raiz==null){
            return "";
        }
        else{
            return this._postOrder(this.raiz);
        }
    }
    _postOrder(nodo){
        if(nodo.izq!=null){
            this._postOrder(nodo.izq);   //I
        }
        if(nodo.der!=null){
            this._postOrder(nodo.der); //D
        }
        console.log(nodo.simbolo);  // R
        this.cola.push(nodo.simbolo);
    }
    listaPre(){
        let res="";
        let pila=this.pila;
        for(let i=0; i<pila.length; i++){
            res+= pila[i] + " ";
        }
        console.log(res);
    }
    listaPost(){
        let res="";
        let cola=this.cola;
        for(let i=0; i<cola.length; i++){
            res+= cola[i] + " ";
        }
        console.log(res);
    }
}

