<script>
    // Configura tu fecha de aniversario (Año, Mes [0-11], Día)
    // 11 representa Diciembre porque en JS los meses empiezan en 0
    const startDate = new Date(2025, 11, 12, 0, 0, 0).getTime();

    function updateCounter() {
        const now = new Date().getTime();
        const distance = now - startDate;

        // Cálculos matemáticos para convertir milisegundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Inyectar en el HTML
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    // Ejecutar cada segundo
    setInterval(updateCounter, 1000);
    
    // Ejecutar al cargar la página para evitar el "00" inicial
    updateCounter();
</script>