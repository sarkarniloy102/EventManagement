import { useLoaderData } from "react-router-dom";
import Service from "./Service";


const Services = () => {
    const services = useLoaderData();
    
  return (
    <div>
      <div>
        <div>
          <h1 className="text-inherit text-5xl text-center font-roboto">
            Our <span className="text-5xl text-orange-500">Services</span>
          </h1>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 auto-cols-fr">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
