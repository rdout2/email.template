import EditorHeaader from '@/components/custom/EditorHeaader'
import ElementsSideBar from '@/components/custom/ElementsSideBar'
import Canvas from '@/components/custom/Canvas'
import Setting from '@/components/custom/setting'
import React from 'react'

function Editor() {
  return (
    <div>
      <EditorHeaader/>
      <div className='grid grid-cols-5'>
        <ElementsSideBar/>
        <div className='col-span-3 bg-gray-100'>
        <Canvas/>
        </div>
        <Setting/>

      </div>
    </div>
  )
}

export default Editor
