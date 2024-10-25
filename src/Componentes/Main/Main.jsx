import React, { useContext } from 'react'
import { Assets } from '../../assets/assets.js'
import { Context } from '../../context/Context'
import './Main.css'

const Main = () => {

    const{onSent,input,setInput,loading, resultData, showResult, recentPrompt}=useContext(Context);

  return (
    <div className='flex-1 min-h-screen relative pb-[15vh]' >

        <div className="flex items-center justify-between p-5 text-2xl text-whitee-500">
            <p>Gemini</p>
            <img className='w-10 rounded-full' src={Assets.user_icon} alt=""  />
        </div>
        <div className="main-cont m-auto max-w-[900px]">
            {!showResult ? 
            <>
                        <div className="p-5 mx-0 my-12 text-5xl font-medium greet text-whitee-600">
                <p><span className='bg-gradient-to-r from-[#4b90ff] to-[#f55446] bg-clip-text text-transparent'>Hello, Khushi.</span></p>
                <p>How Can I help you today?</p>
            </div>
            <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5">
                <div className="card h-[200px] p-[15px] bg-whitee-700 rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-lg '>
                        Suggest some of the best travel places in the world.
                    </p>
                    <img className='absolute p-1 bg-white w-9 rounded-3xl bottom-2 right-2' src={Assets.compass_icon} alt=""  />
                </div>
                <div className="card h-[200px] p-[15px] bg-whitee-700 rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-lg '>
                        Summarize the concept: urban planning.
                    </p>
                    <img className='absolute p-1 bg-white w-9 rounded-3xl bottom-2 right-2' src={Assets.bulb_icon} alt=""  />
                </div>
                <div className="card h-[200px] p-[15px] bg-whitee-700 rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-lg text-[#585858]'>
                        brain strom team bonding activites for work retreat.
                    </p>
                    <img className='absolute p-1 bg-white w-9 rounded-3xl bottom-2 right-2' src={Assets.message_icon} alt=""  />
                </div>
                <div className="card h-[200px] p-[15px] bg-whitee-700 rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-lg '>
                        Improve readability of the given code.
                    </p>
                    <img className='absolute p-1 bg-white w-9 rounded-3xl bottom-2 right-2' src={Assets.code_icon} alt=""  />
                </div>
            </div>
            </>
            :
            <div className=" px-3 max-h-[70vh] result overflow-y-scroll ">
                <div className="flex items-center gap-5 my-10 res-title">
                    <img className='w-10 rounded-full' src={Assets.user_icon} alt="" srcset="" />
                    <p>
                        {recentPrompt}
                    </p>
                </div>
                <div className="flex items-start gap-5 res-data">
                    <img className='w-10 rounded-full' src={Assets.gemini_icon} alt="" srcset="" />
                    {loading ?
                    <div className="flex flex-col w-full gap-2 loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                :
                    <p dangerouslySetInnerHTML= {{__html:resultData}}></p> 
                    // {/*if provided directly it will show all the tags and all */}
                }
                     
                </div>
            </div>
            }

            <div className="main-bottom absolute bottom-0 w-full max-w-[900px] px-[20px] mx-auto">
                <div className="search-box flex items-center justify-between gap-[20px] bg-whitee-700 p-[10px_20px] rounded-[50px]">
                    <input  onChange={(e)=>{setInput(e.target.value)}}  value={input} type="text" className="flex-1 bg-transparent border-none outline-none p-[8px] text-[18px]" placeholder='Enter a prompt here'
                           onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                   onSent(); }} }
                             />
                    <div className='flex items-center gap-4'>
                        <img className="w-6 cursor-pointer " src={Assets.gallery_icon} alt=""  />
                        <img className="w-6 cursor-pointer" src={Assets.mic_icon} alt=""  />
                        <img onClick={()=> onSent()} className="w-6 cursor-pointer" src={Assets.send_icon} alt=""  />
                    </div>
                </div>
                <p className='bottom-info text-sm mx-auto my-4 text-center text-[#585858] font-light'>
                    Gemini may display inaccurate info, including about people, so double-check its responses.Your privacy and Gemini apps.
                </p>
                

            </div>



        </div>
    </div>
  )
}

export default Main
