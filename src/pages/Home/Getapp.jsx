import google from "../../assets/images/google-play.png";
import apple from "../../assets/images/app-store.png";
import AddButton from "../../components/UI/AddButton";
const Getapp = () => {
  return (
    <div className="mt-6">
      <div className="h-[390px] flex justify-center items-center md:justify-end rounded-lg bg-[#FAFAFA] accordian-shadow px-4 sm:px-8 md:px-0 mx-6 sm:mx-20 md:mx-24 lg:mx-28 xl:mx-36">
        <div className="flex flex-col items-center justify-center text-center sm:text-left m-0 md:mr-20 lg:mr-32 w-full sm:w-fit">
          <div className="flex flex-col justify-center gap-2 sm:justify-start w-full">
            <h1 className="text-[28px] font-bold">Get the SaloTym app</h1>
            <p className="text-[14px]">
              We will send you a link, open it on your phone to download the app
            </p>
            <span className="flex space-x-2 ml-8 sm:ml-0 justify-self-start">
              <input type="checkbox" name="" id="" className="cursor-pointer" />
              <p className="text-[13px] font-bold font-montserrat">Phone</p>
            </span>
          </div>
          <div className="flex justify-between items-center my-3 pl-3 pr-1 sm:px-3 w-11/12 h-[40px] sm:h-[50px] border-2 rounded-3xl bg-white border-[#C7C7C7]">
            <input
              className="focus:outline-none bg-none text-sm sm:text-auto"
              placeholder="Email"
              type="email"
              name=""
              id=""
            />
            <AddButton className="!py-2 rounded-3xl text-center text-[11px] sm:text-[12px]">
              SHARE APP LINK
            </AddButton>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <a href="/" className="cursor-pointer"><img src={apple} alt="" /></a>
            <a href="/" className="cursor-pointer"><img src={google} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getapp;
