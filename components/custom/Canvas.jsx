'use client'
import React, { useState } from 'react';
import { useDragElementLayout, useEmailTemplate, useScreenSize } from '@/app/provider';

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

  return (
    <div className="mt-20 flex justify-center">
      <div 
        className={`bg-white p-6 w-full ${screenSize === 'desktop' ? 'max-w-2xl' : 'max-w-md'} 
        ${dragOver ? 'bg-purple-100 p-4' : ''}`}
        onDragOver={onDragOver}
        onDrop={onDropHandle}
      >
        {emailTemplate.map((element, index) => (
          <div key={index}>
            {element.type === 'text' && <p>{element.content}</p>}
            {element.type === 'image' && <img src={element.src} alt={element.alt} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Canvas;
