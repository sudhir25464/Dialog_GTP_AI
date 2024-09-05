import React from 'react';
import { useNavigate } from 'react-router-dom';
import  { assets } from '../../assets/assets';

const Home = () => {
  const navigate = useNavigate();

  const ClickNavigate = () => {
    window.open('gtpresponce', '_blank');
  };


  

  const ClicklearnMore = () => {
    window.open('helplearnmore', '_blank');
  };
  return (
    <div
      className="min-h-screen flex w-full justify-center items-center text-center p-6 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${assets.HomeBg})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 opacity-60"></div>

      {/* Content */}
      <div className="relative flex flex-col">
        <h1 className=" text-3xl sm:text-4xl font-bold text-white mb-4 shadow-lg ">
        Let's Collaborate with DialogGTP to Enhance  Skills and Knowledge!
        </h1>
        <p className="sm:text-xl font-12 text-gray-200 mb-8 max-w-5xl shadow-md">

         Communicate with AI

At DialogGTP, we're redefining how you connect with technology. Our AI platform enhances your communication experience with cutting-edge features and powerful functionality. Whether you need personalized assistance, engaging conversations, or smart solutions, DialogGTP opens the door to a new era of AI-driven interactions.        </p>
        
        
        
        <div className="flex flex-col md:flex-row justify-center gap-5">
          <button
            onClick={ClickNavigate}
            className="bg-blue-600 button text-white px-6 py-3 rounded-lg mb-4 md:mb-0 hover:bg-blue-700 shadow-md"
          >
            Get start D*GTP
          </button>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 shadow-md"
          
          onClick={ClicklearnMore}
          >
            Learn About GTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
