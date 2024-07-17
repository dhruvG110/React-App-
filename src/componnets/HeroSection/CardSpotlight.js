// Assuming you have the LockClosedIcon component and other dependencies available
import { useState,useRef } from "react";
import React  from "react";
import './HeroSection.css'
const CardSpotlight = (props) => {
  const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
  
    const handleMouseMove = (e) => {
      if (!divRef.current || isFocused) return;
  
      const div = divRef.current;
      const rect = div.getBoundingClientRect();
  
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
  
    const handleFocus = () => {
      setIsFocused(true);
      setOpacity(1);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
      setOpacity(0);
    };
  
    const handleMouseEnter = () => {
      setOpacity(1);
    };
  
    const handleMouseLeave = () => {
      setOpacity(0);
    };
  
    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative max-w-xs rounded-3xl border border-neutral-800 bg-neutral-950 p-8 card-all"
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.25), transparent 40%)`,
          }}
        />
        <div className="mb-4">
          {/* Assuming you have an appropriate icon */}
          {/* <LockClosedIcon className="h-8 w-8 text-neutral-400" /> */}
        </div>
        <h3 className="mb-2 font-medium tracking-tight text-neutral-100">
         {props.heading}
        </h3>
        <p className="text-sm text-neutral-400">
         {props.para}
        </p>
      </div>
    )
}

export default CardSpotlight
