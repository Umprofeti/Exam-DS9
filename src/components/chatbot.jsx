import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './chatbot.css';
import chatbotIcon from '../img/chatbot.png'; 
import { ollama  } from 'ollama-ai-provider';
import { generateText } from 'ai';
import {MarkdownBlock} from "md-block";

const Chatbot = ({albumName, author, realeseDate}) => {

    let defaultText = `Hola, soy Groovy. Estoy aquí para ayudarte a descubrir, elegir y darte información relevante sobre el disco que vayas a comprar, así como sugerencias a la hora de crear tu propio vinilo :)`

    const [isOpen, setIsOpen] = useState(false);
    const [response, setResponse] = useState(defaultText);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };
    const model = ollama("llama3:latest")

    useEffect(()=> {
        const makeConnection = async () => {
            if(albumName != undefined && author != undefined){
                const { text, finishReason, usage } = await generateText({
                    model,
                    prompt: `Que dato interesante me puedes dar sobre el album ${albumName} del autor ${author}, el cual salió en el año ${realeseDate}, dame la respuesta en español. La repuesta quiero que me la des en un conjunto de etiquetas html, la repuesta debe empezar por "¡Gran Elección!"`,
                });
                setResponse(text)
                toggleChatbot()
            }
        }
        makeConnection()
    }, [])

    return (
        <div className="chatbot-container">
            <motion.img 
                src={chatbotIcon} 
                alt="Chatbot Icon" 
                className="chatbot-toggle mx-auto" 
                onClick={toggleChatbot} 
                style={{ cursor: 'pointer' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="chatbot"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ 
                            type: 'spring', 
                            stiffness: 100, 
                            damping: 20,
                            duration: 0.5,
                            onExitComplete: () => setIsOpen(false) 
                        }}
                    >
            <p  className='font-lilita overflow-scroll overflow-x-hidden max-h-[300px]' dangerouslySetInnerHTML={{__html: response}}></p>
          </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
