function tipoPlan() {
    let tipoSeguro = document.getElementById("tipo-seguro");
    let montoPlan = 0.0;

    if (tipoSeguro.value == "basico") {
        montoPlan = 500.00;
    }else{
        if (tipoSeguro.value == "intermedio") {
            montoPlan = 1000.00;
        }else{
            if(tipoSeguro.value == "premium"){
                montoPlan = 1500.00;
            }else{
                montoPlan = 0;
            }
            
        }
    }
    document.getElementById("monto-plan").value = "$" + montoPlan;
}

