import React from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";

const ModalSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [orderDetails, setorderDetails] = useState({
    fullname: "",
    address: "",
    mobile: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setorderDetails({...orderDetails, [e.target.name]:e.target.value});
    console.log(orderDetails)
  }

  const handleOrder = (e) => {
    e.preventDefault();
    if(!orderDetails.fullname || !orderDetails.address || !orderDetails.pincode || !orderDetails.mobile){
      return toast.error("All Fields are required");
    }
    else{
      toast.success("Order SuccessFul")
      onCloseModal();
    }
  }

  function onCloseModal() {
    setOpenModal(false);
    setorderDetails("");
  }
  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
      >
        CheckOut
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
          <div>
              <div className="mb-2 block">
                <Label  value="Your Full Name " />
              </div>
              <TextInput
              name="fullname"
                type="text"
                value={orderDetails.fullname}
                required
               onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Enter Full Address " />
              </div>
              <TextInput
              name="address"
                type="text"
                value={orderDetails.address}
                required
               onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your Picnode" />
              </div>
              <TextInput
              name="pincode"
                value={orderDetails.pincode}
               onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your Mobile Number" />
              </div>
              <TextInput
              name="mobile"
                
                value={orderDetails.mobile}
               onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <Button className="w-full" onClick={handleOrder}>Order Now</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSection;
