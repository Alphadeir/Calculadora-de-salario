function CalcularSalario() {
    let salario1 = parseFloat(document.getElementById("Salario1").value);
    let salario2 = parseFloat(document.getElementById("Salario2").value);
    let salario3 = parseFloat(document.getElementById("Salario3").value);
    let salario4 = parseFloat(document.getElementById("Salario4").value);
    let salario5 = parseFloat(document.getElementById("Salario5").value);

    let totalSalario = salario1 + salario2 + salario3 + salario4 + salario5;

    document.getElementById("TotalSalario").innerHTML = "<p>Total Salario: " + totalSalario + "</p>";
    alert("Cálculo de salario realizado correctamente.");

}