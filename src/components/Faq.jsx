import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  return (
    <>
      <div className="flex flex-col w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">

        {/* Home Section with Gradient Background */}
        <div className="flex items-center justify-center min-h-[300px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <h1 className="text-4xl font-extrabold text-center hover:text-white transition-colors duration-300 text-white p-4 rounded">
            Learn about D_GPT
          </h1>
        </div>

        <div className="w-full flex flex-col bg-opacity-80 p-8 items-center justify-center">
          
          <h2 className="text-2xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h2>
          
          {/* FAQ Item 1 */}
          <div className="border-b-2 py-2 w-full sm:w-3/4 lg:w-1/2">
            <button 
              className="w-full text-left font-semibold text-lg flex items-center justify-between hover:bg-gray-200 p-2 rounded" 
              onClick={() => toggleFaq(1)}
            >
              <span>1. How does GPT work?</span>
              <span>{openFaq === 1 ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {openFaq === 1 && (
              <div className="mt-2 p-2 bg-gray-100 rounded">
                <p>
                  GPT (Generative Pre-trained Transformer) is a machine learning model that uses deep learning techniques to understand and generate human-like text. It works by predicting the next word in a sequence based on the context of the previous words.
                </p>
              </div>
            )}
          </div>
          
          {/* FAQ Item 2 */}
          <div className="border-b-2 py-2 w-full sm:w-3/4 lg:w-1/2">
            <button 
              className="w-full text-left font-semibold text-lg flex items-center justify-between hover:bg-gray-200 p-2 rounded" 
              onClick={() => toggleFaq(2)}
            >
              <span>2. What are the benefits of using GPT models for study purposes?</span>
              <span>{openFaq === 2 ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {openFaq === 2 && (
              <div className="mt-2 p-2 bg-gray-100 rounded">
                <p>
                  GPT models can provide detailed explanations on theoretical topics, assist with language learning, generate creative writing, and help with problem-solving by providing context-based answers.
                </p>
              </div>
            )}
          </div>
          
          {/* FAQ Item 3 */}
          <div className="border-b-2 py-2 w-full sm:w-3/4 lg:w-1/2">
            <button 
              className="w-full text-left font-semibold text-lg flex items-center justify-between hover:bg-gray-200 p-2 rounded" 
              onClick={() => toggleFaq(3)}
            >
              <span>3. How accurate are GPT-generated responses?</span>
              <span>{openFaq === 3 ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {openFaq === 3 && (
              <div className="mt-2 p-2 bg-gray-100 rounded">
                <p>
                  GPT-generated responses are generally very accurate, especially when the input is clear and the topic is well-known. However, the accuracy may vary with ambiguous or complex queries.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="border-b-2 py-2 w-full sm:w-3/4 lg:w-1/2">
            <button 
              className="w-full text-left font-semibold text-lg flex items-center justify-between hover:bg-gray-200 p-2 rounded" 
              onClick={() => toggleFaq(4)}
            >
              <span>4. How can GPT models assist students in their research?</span>
              <span>{openFaq === 4 ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {openFaq === 4 && (
              <div className="mt-2 p-2 bg-gray-100 rounded">
                <p>
                  GPT models can help students by providing summaries of research topics, generating ideas for research papers, assisting with literature reviews, and even helping draft content. They can act as a supplementary tool for brainstorming and drafting.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 5 */}
          <div className="border-b-2 py-2 w-full sm:w-3/4 lg:w-1/2">
            <button 
              className="w-full text-left font-semibold text-lg flex items-center justify-between hover:bg-gray-200 p-2 rounded" 
              onClick={() => toggleFaq(5)}
            >
              <span>5. Can GPT models help with content creation for social media?</span>
              <span>{openFaq === 5 ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {openFaq === 5 && (
              <div className="mt-2 p-2 bg-gray-100 rounded">
                <p>
                  Yes, GPT models can assist in creating engaging social media content by generating ideas for posts, drafting captions, and even suggesting hashtags. They can also help with creating consistent and relevant content for different social media platforms.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 6 */}
          <div className="border-b-2 py-2 w-full sm:w-3/4 lg:w-1/2">
            <button 
              className="w-full text-left font-semibold text-lg flex items-center justify-between hover:bg-gray-200 p-2 rounded" 
              onClick={() => toggleFaq(6)}
            >
              <span>6. How can GPT models be utilized for writing academic content?</span>
              <span>{openFaq === 6 ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {openFaq === 6 && (
              <div className="mt-2 p-2 bg-gray-100 rounded">
                <p>
                  GPT models can aid in academic writing by suggesting structure, generating content ideas, and helping draft sections of papers. They can also assist in revising and improving the clarity and coherence of academic texts.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 7 */}
          <div className="border-b-2 py-2 w-full sm:w-3/4 lg:w-1/2">
            <button 
              className="w-full text-left font-semibold text-lg flex items-center justify-between hover:bg-gray-200 p-2 rounded" 
              onClick={() => toggleFaq(7)}
            >
              <span>7. Can GPT models help with generating ideas for creative writing?</span>
              <span>{openFaq === 7 ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {openFaq === 7 && (
              <div className="mt-2 p-2 bg-gray-100 rounded">
                <p>
                  Yes, GPT models can generate prompts, story ideas, and even complete paragraphs for creative writing. They can be used to overcome writer's block and inspire new creative directions.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 8 */}
          <div className="border-b-2 py-2 w-full sm:w-3/4 lg:w-1/2">
            <button 
              className="w-full text-left font-semibold text-lg flex items-center justify-between hover:bg-gray-200 p-2 rounded" 
              onClick={() => toggleFaq(8)}
            >
              <span>8. How can GPT models be used to improve social media engagement?</span>
              <span>{openFaq === 8 ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {openFaq === 8 && (
              <div className="mt-2 p-2 bg-gray-100 rounded">
                <p>
                  GPT models can help improve social media engagement by generating compelling content, responding to user comments, and analyzing trends to suggest relevant topics. They can also assist in creating personalized responses to increase interaction.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 9 */}
          <div className="border-b-2 py-2 w-full sm:w-3/4 lg:w-1/2">
            <button 
              className="w-full text-left font-semibold text-lg flex items-center justify-between hover:bg-gray-200 p-2 rounded" 
              onClick={() => toggleFaq(9)}
            >
              <span>9. Can GPT models assist with generating research questions?</span>
              <span>{openFaq === 9 ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {openFaq === 9 && (
              <div className="mt-2 p-2 bg-gray-100 rounded">
                <p>
                  GPT models can assist in generating research questions by providing suggestions based on the research topic and context. They can help in formulating relevant and thought-provoking questions to guide your research.
                </p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default FAQ;
