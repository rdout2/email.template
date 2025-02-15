import Layout from '@/Data/Layout'
import { LayoutList } from 'lucide-react'
import React from 'react'

function ElementsLayoutCard({Layout}) {
  return (
    <div  className='flex flex-col items-center justify-center border border-dashed rounded-xl p-3 
    group hover:shadow-md hover:border-primary cursor-pointer'>
    {<Layout.icon  className='p-2 h-9 w-9 bg-gray-100
     group-hover:text-primary group-hover:bg-purple-100 rounded-full'/>}
    <h2 text-sm="true">{Layout.label}</h2>
</div>
  )
}

export default ElementsLayoutCard
