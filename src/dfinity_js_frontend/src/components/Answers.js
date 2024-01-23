import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import OpenAI from 'openai';
import { getMyOpenAi } from "../utils/openAiCanister";
import Modal from 'react-modal';
import DotSpinner from './DotSpinner';
import Navigation from './Navigation';
import Footer from './Footer';

const Answers = () => {
  const { state } = useLocation();
  const stateArray = state ? JSON.parse(state) : [];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLearnMore = async (title) => {
    setLoading(true);

    const openAiConfig = await getMyOpenAi();
    const openaiConfigParsed = JSON.parse(openAiConfig);
    const textToAnalyze = title;
    const openai = new OpenAI(openaiConfigParsed);

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Can you please, based on the text I will send to you, recognize mushrooms in text and write some basic information about them:\n Text: ${textToAnalyze}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });   

    setModalContent(completion.choices[0].message.content);
    setLoading(false);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {loading ? (
          <DotSpinner />
        ) : (
          <>
          {!modalIsOpen && <Navigation />}
          <div className="answer_container">
            {!modalIsOpen && stateArray.length > 0 && (
              <div className="card_container">
                {stateArray.map((item, index) => (
                  <div key={index} className="card">
                    <div className="card__img">
                      <img src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className="card-int">
                      <p className="card-int__title">{item.title}</p>
                      <a href={item.link} className='answer-button'>Read more</a>
                      <div className="ai-link-container">
                      <a className='ai-link' onClick={() => handleLearnMore(item.title)}>Learn more</a> from our AI    
                      </div>   
                    </div>
                  </div>
                ))}
              </div>
            )}
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Learn More Modal"
              className="modal"
              ariaHideApp={false}
              overlayClassName="modal-overlay"
            >
              <>
                <div className="modal-content">{modalContent}</div>
                <a onClick={closeModal} className="close"></a>
              </>
            </Modal>
          </div>
          {!modalIsOpen && <Footer />}
          </>
        )}
      </>
  );
};

export default Answers;
