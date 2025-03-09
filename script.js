$(document).ready(function () {
    const stateSelect = $("#state-select");

    // Llamada a la API de países
    $.ajax({
        url: "https://restcountries.com/v3.1/all",
        method: "GET",
        success: function (data) {
            stateSelect.empty();
            stateSelect.append('<option value="">Pick a state</option>');

            // Ordenamos los países alfabéticamente por nombre
            data.sort((a, b) => a.name.common.localeCompare(b.name.common));

            // Agregamos cada país como una opción en el select
            data.forEach(country => {
                stateSelect.append(`<option value="${country.name.common}">${country.name.common}</option>`);
            });
        },
        error: function () {
            stateSelect.empty();
            stateSelect.append('<option value="">Error loading states</option>');
        }
    });
});