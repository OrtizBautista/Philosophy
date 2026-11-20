
/* ========================================
   PHILOSOPHY
   Philosophical Comparisons
   ======================================== */

window.PHILOSOPHY = window.PHILOSOPHY || {};

window.PHILOSOPHY.comparisons = [

    {
        id: "rationalism-empiricism",

        title: "Racionalismo vs. Empirismo",

        question: "¿De dónde se origina el conocimiento?",

        concepts: [
            {
                name: "Racionalismo",
                category: "Origen del conocimiento",
                principle: "La razón",
                explanation: "Sostiene que la razón es la fuente fundamental del conocimiento.",
                keywords: [
                    "Razón",
                    "Pensamiento lógico",
                    "Conocimiento racional"
                ]
            },

            {
                name: "Empirismo",
                category: "Origen del conocimiento",
                principle: "La experiencia",
                explanation: "Sostiene que el conocimiento se origina principalmente en la experiencia sensible.",
                keywords: [
                    "Experiencia",
                    "Sentidos",
                    "Observación"
                ]
            }
        ]
    },

    {
        id: "realism-idealism",

        title: "Realismo vs. Idealismo",

        question: "¿Qué relación existe entre el sujeto y la realidad?",

        concepts: [
            {
                name: "Realismo",
                category: "Esencia del conocimiento",
                principle: "La realidad objetiva",
                explanation: "Sostiene que los objetos existen independientemente del sujeto que los conoce.",
                keywords: [
                    "Realidad exterior",
                    "Independencia del objeto",
                    "Objetividad"
                ]
            },

            {
                name: "Idealismo",
                category: "Esencia del conocimiento",
                principle: "La participación del sujeto",
                explanation: "Destaca el papel del sujeto y sus estructuras en la constitución de la experiencia y del conocimiento.",
                keywords: [
                    "Sujeto",
                    "Representación",
                    "Condiciones del conocimiento"
                ]
            }
        ]
    },

    {
        id: "transcendental-idealism",

        title: "Idealismo trascendental",

        question: "¿Cómo participan el sujeto y la experiencia en el conocimiento?",

        concepts: [
            {
                name: "Idealismo trascendental",
                category: "Origen y esencia del conocimiento",
                principle: "Razón y experiencia",
                explanation: "En la filosofía de Kant, el conocimiento comienza con la experiencia, pero el sujeto aporta estructuras a priori que organizan lo experimentado.",
                keywords: [
                    "Immanuel Kant",
                    "Experiencia",
                    "Estructuras a priori"
                ]
            }
        ]
    }

];

console.log(
    "Comparaciones filosóficas cargadas:",
    window.PHILOSOPHY.comparisons.length
);
