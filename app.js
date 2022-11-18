const $a = document.querySelector("#iA");
const $b = document.querySelector("#iB");
const $c = document.querySelector("#iC");
const $delta = document.querySelector("#iDelta");
const $x1 = document.querySelector("#iX1");
const $x2 = document.querySelector("#iX2");

let click = document.querySelector("#iCalc");
click.addEventListener("click", calcular);

function calcular() {
    const a = $a.value;
    const b = $b.value;
    const c = $c.value;
    const delta = parseInt((Math.pow(b, 2)) - 4 * a * c);

    if ((a == "") || (b == "") || (c == "")) {
        alert("PREENCHA OS CAMPOS VAZIOS");
    } else if (delta < 0) {
        alert("DELTA MENOR QUE 0. NÃO POSSUI RAÍZES");
    } else if ((delta > 0) && (a != 0)) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        $x1.value = x1;
        $x2.value = x2;
        $x1.innerHTML = x1.toFixed(2);
        $x2.innerHTML = x2.toFixed(2);
        $delta.innerHTML = delta;
    } else if (a == 0) {
        alert("(A) PRECISA SER DIFERENTE DE 0");
    }
}