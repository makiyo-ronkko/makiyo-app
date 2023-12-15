import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Chat.module.css';
import { classNames } from '../../../../utils/classNames';

interface ChatProp {
	isDarkMode: boolean;
}

type ChatHistory = { role: string; message: string; id: string }[];

const botResponses = [
	'Hello!',
	'Sounds good!',
	'How can I help you?',
	'I hear you.',
	'Nice to chat with you!',
	'Bye for now!',
	'I am just a bot.',
	'Good to hear!',
	'Sorry, I do not understand.',
	'😂',
	'Nice 🤗',
	'😴',
	'Boo! 👻',
	'🧡',
	'💬',
];

const emojiList = [
	'😊',
	'😂',
	'😍',
	'😇',
	'🤓',
	'👍',
	'👋',
	'🎉',
	'❤️',
	'✨',
	'🔥',
];

const getRandomResponse = () => {
	const randomIndex = Math.floor(Math.random() * botResponses.length);
	return botResponses[randomIndex];
};

export const Chat = ({ isDarkMode }: ChatProp) => {
	const [userMessage, setUserMessage] = useState<{
		message: string;
		type: string;
	}>({ message: '', type: '' });
	const [chatHistory, setChatHistory] = useState<ChatHistory>([]);
	const chatContainerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleEmojiClick = (emoji: string) => {
		setUserMessage((prevMessage) =>
			prevMessage
				? { message: prevMessage.message + emoji, type: 'emoji' }
				: { message: emoji, type: 'emoji' }
		);
		if (!inputRef.current) return;
		inputRef.current.focus();
	};

	const handleInput = (e: { target: { value: string } }) => {
		setUserMessage({ message: e.target.value, type: 'text' });
	};

	const handleBot = (updatedChatHistory: ChatHistory) => {
		const randomResponse = getRandomResponse();
		setChatHistory([
			...updatedChatHistory,
			{ role: 'bot', message: randomResponse, id: uuidv4() },
		]);
	};

	const handleSendMessage = () => {
		if (userMessage.message.trim() === '') return;

		const updatedChatHistory = [
			...chatHistory,
			{ role: 'user', message: userMessage.message, id: uuidv4() },
		];
		setChatHistory(updatedChatHistory);
		setUserMessage({ message: '', type: '' });

		const timeoutId = setTimeout(() => {
			handleBot(updatedChatHistory);
		}, 800);
		return () => clearTimeout(timeoutId);
	};

	const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleSendMessage();
		}
	};

	useEffect(() => {
		if (!chatContainerRef.current) return;

		chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
	}, [chatHistory]);

	return (
		<div>
			<div
				className={`${styles.chatHistory} ${
					isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground
				}`}
				ref={chatContainerRef}
			>
				{chatHistory.map(({ role, id, message }) => (
					<div
						key={id}
						className={`${styles.chat} ${classNames({
							[styles.botMessage]: role === 'bot',
							[styles.userMessage]: role === 'user',
						})}
						`}
					>
						<div
							className={`${styles.messageBubble} ${
								isDarkMode
									? styles.messageBubbleDarkMode
									: styles.messageBubbleDefault
							}`}
						>
							{`${role === 'user' ? 'You: ' : 'Bot: '}${message}`}
						</div>
					</div>
				))}
			</div>
			<div className={styles.inputWrapper}>
				<div>
					<input
						type='text'
						value={userMessage.message}
						onChange={handleInput}
						onKeyDown={handleKeyDown}
						placeholder='Type a message...'
						className={`${styles.input} ${
							isDarkMode
								? styles.darkModeBackground
								: styles.defaultModeBackground
						}`}
						ref={inputRef}
					/>
					<div className={styles.emojiList}>
						{emojiList.map((emoji) => (
							<span
								key={emoji}
								className={styles.emoji}
								onClick={() => handleEmojiClick(emoji)}
								onKeyDown={handleKeyDown}
							>
								{emoji}
							</span>
						))}
					</div>
				</div>
				<button className={styles.sendButton} onClick={handleSendMessage}>
					Send
				</button>
			</div>
		</div>
	);
};
