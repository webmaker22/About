import React from 'react';
import { Image } from 'react-bootstrap';
import shortvideo from './shortvideo.mp4';
import shortvid from './firstvid.mp4';
import shortpic from './shortpic.png'
const ContactAndVideo = () => {
  return (
    <>
    <div className="min-h-screen p-10 flex flex-col items-center justify-center text-center bg-gray-100" style={{paddingTop:'80px'}}>
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Watch My First Project Demo</h2>        
        <video
        style={{paddingTop:'30px'}}
          src={shortvid}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-3xl rounded-xl shadow-xl"
        />
        <div className="mb-10">
          <h2 style={{ paddingTop: '40px' }} className="text-3xl font-bold mb-4">
            Visit My Website
          </h2>
        </div>
        <a
          href="https://coursera22.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-dark font-bold text-2xl hover:text-dark"
          style={{ textDecoration: 'none' }}
        >
          <span>🔗</span>Click here to go to my portfolio
        </a>
      </div>
    </div>
    <br></br>
    

    <div className="min-h-screen p-10 flex flex-col items-center justify-center text-center bg-gray-100" style={{paddingTop:'80px'}}>
    <div className="w-full max-w-2xl">
    <h2 className="text-3xl font-bold mb-4">Watch My Another Project Demo</h2>
    <video
        style={{paddingTop:'30px'}}
          src={shortvideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-3xl rounded-xl shadow-xl"
        />
        <div className="mb-10">
          <h2 style={{ paddingTop: '40px' }} className="text-3xl font-bold mb-4">
            Visit My Website
          </h2>
        </div>
        <a
          href="https://coursee3.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-dark font-bold text-2xl hover:text-dark"
          style={{ textDecoration: 'none' }}
        >
          <span>🔗</span>Click here to go to my portfolio
        </a>
        </div>
        </div>
        <br></br>



    <div className="min-h-screen p-10 flex flex-col items-center justify-center text-center bg-gray-100" style={{paddingTop:'80px'}}>
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Watch My Another CRUD Frontened Project Demo</h2>
        <Image
  src={shortpic}
  alt="description"
  style={{ paddingTop: '30px' }}
  className="w-full max-w-3xl rounded-xl shadow-xl"
/>

        <div className="mb-10">
          <h2 style={{ paddingTop: '40px' }} className="text-3xl font-bold mb-4">
            Visit My Website
          </h2>
        </div>
        <a
          href="https://crudsup33.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-dark font-bold text-2xl hover:text-dark"
          style={{ textDecoration: 'none' }}
        >
          <span>🔗</span>Click here to go to my portfolio
        </a>
      </div>
    </div>
    </>
  );
};

export default ContactAndVideo;
