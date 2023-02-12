import React from 'react'


export const Client_List = ({clientData}) => {
    return (
        <div className='my-8'>
            <div className=' py-5 '>

                <div class="flex justify-center ">
                    <div className=' w-9/12 '>
                    <div className='text-2xl font-medium py-14 text-center'>OUR CLIENTS</div>
                    <div className='flex gap-x-10 overflow-x-scroll overflow-auto scrollbar-hide'>

                        
                    <div className='w-80 h-12 flex gap-x-8'>
                    {clientData?.map((cl)=>
                        <img className="h-full w-full" src={cl?.imgSrc} alt="Figma"/>
                        )}
                    </div>
                    
             
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


