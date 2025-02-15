'use client'
import Layout from '@/Data/Layout'
import React from 'react'
import ElementsLayoutCard from './ElementsLayoutCard'
import ElementList from '@/Data/ElementList'
import { useDragElementLayout } from '@/app/provider'

function ElementsSideBar() {
  const { DragElementLayout, setDragElementLayout } = useDragElementLayout();

  const onDragLayoutStart = (Layout) => {
    setDragElementLayout({
      ...Layout,
      id: Date.now()
    });
  }

  return (
    <div>
      <div className='p-5 h-screen shadow-sm'>
        <h2 className='font-bold text-lg'>Layouts</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-3'>
          {Layout.map((layout, index) => (
            <div key={index} draggable={true} onDragStart={() => onDragLayoutStart(layout)}> 
              <ElementsLayoutCard Layout={layout}/>
            </div>
          ))}
        </div>
        <h2 className='font-bold text-lg mt-7'>Elements</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-3'>
          {ElementList.map((element, index) => (
            <ElementsLayoutCard Layout={element} key={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ElementsSideBar
