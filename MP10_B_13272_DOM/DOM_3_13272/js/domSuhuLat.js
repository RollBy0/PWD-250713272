var spanSuhu;
var statusCuaca;

function init() {
    spanSuhu = document.getElementById("outputSuhu");
    statusCuaca = document.getElementById("statusCuaca");
    konversiSuhu("celcius");
}

function konversiSuhu(id) {
    var c = parseFloat(document.getElementById(id).value);
    var f = (c * 9 / 5) + 32;

    spanSuhu.firstChild.data = f;
    statusCuaca.firstChild.data = f >= 86 ? "Status: Panas" : "Status: Sejuk";

    if(f >= 86) {
        spanSuhu.style.color = "red";
        spanSuhu.style.fontWeight = "bold";
    } else {
        spanSuhu.style.color = "blue";
        spanSuhu.style.fontWeight = "normal";
    }
}

function resetForm() {
    document.getElementById("celcius").value = "";
    spanSuhu.firstChild.data = "0";
    spanSuhu.style.color = "";
    spanSuhu.style.fontWeight = "";
    statusCuaca.firstChild.data = "Status: -";
}