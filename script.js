const questions = [
    {
        question: "1. 법이란 무엇을 주된 목적으로 하는가?",
        choices: [
            "사회 질서의 유지", 
            "경제 성장의 촉진", 
            "개인의 자유 증진", 
            "정치적 권력 강화"
        ],
        correct: "사회 질서의 유지"
    },
    {
        question: "2. 법의 성립과 관련하여 ‘법률주의’는 무엇을 의미하는가?",
        choices: [
            "법률이 모든 법적 규제를 통제한다.", 
            "법률에 의해 모든 문제를 해결할 수 있다.", 
            "법률에 의해 권리가 명확히 보장된다.", 
            "법률은 국가의 모든 행동을 규정한다."
        ],
        correct: "법률에 의해 권리가 명확히 보장된다."
    },
    {
        question: "3. 형법에서 '범죄'의 정의는 무엇인가?",
        choices: [
            "사회적 규범을 위반하는 행위", 
            "개인의 윤리를 따르는 행위", 
            "자연 법칙을 어기는 행위", 
            "국가의 정책에 반하는 행위"
        ],
        correct: "사회적 규범을 위반하는 행위"
    },
    {
        question: "4. 민법에서 ‘계약’의 기본적인 요소는 무엇인가?",
        choices: [
            "의사 합치", 
            "재산의 양도", 
            "법적 조항", 
            "계약서의 서명"
        ],
        correct: "의사 합치"
    },
    {
        question: "5. 헌법에서 ‘인권 보장’의 주요 내용으로 올바르지 않은 것은?",
        choices: [
            "언론의 자유", 
            "교육의 자유", 
            "재산권의 보장", 
            "정부의 통제"
        ],
        correct: "정부의 통제"
    },
    {
        question: "6. 행정법에서 '행정 처분'의 정의는 무엇인가?",
        choices: [
            "행정 기관이 내리는 법적 명령", 
            "행정 기관의 내부 규정", 
            "행정 기관의 정책", 
            "행정 기관의 인사 결정"
        ],
        correct: "행정 기관이 내리는 법적 명령"
    },
    {
        question: "7. 법적 절차에서 ‘소송’의 목적은 무엇인가?",
        choices: [
            "법적 문제의 해결", 
            "형벌의 부과", 
            "법의 제정", 
            "정부의 결정"
        ],
        correct: "법적 문제의 해결"
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestionIndex];
    let choicesHtml = '';

    question.choices.forEach(choice => {
        choicesHtml += `<button onclick="checkAnswer('${choice}')">${choice}</button><br>`;
    });

    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <div class="choices">${choicesHtml}</div>
        <div class="result" id="result"></div>
    `;
}

function checkAnswer(selectedChoice) {
    const question = questions[currentQuestionIndex];
    const resultElement = document.getElementById('result');
    if (selectedChoice === question.correct) {
        resultElement.textContent = '정답입니다!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = '오답입니다. 정답은 ' + question.correct + '입니다.';
        resultElement.style.color = 'red';
    }
    document.getElementById('next-button').style.display = 'inline';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById('next-button').style.display = 'none';
    } else {
        displayFinalResult();
    }
}

function displayFinalResult() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    const finalResult = document.getElementById('final-result');
    finalResult.innerHTML = "퀴즈가 끝났습니다!";
    document.getElementById('result-container').style.display = 'block';
}

// 첫 번째 문제를 표시합니다.
displayQuestion();
