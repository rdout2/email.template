import Layout from '@/Data/Layout'
import { LayoutList } from 'lucide-react'
import React from 'react'
import ElementsLayoutCard from './ElementsLayoutCard'
import ElementList from '@/Data/ElementList'

function ElementsSideBar() {
  return (
    <div>
      <div className='p-5 h-sccreen shadow-sm'>
        <h2 className='font-bold text-lg'>Layouts</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-3'>
            {Layout.map((Layout,index)=>
           <ElementsLayoutCard Layout={Layout} key={index}/>
            )}
        </div>
        <h2 className='font-bold text-lg mt-7'>Element</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-3'>
            {ElementList.map((Element,index)=>
           <ElementsLayoutCard Layout={Element} key={index}/>
            )}
        </div>
      </div>
    </div>
  )
}

export default ElementsSideBar
