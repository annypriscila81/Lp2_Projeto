function calcularData() {
    var inputC = document.getElementById("resultado");
    console.log(inputC);
    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        dia_inicial = document.getElementById("dia").value;
        mes_inicial = document.getElementById("mes").value;
        ano_inicial = document.getElementById("ano").value;

        dia_final = document.getElementById("dia_final").value;
        mes_final = document.getElementById("mes_final").value;
        ano_final = document.getElementById("ano_final").value;

        const data_inicial = new Date(ano_inicial, mes_inicial - 1, dia_inicial);
        const data_final = new Date(ano_final, mes_final - 1, dia_final);
        const diferença = Math.abs(data_inicial.getTime() - data_final.getTime());

        const dias = Math.ceil(diferença / (1000 * 60 * 60 * 24));
        console.log(dias);
        inputC.value = dias+" dias";
})
}
 
(calcularData());
module.exports = calcularData;