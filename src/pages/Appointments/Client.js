import { useState } from "react";
import Pic from "../../assets/images/pic.png";
import { ReactComponent as Timer } from "../../assets/images/timer.svg";
import Card from "../../components/UI/Card";
import ClientDetails from "./ClientDetails";

const Client = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const onClickHandler = () => {
    setShowDetails(true);
  };
  return (
    <Card>
      <div className="align-middle items-center text-center h-[70px] w-[70px] rounded-full overflow-hidden">
        <img src={Pic} alt="Client" className="" />
      </div>
      <div className="info">
        <h4 className="font-medium">{props.name}</h4>
        <h5 className="font-bold">
          <span className="mr-1">₹</span>
          {props.price}
        </h5>
        <div className="flex gap-4 mt-4 text-sm font-medium">
          <div className="flex gap-2 items-center">
            <Timer />
            <span>{props.date}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Timer />
            <span>{props.time}</span>
          </div>
        </div>
      </div>
      <i
        className="absolute top-2 right-2 p-1 fas fa-chevron-right cursor-pointer"
        onClick={() => onClickHandler()}
      ></i>
      {showDetails && <ClientDetails setShowDetail={setShowDetails} />}
    </Card>
  );
};
export default Client;
