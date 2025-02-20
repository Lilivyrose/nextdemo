"use client";
import { useState } from 'react'; 4.6k (gripped: 1.9k) 
import './globals.css'; 
export default function Home() {
  
  return ( 
    <>
      <div>
        <div className="spot">
        <h1 className="text-3xl text-center text-White mb-5">Welcome To Our Page!</h1>
        </div>
        <div className="box">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam saepe totam aut voluptatem suscipit maiores modi velit expedita voluptas, alias, dolore similique, deserunt magni est repellendus pariatur accusantium necessitatibus.
        </p>
        </div>
      </div>
      <div className='but'>
      <button className="b">
        <a href="/home">Explore</a>
      </button>
      </div>
      </>
   );
}