const AboutUs = () => {
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-inherit text-5xl text-center font-roboto mb-4">
          <span className=" text-orange-500">About</span> Us
        </h1>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="flex-1">
          <img
            src="https://i.ibb.co/sHYhmDf/about.jpg"
            alt="banner"
          />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title text-3xl pt-4 pb-8 text-center">We Will Give A Very Special Celebration For You</h2>
          <p>
            Our commitment to providing a very special celebration is both heartwarming and exciting. Itss a promise that goes beyond ordinary event planning, indicating a dedication to creating truly unique and memorable experiences for your clients. This personal touch is what sets your services apart, and its sure to leave a lasting impression on anyone who entrusts you with their special occasions.
          </p>
          <div className="card-actions justify-center">
            <button className="btn btn-info  rounded-lg bg-orange-500 text-white">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
