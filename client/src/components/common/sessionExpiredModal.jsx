import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
export default function SessionExpiredModal({show, onClose}) {
  console.log(show,onClose)
  const navigate = useNavigate();

  const [size, setSize] = React.useState(null);

  const confirm = (value) => {
    onClose();
    navigate("/login");
    setSize(value);
  };

  return (
    <>
   

      <Dialog open={show} size="xs" handler={onClose}>
        <DialogHeader>Login In</DialogHeader>
        <DialogBody divider>Session expired login In again</DialogBody>
        <DialogFooter>
          {/* <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button> */}
          <Button variant="gradient" color="green" onClick={confirm}>
            <span>LOGIN</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
