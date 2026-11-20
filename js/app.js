
document.addEventListener("DOMContentLoaded", () => {
    console.log("PHILOSOPHY iniciando...");

    window.PHILOSOPHY = window.PHILOSOPHY || {};

    window.PHILOSOPHY.config = {
        name: "PHILOSOPHY",
        version: "1.0.0",
        axis: "Eje III",
        subject: "Teoría del conocimiento"
    };

    window.PHILOSOPHY.state = {
        currentSection: "dashboard",
        initialized: true
    };

    function initializeApp() {
        console.log("Configuración cargada.");
        console.log("Biblioteca:", PHILOSOPHY.lessons.length, "unidades");
        console.log("Comparaciones:", PHILOSOPHY.comparisons.length);
        console.log("Ejercicios:", PHILOSOPHY.exercises.length);
        console.log("Progreso:", PHILOSOPHY.progress.getLessonPercentage() + "%");
        PHILOSOPHY.renderLessons();

document.getElementById("back-to-library").addEventListener("click", () => {
    PHILOSOPHY.closeLesson();
});

document.getElementById("previous-lesson").addEventListener("click", () => {
    PHILOSOPHY.changeLesson(-1);
});

document.getElementById("next-lesson").addEventListener("click", () => {
    PHILOSOPHY.changeLesson(1);
});

document.getElementById("complete-lesson").addEventListener("click", () => {
    if (PHILOSOPHY.currentLesson === null) return;

    const lessonId = PHILOSOPHY.currentLesson;

    PHILOSOPHY.completeLesson(lessonId);

    PHILOSOPHY.renderLessons();

    document.getElementById("complete-lesson").textContent =
        "Unidad completada ✓";
});

        console.log("PHILOSOPHY está lista.");
    }

    initializeApp();
});
