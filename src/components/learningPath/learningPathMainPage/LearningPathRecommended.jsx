import React from 'react'
import RecommendedCard from './RecommendedCard'
import { dataRec } from './dummy'

const LearningPathRecommended = () => {
    // console.log(dataRec)
  return (
    <div className='max-w-6xl mx-auto m-5 w-screen'>
        <div className='flex items-end justify-between my-2 md:my-5 m-3'>
        <div className='text-xl md:text-3xl font-popins bg-gradient-course bg-clip-text text-transparent w-[360px] font-bold'>Recommended for you</div>
        </div>
        <div className='flex overflow-scroll no-scrollbar m-2'>
        {dataRec.map((data,i)=><RecommendedCard key={i} course={data}/>)}
        </div>
    </div>
  )
}

export default LearningPathRecommended