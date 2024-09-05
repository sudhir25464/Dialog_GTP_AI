import React, { useContext,useState, useRef } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Contextconfig'
import Loader from './Loader'
const Main = () => {

    const { prevPromt,
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,

    } = useContext(Context);

    const [copyButtonText, setCopyButtonText] = useState("copy!");
    const resultRef = useRef(null); // Reference to the result div
    const handleCopyAll = () => {
        if (resultRef.current) {
          const range = document.createRange();
          range.selectNode(resultRef.current);
          window.getSelection().removeAllRanges(); 
          window.getSelection().addRange(range);
          document.execCommand("copy");
          window.getSelection().removeAllRanges();
    
          setCopyButtonText("Copied!");
          setTimeout(() => setCopyButtonText("copy"), 2000); // Reset after 2 seconds
        }
      };

    return (
        // <div className='root-main'>

        <div
            className="h-[100vh] flex w-full justify-center  p-6 bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${assets.Aihandshake})`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-300 via-pink-200 to-blue-400 opacity-80"></div>

            <div className='main'>
                <div className='nav'>
                    <p className='font-bold '>DialogGPT</p>
                    <img className='h-10 w-10' src={assets.AIlogo} alt=''></img>
                </div>


                <div className='main-container sm:px-5 '>


                    {!showResult ?
                        <>
                            <div className='main-text'>
                                <p><span>Hellow, </span></p>
                                <p>How Can  DialogGTP Help you !</p>
                            </div>

                            <div className='cards mb-2'>

                                <div className='card'>
                                    <p>Create Your Plan and Design with AI-Powered Assistance!</p>
                                    <img className='h-10' src={assets.ideaSMS} alt='' />
                                </div>

                                <div className='card'>
                                    <p>Design Your Future and Plan Smarter with AI-Driven Guidance!</p>
                                    <img className='h-10' src={assets.ideaSMS} alt='' />
                                </div>
                                <div className='card'>
                                    <p>Unlock Creative Solutions and Strategic Planning with AI Support!</p>
                                    <img className='h-10' src={assets.ideaSMS} alt='' />
                                </div>
                                <div className='card'>
                                    <p>Empower Your Ideas and Streamline Your Projects with AI Innovation!</p>
                                    <img className='h-10' src={assets.ideaSMS} alt='' />
                                </div>



                            </div>
                        </>

                        :
                        // <div className='result bg-slate-100 rounded pb-4 md:mx-4'>

                        //     <div className='result-title '>
                        //         <img className='h-7 w-7' src={assets.ideaSMS} alt=''></img>
                        //         <p>{recentPrompt}</p>
                        //     </div>
                        //     <div className='result-data'>
                        //         <img className='h-7 w-7' src={assets.AIlogo}></img>

                        //         {
                        //             loading ?
                        //                 <div className='outer-loader w-screen h-[300px] flex items-center justify-center'>
                        //                     <div className="loader">
                        //                     </div>
                        //                 </div>
                        //                 : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        //         }

                        //     </div>
                        // </div>

                        <div className='result bg-slate-100 rounded pb-4 md:mx-4' ref={resultRef}>
                                            {!loading && (
                          <div className='flex justify-end relative mt-7'>
                            <button 
                              onClick={handleCopyAll} 
                              className='bg-slate-50 text-dark rounded  p-1 hover:bg-slate-200 shadow-md fixed'
                            >
                              {copyButtonText}
                            </button>
                          </div>
                        )}
                        <div className='result-title flex items-center space-x-2'>
                          <img className='h-7 w-7' src={assets.ideaSMS} alt='Idea SMS'></img>
                          <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data flex items-start space-x-2'>
                          <img className='h-7 w-7' src={assets.AIlogo} alt='AI Logo'></img>
                          {
                            loading ?
                              <div className='outer-loader w-screen h-[280px] flex items-center justify-center'>
                                <div className="loader"></div>
                              </div>
                            : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                          }
                        </div>
                    
                      </div>
                    
                    }
                    <div className="main-bottom mb-5 ">
                        <div className='search-box rounded  mb-5 '>
                            <input onChange={(e) => setInput(e.target.value)} value={input} type='text' className='h-7 ' placeholder='Enter a promt here'></input>
                            <div className='img-box flex'>
                                {/* <img className='h-10 w-10' src={assets.idea} alt='' />
                                <img className='h-10 w-10' src={assets.idea} alt='' /> */}
                                <img className='h-10 w-10' onClick={() => onSent()} src={assets.sendBtn} alt='' />

                            </div>
                        </div>
                    </div>


                    {/* </div> */}


                </div>

            </div>


        </div>
    )
}

export default Main
