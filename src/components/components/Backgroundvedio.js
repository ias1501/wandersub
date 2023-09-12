// components/BackgroundVideo.js
import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute inset-0"
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Add other content or components on top of the video */}
    </div>
  );
};

export default BackgroundVideo;
