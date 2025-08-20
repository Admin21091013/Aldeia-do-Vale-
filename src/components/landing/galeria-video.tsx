"use client";

import Script from 'next/script';
import { useEffect, useRef } from 'react';

// Custom type definition to extend Window
declare global {
  interface Window {
    _wq: any[];
  }
}

export function GaleriaVideo() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window._wq = window._wq || [];
    window._wq.push({
      id: "xqecsrr0b0",
      onReady: (video: any) => {
        console.log("Wistia video ready:", video);
      }
    });
  }, []);

  return (
    <div className="w-full">
        <Script src="https://fast.wistia.com/assets/external/E-v1.js" async />
        <div className="wistia_responsive_padding" style={{padding: '177.78% 0 0 0', position: 'relative'}}>
            <div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
            <div 
                ref={videoRef}
                className="wistia_embed wistia_async_xqecsrr0b0 videoFoam=true" 
                style={{height: '100%', position: 'relative', width: '100%', borderRadius: '1rem', overflow: 'hidden'}}
            >
                <div 
                className="wistia_swatch" 
                style={{height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%'}}
                >
                <img 
                    src="https://fast.wistia.com/embed/medias/xqecsrr0b0/swatch" 
                    style={{filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%'}} 
                    alt="" 
                    aria-hidden="true" 
                />
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}
