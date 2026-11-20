
// ========================================
// PHILOSOPHY
// Navigation System
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const navigationButtons = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".page-section");
    const breadcrumb = document.querySelector(".breadcrumb span");

    // Nombres de las secciones
    const sectionNames = {
        dashboard: "INICIO",
        library: "BIBLIOTECA",
        "concept-map": "MAPA CONCEPTUAL",
        comparisons: "COMPARADOR",
        training: "ENTRENAMIENTO"
    };


    // Cambiar sección
    function navigateTo(sectionId) {

        const targetSection = document.getElementById(sectionId);

        // Comprobar que la sección exista
        if (!targetSection) {
            console.warn(`Sección no encontrada: ${sectionId}`);
            return;
        }

        // Ocultar todas las secciones
        sections.forEach(section => {
            section.classList.remove("active");
        });

        // Desactivar todos los botones
        navigationButtons.forEach(button => {
            button.classList.remove("active");
        });

        // Mostrar sección seleccionada
        targetSection.classList.add("active");

        // Activar botón correspondiente
        const activeButton = document.querySelector(
            `.nav-item[data-section="${sectionId}"]`
        );

        if (activeButton) {
            activeButton.classList.add("active");
        }

        // Actualizar breadcrumb
        if (breadcrumb) {
            breadcrumb.textContent = sectionNames[sectionId] || sectionId.toUpperCase();
        }

        // Volver al inicio del contenido
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    // Escuchar clics en la navegación
    navigationButtons.forEach(button => {

        button.addEventListener("click", () => {

            const sectionId = button.dataset.section;

            navigateTo(sectionId);

        });

    });


    // Exponer navegación para otros módulos
    window.PHILOSOPHY = window.PHILOSOPHY || {};

    window.PHILOSOPHY.navigateTo = navigateTo;

});
