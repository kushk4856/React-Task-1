import Form from "../components/Form";
import GroupImg from "../assets/Group.png";

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 bg-[#F7F5F9] gap-12 px-6 md:px-24 md:py-20 py-8">
      {/* ----------hero-content------------- */}

      <div className=" hero_content md:col-span-2 md:row-span-2 flex flex-col gap-4">
        <h1 className="text-black text-lg md:text-4xl font-semibold font-['Poppins'] tracking-tight md:tracking-wide">
          Explore your <span className="text-sky-600 ">hobby</span> or{" "}
          <span className="text-[#8064A2]">passion</span>
        </h1>
        <p className=" text-xs  font-['Poppins'] leading-snug tracking-tight">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform.
        </p>
        <p className=" text-xs hidden sm:block font-['Poppins'] leading-snug tracking-tight">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
      </div>
      {/* ---------------form------------ */}
      <div className=" md:row-span-3 flex justify-center">
        <Form />
      </div>
      <div className=" md:col-span-2 flex items-center justify-center ">
        <img src={GroupImg} alt="" className="  object-cover bg-cover" />
      </div>
    </div>
  );
};

export default Hero;
