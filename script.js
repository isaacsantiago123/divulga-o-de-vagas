
const form = document.getElementById("jobForm");

const jobsTable = document.getElementById("jobsTable");

const totalHero = document.getElementById("totalHero");


let totalVagas = 0;

function atualizarTotal() {

    totalHero.textContent = totalVagas;

}


form.addEventListener("submit", function (event) {


    event.preventDefault();

    const empresa =
        document.getElementById("empresa").value;

    const vaga =
        document.getElementById("vaga").value;

    const area =
        document.getElementById("area").value;

    const modalidade =
        document.getElementById("modalidade").value;

    const bolsa =
        document.getElementById("bolsa").value;


    const novaLinha =
        document.createElement("tr");


    novaLinha.innerHTML = `

        <td>
            ${empresa}
        </td>

        <td>
            ${vaga}
        </td>

        <td>
            ${area}
        </td>

        <td>
            ${modalidade}
        </td>

        <td>
            ${bolsa}
            <br>
            <span class="status">
                Disponível
            </span>
        </td>

    `;

    jobsTable.appendChild(novaLinha);

    totalVagas++;

    atualizarTotal();

    form.reset();

    alert(
        "Vaga cadastrada com sucesso!"
    );

    document
        .getElementById("vagas")
        .scrollIntoView({
            behavior: "smooth"
        });

});