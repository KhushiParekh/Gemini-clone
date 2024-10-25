import React, { useState,useContext } from 'react'
import Assets from '../../assets/assets.js'
import { Context } from '../../context/Context'


const SideBar = () => {
    const [extended, setExtended]= useState(true)
    const {onSent , prevPrompts , setPrevPrompts, newChat,isDarkMode, toggleDarkMode} = useContext(Context)
    
    const loadPrompt= async(prompt)=>{
        setRecentPrompt(prompt)
        await onSent (prompt)
    }
  return (
    <div className={`sidebar pl-5 pr-3 py-4 min-h-screen inline-flex flex-col justify-between bg-whitee-100 transition-all duration-300 ${extended ? 'w-64' : 'min-w-5'}`}>
        <div className='top'>
            <img onClick={()=>setExtended(prev => !prev)} className='block w-5 ml-2 cursor-pointer menu' src={Assets.menu_icon} alt="logo" />
            <div onClick={()=>newChat()} className='inline-flex items-center gap-3 p-4 mt-8 text-base cursor-pointer new-chat bg-whitee-200 rounded-2xl text-slate-500 ' >
                <img className='w-5'src={Assets.plus_icon} alt=""  />
                {extended ? <p>New Chat</p> : null}
            </div>
            {extended ?<div className='flex flex-col recent'>
                <p className='mb-4 recent-title mt-7 '>Recent</p>
                {prevPrompts.map((item, index)=>{
                    return(
                        <div onClick={()=>loadPrompt(item)} className='flex items-start gap-2 p-3 pr-10 cursor-pointer recent-entry rounded-3xl text-whitee-300 hover:bg-whitee-400'>
                        <img className='w-5' src={Assets.message_icon} alt=""  />
                        <p >{item.slice(0,10)}...</p>
                        </div>
                        )
                })}
                
            </div> : null }
            
        </div>

        <div className='flex flex-col bottom '>
            <div className='flex items-start gap-2 p-3 pr-5 cursor-pointer bottom-item recent-entry rounded-2xl text-whitee-300 hover:bg-whitee-400'>
                <img className='w-5' src={Assets.question_icon} alt=""  />
                {extended?<p>Help</p> : null } 
            </div>
            <div className='flex items-start gap-2 p-3 pr-5 cursor-pointer bottom-item recent-entry rounded-2xl text-whitee-300 hover:bg-whitee-400'>
                <img className='w-5' src={Assets.history_icon} alt=""  />
                {extended?<p>Activity</p> : null } 
            </div>
            <div className='flex items-start gap-2 p-3 pr-5 cursor-pointer bottom-item recent-entry rounded-2xl text-whitee-300 hover:bg-whitee-400'>
                <img className='w-5' src={Assets.setting_icon} alt=""  />
                {extended?<p>Settings</p> : null } 
                <label className="ml-2">
                    <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                        <span className="ml-1">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    </label>
            </div>
        </div>
        
    </div>
  )
}

export default SideBar
