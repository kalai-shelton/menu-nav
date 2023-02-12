import Link from 'next/link'
import React from 'react'


export const Content_section = ({contentData}) => {
  return (
    <div className='h-auto container mx-auto my-8 px-5'>
      {contentData?.map((ct) =>
        <>
          <div className='flex flex-col '>
            {ct?.MainHeader &&
              <div className='text-2xl font-bold  tracking-wider pb-3'>{ct?.MainHeader}</div>
            }
            {ct?.subHeader &&
              <div className='text-xl font-bold  tracking-wider py-3 '>{ct?.subHeader}</div>
            }
            {ct?.MainContent &&
              <div className='pt-10'>{ct?.MainContent}</div>
            }
          </div>
          {ct?.subContent?.length > 0 ?
            <div className='grid grid-cols-2 lg:grid-cols-4 pt-10 gap-x-6'>
              {ct?.subContent?.map((sc) =>
                <div className=''>
                  {sc?.subContentHeader &&
                    <div className='pt-6 pb-3 font-bold text-lg'>{sc?.subContentHeader}</div>
                  }
                  {sc?.SubContent &&
                    <div>{sc?.SubContent}</div>
                  }
                  {sc?.link &&
                    <Link className='py-6 text-blue-400 font-semibold' href={sc?.link}>{"More >>"}</Link>}
                </div>
              )}
            </div>
            : null}
        </>
      )}

    </div>
  )
}


