'use client'
import React, { useState } from 'react';
import { useDragElementLayout, useEmailTemplate, useScreenSize } from '@/app/provider';
import ColumnLayout from '../LayoutElements/ColumnLayout';

function Canvas() {
  const emailTemplateHook = useEmailTemplate();
  const emailTemplate = Array.isArray(emailTemplateHook) ? emailTemplateHook[0] : emailTemplateHook.emailTemplate || [];
  const setEmailTemplate = Array.isArray(emailTemplateHook) ? emailTemplateHook[1] : emailTemplateHook.setEmailTemplate || (() => {});
  
  const { DragElementLayout, setDragElementLayout } = useDragElementLayout();
  const { screenSize } = useScreenSize();
  const [dragOver, setDragOver] = useState(false);

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
    console.log('over....');
  }

  const onDropHandle = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (DragElementLayout) {
      setEmailTemplate(prev => [...prev, DragElementLayout]);
    }
    setDragElementLayout(null);
  }

  const getLayoutComponents = (element) => {
    if (element?.type === 'column') {
      return <ColumnLayout numOfCol={element.numOfCol} />;
    }
    // Add more conditions for other layout types
    return null;
  }

  return (
    <div className="mt-20 flex justify-center">
      <div 
        className={`bg-white p-6 w-full ${screenSize === 'desktop' ? 'max-w-2xl' : 'max-w-md'} 
        ${dragOver ? 'bg-purple-100 p-4' : ''}`}
        onDragOver={onDragOver}
        onDrop={onDropHandle}
      >
        {emailTemplate && emailTemplate.length > 0 ? (
          emailTemplate.map((element, index) => (
            <div key={index}>
              {getLayoutComponents(element)}
            </div>
          ))
        ) : (
          <p className='p-2 text-center bg-gray-100 border border-dashed'>Drag and drop elements here</p>
        )}
      </div>
    </div>
  );
}

export default Canvas;
