export const generateRandomText = (
	numSentences: number,
	isPeriod = true,
	isShort = false
) => {
	const sentences = [];
	const words = [
		'Lorem',
		'ipsum',
		'dolor',
		'sit',
		'amet',
		'consectetur',
		'adipiscing',
		'elit',
		'sed',
		'do',
		'eiusmod',
		'tempor',
		'incididunt',
		'ut',
		'labore',
		'et',
		'dolore',
		'magna',
		'aliqua',
		'Ut',
		'enim',
		'ad',
		'minim',
		'veniam',
		'quis',
		'nostrud',
		'exercitation',
		'ullamco',
		'laboris',
		'nisi',
		'ut',
		'aliquip',
		'ex',
		'ea',
		'commodo',
		'consequat',
		'Duis',
		'aute',
		'irure',
		'dolor',
		'in',
		'reprehenderit',
		'in',
		'voluptate',
		'velit',
		'esse',
		'cillum',
		'dolore',
		'eu',
		'fugiat',
		'nulla',
		'pariatur',
		'Excepteur',
		'sint',
		'occaecat',
		'cupidatat',
		'non',
		'proident',
		'sunt',
		'in',
		'culpa',
		'qui',
		'officia',
		'deserunt',
		'mollit',
		'anim',
		'id',
		'est',
		'laborum',
	];

	for (let i = 0; i < numSentences; i++) {
		const numWordsInSentence = isShort
			? Math.floor(Math.random() * 6) + 2
			: Math.floor(Math.random() * 6) + 5; // Randomly select 5 to 10 words per sentence
		const sentenceWords = [];
		for (let j = 0; j < numWordsInSentence; j++) {
			const randomWordIndex = Math.floor(Math.random() * words.length);
			sentenceWords.push(words[randomWordIndex]);
		}
		let sentence = isPeriod
			? sentenceWords.join(' ') + '.'
			: sentenceWords.join(' ');
		sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
		sentences.push(sentence);
	}

	return sentences.join(' ');
};
