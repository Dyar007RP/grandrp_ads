$(document).ready(function () {
    let carNames = [];

    function toTitleCase(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    $.ajax({
        url: '/get-car-names',
        method: 'POST',
        success: function (data) {
            if (data.cars) {
                carNames = data.cars.map(car => car.toLowerCase().trim());
                console.log("Car names received (Looking):", carNames);
            }
        },
        error: function () {
            console.error('Error fetching car names for Looking box.');
        }
    });

    $('#looking-search').on('input', function () {
        var query = $(this).val().toLowerCase().trim();
        var resultList = $('#looking-results');
        resultList.empty();

        if (query.length === 0) return;

        var filteredCars = carNames.filter(car => car.includes(query));

        if (filteredCars.length > 0) {
            filteredCars.forEach(car => {
                let formattedCar = toTitleCase(car);
                resultList.append('<li class="result-item-looking">' + formattedCar + '</li>');
            });
        } else {
            resultList.append('<li>No results found</li>');
        }
    });

    $(document).on('click', '.result-item-looking', function () {
        var selectedCar = $(this).text();
        $('#looking-search').val(selectedCar);
        $('#looking-results').empty();
        $('#selected-looking').text(selectedCar); // Optional: for displaying selected item somewhere
    });
});



