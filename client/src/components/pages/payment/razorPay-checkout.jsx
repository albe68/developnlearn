import React, { useState, useEffect } from "react";
import { razorPayment } from "../../../api/endpoints/payment/payment";
import { enrollStudent } from "../../../api/endpoints/payment/payment";
import { Button } from "@material-tailwind/react";
// import COMMON_CONSTANTS from "../../../constants/common";
import { toast } from "react-toastify";
import { selectIsloggedIn } from "../../../redux/reducers/authSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import SessionExpiredModal from "../../common/sessionExpiredModal";
const handlePay = async (courseId, price) => {
  const response_create = await razorPayment(price); //create razor api
  const response = response_create.razorpay_payment_id; // response of oreder object from server
  const options = {
    key: response_create.data.rzp_id,
    name: "developnearn",
    description: "Some Description",
    order_id: response_create.data.order.id,
    /**
     *
     * @param {*razorpay_order_id,razorpay_payment_id,razorpay_signature} res
     */
    handler: async (res) => {
      try {
        const currency = response_create.data.order.currency;
        const amount = response_create.data.order.amount;
        const payment_method = "visa";
        const source = {
          currency,
          amount,
          payment_method,
        };

        const value = Object.assign(res, source);
        try {
          await enrollStudent(courseId, value);
        } catch (err) {
          console.error(err, "should show error");

          toast.error("You have already been enrolled", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
        //handler can be used
        //capture can be manulaly done but no need since it is automtated in
        //order object
      } catch (err) {
        console.error(err);

        toast.error("Something went wrong", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    },
    theme: {
      color: "#686CFD",
    },
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};

export default function RazorpayButton({ courseId, coursePrice, disabled }) {
  const [showSessionExpiredModal, setshowSessionExpiredModal] = useState(false);

  const handlecloseexpired = () => {
    setshowSessionExpiredModal(false);
  };
  useEffect(() => {
    const handleSessionexpires = () => {
      setshowSessionExpiredModal(true);
    };
    window.addEventListener("sessionExpired", handleSessionexpires);
    return () => {
      window.removeEventListener("sessionExpired", handleSessionexpires);
    };
  }, []);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsloggedIn);
  const handleClick = () => {
    if (!isLoggedIn) {
      console.log("first");
      navigate('/login')
      toast('Login to watch course ', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      // {
      //   showSessionExpiredModal && (
      //     <SessionExpiredModal
      //       show={showSessionExpiredModal}
      //       onClose={handlecloseexpired}
      //     />
      //   );
      // }
    } else {
      try {
        handlePay(courseId, coursePrice);
      } catch (err) {
        console.log(err, "show the toast");
        toast.error("Something went wrong", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  };
  return (
    <div className="flex justify-center pb-3">
      <Button
        size="sm"
        className="w-24 flex items-center justify-center "
        ripple={true}
        onClick={handleClick}
        disabled={disabled}
      >
        Start Watching
      </Button>
    </div>
  );
}
