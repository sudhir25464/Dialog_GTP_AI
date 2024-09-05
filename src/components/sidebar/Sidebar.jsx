import React, { useContext, useState } from 'react'
import './sidebar.css'
import { Context } from '../../context/Contextconfig'

import { assets } from '../../assets/assets'

const Sidebar = () => {

  const [extended, seTended] = useState(false)

  const { setPrevPromt,
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
   
    } =useContext(Context);


    const loadPromt = async(promt)=>{
      setRecentPrompt(prompt)
      await onSent(prompt);
    }


  const HnadleExtendClick = (prev)=>{
    seTended(prev =>!prev);

  }
  return (
    <div className='sidebar'>

      <div className='top p-2'>
        <img className='h-10 w-10 cursor-pointer' onClick={HnadleExtendClick} src={assets.menu} alt='' />
        <div className='new-chat'>
          <img className='h-10 w-10' src={assets.chat} alt='' />

          {extended ? <p>New chat</p> : null}
        </div>

        {extended ?
          <div className='recent '>
            <p className='recent-title'> Recent</p>
            {
              prevPrompts.map((item,index)=>{
                return(
                  // onClick={()=>loadPromt(item)}
                  <div  className='recent-entr '> 
                  <img className='h-10 w-10' src={assets.restore} alt='' />
                  <p>{item.slice(0,20)}...</p>
                </div>
                )

              })
            }
         

          </div>
          : null


        }
      </div>


      <div className='buttom'>
        <div className='bottom-item recent-entry'>
          <img className='h-10 w-10' src={assets.help} />
          {extended ? <p>Help</p> : null}
        </div>

        <div className='bottom-item recent-entry'>
          <img className='h-10 w-10' src={assets.restore} />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className='bottom-item recent-entry'>
          <img className='h-10 w-10' src={assets.setting} />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
