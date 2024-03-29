import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import AddButton from "../../components/UI/AddButton";

const ServiceSlider2 = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const itemIndex = items.findIndex((item) => item.id === props.data.id);
  const itemAmount = itemIndex >= 0 ? items[itemIndex].amount : 0;

  const addCartItemHandler = (item) => {
    dispatch(cartActions.addCartItem(item));
  };
  const removeCartItemHandler = (item) => {
    dispatch(cartActions.removeCartItem(item));
  };
  return (
    <div className="bg-white p-[14px] rounded-md border border-[#A3A3A3]">
      {/* <img src="" alt="" /> */}
      <div className="w-full h-[188px] bg-[#EFEFEF] rounded-md"></div>
      <p className="text-sm font-bold mt-2 text-center 2xl:text-left">{props.data.type}</p>
      <div className="flex flex-col justify-between gap-2 my-3 text-sm items-center px-0 sm:px-8 md:px-0 sm:flex-row md:flex-col">
        <div className="flex gap-2">
          <span className="font-bold">₹1,500</span>
          <span className="text-gray-600">
            <strike>₹3,500</strike>
          </span>
          <span className="flex gap-1 font-bold text-green-600">
            <span>Save</span>
            <span>₹2000</span>
          </span>
        </div>
        <AddButton className={"ml-4"}>
          {!itemAmount ? (
            <span
              onClick={() => addCartItemHandler(props.data)}
              className="inline-block cursor-pointer text-center w-full"
            >
              ADD TO CART
            </span>
          ) : (
            <div className="inline-flex justify-between items-center w-full cursor-default">
              <span
                className="text-md font-bold pl-3 pr-2 cursor-pointer"
                onClick={() => removeCartItemHandler(props.data)}
              >
                -
              </span>
              <span>{itemAmount}</span>
              <span
                className="text-md font-bold pr-3 pl-2 cursor-pointer"
                onClick={() => addCartItemHandler(props.data)}
              >
                +
              </span>
            </div>
          )}
        </AddButton>
      </div>
    </div>
  );
};

export default ServiceSlider2;
