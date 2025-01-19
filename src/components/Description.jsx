import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div
      className="flex flex-col items-center justify-center 
    my-24 p-6 md:px-28"
    >
      <h1
        className="text-3xl sm:text-4xl font-semibold
      mb-2 "
      >
        Generate AI Images
      </h1>
      <p className="text-lg text-stone-500 mb-8">
        Turn your text into stunning visuals with our AI-powered text-to-image
        generator.
      </p>

      <div className="flex flex-col gap-4 md:gap-14 md:flex-row items-center">
        <img
          src={assets.samp1}
          alt=""
          className="w-80 xl:w-96 rounded-lg"
        />
        <div >
          <h2 className="text-3xl font-medium mb-4 max-w-lg">Introducing AI Powered Image Generator</h2>
          <p className="text-gray-600 mb-4">
            Welcome to ImageCraft, the ultimate platform for transforming your
            imagination into stunning visuals. Simply describe your vision, and
            watch as our advanced AI brings it to life with breathtaking
            accuracy. Perfect for artists, creators, and dreamers—explore
            endless possibilities and unleash your creativity today!
          </p>
          <p className="text-gray-600">
            To generate stunning images, simply describe your idea in the text
            box, choose your preferred art style or theme, and click "Generate."
            Our AI will bring your vision to life in seconds. Preview the
            result, make adjustments if needed, and download or share your
            masterpiece effortlessly. It’s creativity made simple!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
