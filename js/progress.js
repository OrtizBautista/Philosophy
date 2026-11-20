
window.PHILOSOPHY = window.PHILOSOPHY || {};

window.PHILOSOPHY.progress = {
    completedLessons: [],
    answeredQuestions: 0,
    correctAnswers: 0,
    lastActivity: null,

    load() {
        const saved = localStorage.getItem("philosophy-progress");

        if (saved) {
            try {
                const data = JSON.parse(saved);

                this.completedLessons = data.completedLessons || [];
                this.answeredQuestions = data.answeredQuestions || 0;
                this.correctAnswers = data.correctAnswers || 0;
                this.lastActivity = data.lastActivity || null;
            } catch (error) {
                console.error("No se pudo cargar el progreso:", error);
            }
        }
    },

    save() {
        const data = {
            completedLessons: this.completedLessons,
            answeredQuestions: this.answeredQuestions,
            correctAnswers: this.correctAnswers,
            lastActivity: this.lastActivity
        };

        localStorage.setItem(
            "philosophy-progress",
            JSON.stringify(data)
        );
    },

    completeLesson(lessonId) {
        if (!this.completedLessons.includes(lessonId)) {
            this.completedLessons.push(lessonId);
        }

        this.lastActivity = new Date().toISOString();
        this.save();
    },

    registerAnswer(isCorrect) {
        this.answeredQuestions++;

        if (isCorrect) {
            this.correctAnswers++;
        }

        this.lastActivity = new Date().toISOString();
        this.save();
    },

    getLessonPercentage() {
        const total = window.PHILOSOPHY.lessons.length;

        if (total === 0) return 0;

        return Math.round(
            (this.completedLessons.length / total) * 100
        );
    },

    getAccuracy() {
        if (this.answeredQuestions === 0) return 0;

        return Math.round(
            (this.correctAnswers / this.answeredQuestions) * 100
        );
    },

    reset() {
        this.completedLessons = [];
        this.answeredQuestions = 0;
        this.correctAnswers = 0;
        this.lastActivity = null;

        localStorage.removeItem("philosophy-progress");
    }
};

window.PHILOSOPHY.progress.load();

console.log("Sistema de progreso cargado.");
