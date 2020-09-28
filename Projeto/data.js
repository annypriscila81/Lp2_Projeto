function calcularData(data_inicial, data_final) {
    data_inicial = data_inicial.split('/', 3);
    data_final = data_final.split('/', 3);
    const dia_inicial = parseInt(data_inicial[0]);
    const mes_inicial = parseInt(data_inicial[1]);
    const ano_inicial = parseInt(data_inicial[2]);

    const dia_final = parseInt(data_final[0]);
    const mes_final = parseInt(data_final[1]);
    const ano_final = parseInt(data_final[2]);

    
    data_inicial = new Date(ano_inicial, mes_inicial - 1, dia_inicial);
    data_final = new Date(ano_final, mes_final - 1, dia_final);
    const diferença = Math.abs(data_inicial.getTime() - data_final.getTime());

    const dias = Math.ceil(diferença / (1000 * 60 * 60 * 24));
    return dias;
}

module.exports = calcularData;