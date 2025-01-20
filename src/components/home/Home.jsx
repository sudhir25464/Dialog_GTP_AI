import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import '../main/Main.css';

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
      className="min-h-screen flex w-full justify-center items-center text-center  bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${assets.HomeBg})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white-100 to-yellow-400 opacity-60"></div>

      {/* Content */}
      <div className="relative flex flex-col max-w-5xl items-start phone-screen">
        <p className="  text-lime-100 items-start bg-black  sm:py-10 sm:text-2xl  md:text-4xl font-bold mb-4 shadow-lg">
        Collaborate with DialogGTP<br></br> to Enhance  Skills and Knowledge!
        </p>
        <p className=" font-12 text-gray-200  items-start bg-black mb-8  shadow-md">

          Communicate with AI

          At DialogGTP, we're redefining how you connect with technology. Our AI platform enhances your communication experience with cutting-edge features and powerful functionality. Whether you need personalized assistance, engaging conversations, or smart solutions, DialogGTP opens the door to a new era of AI-driven interactions.        </p>



        <div className="flex flex-col md:flex-row justify-center gap-5">
          <Link to='/gtpresponce'>
            <button

              className="bg-green-600  text-white px-6 py-3  mb-4 md:mb-0 hover:bg-blue-700 shadow-md"
            >
              Get star-AI
            </button>

          </Link>
          <Link to="/helplearnmore">
            <button className="bg-yellow-600 text-white px-6 py-3  hover:bg-green-700 shadow-md"


            >


              Learn About GTP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
