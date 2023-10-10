import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";


const Gallery = () => {
    useEffect(() => {
        // Initialize AOS when the component mounts
        AOS.init({ once: false });
      }, []);
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-inherit text-5xl text-center font-roboto mb-4">
          Our <span className="text-5xl text-orange-500">Gallery</span>
        </h1>
        
      </div>
      <div className=" text-white">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full " src="https://i.ibb.co/8BGtm4p/g1.webp" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/ZN7SjF9/newlyweds-cutting-cake.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full " src="https://i.ibb.co/s2zwpTH/g2.webp" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/ZcZc7V6/young-joyful-friends-celebrating.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qfkq6F883p0pUtuMHG-lfVIlGpMZr4hF_A&usqp=CAU" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4qpDW3SvI95I8Lrp9MRlnnhjLk47b-hHfw&usqp=CAU" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/7vRspQD/sparkling-glassware-stands-long-table-prepared-wedding-di.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 row-start-2 row-span-2"
        >
          <img className="w-full" src="https://i.ibb.co/mFp6DLk/g3.jpg" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
