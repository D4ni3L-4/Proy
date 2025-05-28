function calcularPrecio() {
    var a=document.getElementById("producto").value;
    var b=document.getElementById("cantidad").value;
    var s=parseInt(a)*parseInt(b)
    var x=document.getElementById("nombre").value;
    var y=document.getElementById("correo").value;
    alert("Hola "+x+", el coste es de: "+s+"$"+" el recibo le llegra a "+y);
    return(0);
}