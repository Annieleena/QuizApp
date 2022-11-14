import { useState } from 'react';
export default function Button() {
    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of Finland?',
			answerOptions: [
				{ answerText: 'Boston', isCorrect: false },
				{ answerText: 'Helsinki', isCorrect: true },
				{ answerText: 'Delhi', isCorrect: false },
				{ answerText: 'Tokyo', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'Delhi', isCorrect: true },
				{ answerText: 'Mumbai', isCorrect: false },
				{ answerText: 'Hyderabad', isCorrect: false },
				{ answerText: 'Chennai', isCorrect: false },
			],
		},
		{
			questionText: 'What is the Capital city of USA?',
			answerOptions: [
				{ answerText: 'California', isCorrect: false },
				{ answerText: 'Boston', isCorrect: false },
				{ answerText: 'Denver', isCorrect: false },
				{ answerText: 'Washington DC', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					    <div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
