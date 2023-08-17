document.getElementById("generate").addEventListener("click", function() {
    const caracteres = {
        numeros: "0123456789",
        minusculas: "abcdefghijklmnopqrstuvwxyz",
        mayusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        simbolos: "!@#$%^&*()"
    };

    const lengthInput = document.getElementById("length");
    const longitud = parseInt(lengthInput.value);

    let SeleccionCaracteres = "";

    if (document.getElementById("incluirNumeros").checked){
        SeleccionCaracteres += caracteres.numeros;
    }

    if (document.getElementById("incluirMayusculas").checked){
        SeleccionCaracteres += caracteres.mayusculas;
    }

    if (document.getElementById("incluirMinusculas").checked){
        SeleccionCaracteres += caracteres.minusculas;
    }
    
    if (document.getElementById("incluirSimbolos").checked){
        SeleccionCaracteres += caracteres.simbolos;
    }

    if (SeleccionCaracteres.length === 0){
        alert("selecciona al menos una opción");
        return;
    }

    let contraseñaGenerada = "";

    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * SeleccionCaracteres.length);
        contraseñaGenerada += SeleccionCaracteres.charAt(indice);
    }

    const passwordInputElement = document.getElementById("passwordInput");
    passwordInputElement.value = contraseñaGenerada;

});

    document.getElementById("copiar").addEventListener("click", function() {
        const passwordInputElement = document.getElementById("passwordInput");
        passwordInputElement.select();
        document.execCommand("copy");
});
