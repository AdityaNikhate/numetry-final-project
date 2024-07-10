import React from "react";
import Options from "./Options";

const Hero = () => {
  return (
    <div className="px-10 py-5">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item h-[60vh] w-full">
          <img
            src="https://static-cse.canva.com/blob/566484/modernresumes.179ab17d.jpg"
            className="w-full h-full"
          />
        </div>
        <div id="item2" className="carousel-item h-[60vh] w-full">
          <img
            src="https://blogimage.vantagelens.com/2023/05/Chick-Fil-A-Cover-Letter.png"
            className="w-full h-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full h-[60vh]">
          <img
            src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2024/03/11134243/15-Ways-to-Get-Job-Experience-for-Your-Resume.jpg"
            className="w-full h-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full h-[60vh]">
          <img
            src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2024/03/04155207/How-to-Land-the-Job-When-You-Dont-Have-the-Experience-A-Jobseekers-Guide-1024x512.jpg"
            className="w-full h-full"
          />
        </div>
      </div>

      <Options/>
    </div>
  );
};

export default Hero;
