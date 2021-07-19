var password = "admin";
password = 
prompt("Ingrese la Contraseña para continuar")
if (password == "admin"){
    alert("Acceso Autorizado");
}else{
    alert("Incorrecto");
    var pagina="*"
    function redireccionar(){
        location.href=pagina
    }
    setTimeout("redireccionar()", 1);
}