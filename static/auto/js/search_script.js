$(document).ready(function () {
    let carNames = [];

    $.ajax({
        url: '/get-car-names',
        method: 'POST',
        success: function (data) {
            if (data.cars) {
                carNames = data.cars; // ✅ Keep original casing
                console.log("Car names received:", carNames);
            }
        },
        error: function () {
            console.error('Error fetching car names.');
        }
    });

    $('#search').on('input', function () {
        const query = $(this).val().toLowerCase().trim();
        const resultList = $('#results');
        resultList.empty();

        if (query.length === 0) return;

        // ✅ Only lowercase the query, NOT the car names
        const filteredCars = carNames.filter(car =>
            car.toLowerCase().includes(query)
        );

        if (filteredCars.length > 0) {
            filteredCars.forEach(car => {
                resultList.append('<li class="result-item">' + car + '</li>'); // ✅ Show original casing
            });
        } else {
            resultList.append('<li>No results found</li>');
        }
    });

    $(document).on('click', '.result-item', function () {
        const selectedCar = $(this).text();
        $('#search').val(selectedCar);
        $('#results').empty();
        $('#selected-car').text(selectedCar);
    });
});
