namespace Api {
    const questions = [
        { 
            question: "Kuala Lumpur is the capital of",
            answers: [
                { id: 0, "text": "Vietnam" },
                { id: 1, "text": "Malaysia" },
                { id: 2, "text": "Sweden" },
                { id: 3, "text": "Austria" }
            ],
            correct_id: 1
        },
        { 
            question: "Which country does this flag belong to?",
            answers: [
                { id: 0, "text": "Vietnam" },
                { id: 1, "text": "Malaysia" },
                { id: 2, "text": "Sweden" },
                { id: 3, "text": "Austria" }
            ],
            correct_id: 2
        }
    ];

    export function getQuestion(id: number) {
        return questions[id];
    }
}

export { Api };