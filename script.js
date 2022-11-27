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
    preOrder(){
        if(this.raiz==null){
            return "";
        }
        else{
            return this._preOrder(this.raiz);
        }
    }
    _preOrder(nodo){
        this.pila.push(nodo.simbolo);
        if(nodo.izq!=null){
            this._preOrder(nodo.izq); 
        }
        if(nodo.der!=null){
            this._preOrder(nodo.der);
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
            this._postOrder(nodo.izq);
        }
        if(nodo.der!=null){
            this._postOrder(nodo.der);
        }
        this.cola.push(nodo.simbolo);
    }
    listaPre(){
        let res="PreOrder: ";
        let pila=this.pila;
        for(let i=0; i<pila.length; i++){
            res+= pila[i] + " ";
        }
        console.log(res);
    }
    listaPost(){
        let res="PostOrder: ";
        let cola=this.cola;
        for(let i=0; i<cola.length; i++){
            res+= cola[i] + " ";
        }
        console.log(res);
    }
    resolverPre(){
        let aux=[];
        let n1= "";
        let n2="";
        let operador="";
        let res=0;
        if(this.pila==null){
            return "No hay PreOrder, Generalo"
        }
        else{
            for(let i=this.pila.length-1;i>=0;i--){
                if(this.pila[i].match(/^[0-9]+$/)){
                    aux.push(this.pila.pop())
                }
                else{
                    n1=aux.pop();
                    operador= this.pila[i];
                    this.pila.pop()
                    n2=aux.pop();
                    if(operador==="*"){
                        res= Number(n1)*Number(n2);
                        aux.push(res);
                    }
                    if(operador==="/"){
                        res= Number(n1)/Number(n2);
                        aux.push(res);
                    }
                    if(operador==="+"){
                        res= Number(n1)+Number(n2);
                        aux.push(res);
                    }
                    if(operador==="-"){
                        res= Number(n1)-Number(n2);
                        aux.push(res);
                    }
                }
            }
            return res;
        }
    }
    resolverPost(){
        let aux=[];
        let n1= "";
        let n2="";
        let operador="";
        let res=0;
        if(this.cola==null){
            return "No hay PostOrder, Generalo"
        }
        else{
            for(let i=0;i<this.cola.length;i++){
                if(this.cola[0].match(/^[0-9]+$/)){
                    aux.push(this.cola[0]);
                    for(let j=0;j<this.cola.length;j++){
                        this.cola[j]=this.cola[j+1];
                    }
                }
                else{
                    n1=aux.pop();
                    operador= this.cola[0];
                    for(let j=0;j<this.cola.length;j++){
                        this.cola[j]=this.cola[j+1];
                    }
                    n2=aux.pop();
                    if(operador==="*"){
                        res= Number(n2)*Number(n1);
                        aux.push(res);
                    }
                    if(operador==="/"){
                        res= Number(n2)/Number(n1);
                        aux.push(res);
                    }
                    if(operador==="+"){
                        res= Number(n2)+Number(n1);
                        aux.push(res);
                    }
                    if(operador==="-"){
                        res= Number(n2)-Number(n1);
                        aux.push(res);
                    }
                }
            }
            return res;
        }
    }
}

