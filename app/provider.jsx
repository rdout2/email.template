"use client";

import React, { useState, useContext } from 'react';
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ScreenSizeContext } from '@/context/ScreenSizeContext';
import { DragDropLayoutElement } from '@/context/DragDropLayoutElement';
import { EmailTemplateContext } from '@/context/EmailTemplateContext';
import EmailTemplate from '@/components/custom/EmailTemplate';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

function Provider({ children }) {
  const [screenSize, setScreenSize] = useState("desktop");
  const [DragElementLayout, setDragElementLayout] = useState();
  const [emailTemplate, setEmailTemplate] = useState([]);

  return (
    <ConvexProvider client={convex}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
          <DragDropLayoutElement.Provider value={{ DragElementLayout, setDragElementLayout }}>
           <EmailTemplateContext.Provider value ={{emailTemplate, setEmailTemplate}}>
            {children}
            </EmailTemplateContext.Provider>
          </DragDropLayoutElement.Provider>
        </ScreenSizeContext.Provider>
      </GoogleOAuthProvider>
    </ConvexProvider>
  );
}

export default Provider;

export function useScreenSize() {
  const context = useContext(ScreenSizeContext);
  if (!context) {
    throw new Error("useScreenSize must be used within a ScreenSizeContext.Provider");
  }
  return context;
}

export function useDragElementLayout() {
  const context = useContext(DragDropLayoutElement);
  if (!context) {
    throw new Error("useDragElementLayout must be used within a DragDropLayoutElement.Provider");
  }
  return context;
}

export const useEmailTemplate =()=>{
  return useContext(EmailTemplateContext)
}
 