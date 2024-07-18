import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './chatbot.css';
import chatbotIcon from '../img/chatbot.png'; 

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chatbot-container">
            <motion.img 
                src={chatbotIcon} 
                alt="Chatbot Icon" 
                className="chatbot-toggle" 
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
          <p className="font-lilita">Hola, soy Groovy. Estoy aquí para ayudarte a descubrir, elegir y darte información relevante sobre el disco que vayas a comprar, así como sugerencias a la hora de crear tu propio vinilo :)</p>
          </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
