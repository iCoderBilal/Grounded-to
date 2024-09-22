import React, { useState } from "react";
import Header from "../homepage/Components/Header";
import FinalCall from "../homepage/Components/FinalCall";
import Footer from "../homepage/Components/Footer";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const notify = () => toast.success("Successfully toasted!");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  let name, value;
  const dataUpdate = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, message } = userData;
    const res = fetch(
      "https://grounded-to-default-rtdb.firebaseio.com/userData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
        }),
      }
    );

    if (firstName && lastName && email && message) {
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        toast.success("Thank you! Your message has been received.");
      } else {
        // Handle error case
        toast.error("Failed to submit data. Please try again.");
      }
    } else {
      toast.error("Please Fill The Data");
    }
  };

  return (
    <>
      <Header />
      <Toaster /> {/* Render ToastContainer at the top */}
      <section>
        {/* Container */}
        <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-20">
          {/* Component */}
          <h2
            data-aos="zoom-out"
            className="text-center section-heading mb-8 md:mb-[30px] tracking-tighter font-Poppins text-3xl md:text-[6vw] text-[9vw] text-white font-semibold md:leading-[6vw] leading-[9vw]"
          >
            Have Any Questions?
          </h2>
          <p className="text-gray-300 mb-[20px] my-[20px] text-[18px] font-Poppins text-center">
            Don't hesitate to ask. We're here to help!
          </p>
          {/* Form */}
          <form
            name="wf-form-name"
            method="get"
            className="mx-auto mb-4 text-left sm:px-4 md:px-20 text-white mt-[70px]"
          >
            <div className="mb-4 grid w-full grid-cols-2 gap-6">
              <div>
                <label htmlFor="name-2" className=" font-medium font-Poppins">
                  First Name
                </label>
                <input
                  type="text"
                  className=" mt-2 bg-transparent mb-4 block h-9 w-full rounded-md border border-solid border-[#A0DA6E] px-3 py-6 text-sm text-white"
                  placeholder="William"
                  required
                  name="firstName"
                  onChange={dataUpdate}
                  value={userData.firstName}
                />
              </div>
              <div>
                <label
                  htmlFor="name-3"
                  className="mb-1 font-medium font-Poppins"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="mt-2 bg-transparent mb-4 block h-9 w-full rounded-md border border-solid border-[#A0DA6E] px-3 py-6 text-sm text-white"
                  placeholder="Jack"
                  required
                  name="lastName"
                  onChange={dataUpdate}
                  value={userData.lastName}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="field" className="mb-1 font-medium font-Poppins">
                Email
              </label>
              <input
                type="text"
                className="mt-2 bg-transparent mb-4 block h-9 w-full rounded-md border border-solid border-[#A0DA6E] px-3 py-6 text-sm text-white"
                placeholder="william@gmail.com"
                required
                name="email"
                onChange={dataUpdate}
                value={userData.email}
              />
            </div>
            <div className="mb-5 md:mb-6 lg:mb-8">
              <label htmlFor="field" className="mb-1 font-medium font-Poppins">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                maxLength="5000"
                name="message"
                onChange={dataUpdate}
                value={userData.message}
                className="mt-2 bg-transparent mb-2.5 block h-auto min-h-44 w-full rounded-md border border-solid border-[#A0DA6E] px-3 py-2 text-sm text-white"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                onClick={submitData}
                className="cursor-pointer bg-[#C0DC61] text-gray-700 font-Poppins hover:text-gray-300 dark:text-white hover:bg-[#1d1d1d] focus:ring-4 focus:ring-gray-300 font-medium rounded-[20px] text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 duration-300 ease-in-out transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <FinalCall />
      <Footer />
    </>
  );
};

export default Contact;
