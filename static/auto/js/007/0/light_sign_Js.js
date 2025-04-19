document.addEventListener('DOMContentLoaded', function () {
    const signalLight = document.getElementById('signal-light');
    const configRadios = document.querySelectorAll('input[name="config"]');

    if (configRadios.length && signalLight) {
        configRadios.forEach(radio => {
            radio.addEventListener('change', function () {
                const value = this.value.toLowerCase();

                if (value === 'partial' || value === 'full') {
                    signalLight.classList.remove('green');
                    signalLight.classList.add('red');
                } else {
                    signalLight.classList.remove('red');
                    signalLight.classList.add('green');
                }
            });
        });
    } else {
        console.warn("Radio buttons or signal light element not found!");
    }
});
