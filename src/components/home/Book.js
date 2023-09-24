import Link from 'next/link'
import React, { useRef, useState } from "react";




export default function App() {


  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const mobileRef = useRef(null);
  const descriptionRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
  
    setSubmitted(true);
    // Additional form submission logic if needed
    (setSubmitted(true) &  alert("Thank you for contacting!"))
  };
  
  function Submit(e) {
    e.preventDefault();



    const formEle = document.querySelector("form");
    const name = nameRef?.current?.value;
    const mobile = mobileRef?.current?.value;
    const mail = mailRef?.current?.value;
    const description = descriptionRef?.current?.value;

    console.log(name, mobile, mail, description)

    // pushing data to google sheet

    const formDatab = new FormData(formEle);
    console.log(formDatab);

    setLoading(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbzIK8u7fc8Fri6RQ5XYnmKH0kN6Or3x0La_RWzucuRb6r0nlCGxh8w5hfqNqiVsf9SC/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        console.log(data);
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
      });

  }
  return (
    <>

      <div className=" w-[100vw] bg-gray-700 relative  py-[100px] md:py-[100px]" id="book">
      <div className=" bg-gray-700 text-center font-serif">
              <h1 className="text-center text-4xl md:text-6xl text-white bg-gray-700">Book Your Ticket</h1>
              <h2 className="text-center text-sm md:text-2xl my-5 md:my-10 text-white bg-gray-700">
                Book your ticket Here on the price of Railway station. And win amazing prizes!!
              </h2>
            </div>
        <div className="w-[100%]  flex-col flex md:flex-row items-center bg-gray-700">
          
          <div className=" w-[70%] md:w-[50%]  ml-[10px] md:ml-[100px] md:mr-[-50px] bg-gray-700">
            <img className=" w-[220%] md:w-[90%]  md:h-[500%] ml-50 my-10" src="https://i.pinimg.com/564x/68/b1/a3/68b1a3ed75001d1c92da4eb8a0e7545e.jpg" />

          </div>

          <div className="w-[90%] md:mr-[60px] bg-gray-700">
            <form className=" flex  flex-col bg-gray-700" onSubmit={(e) => Submit(e)}>
              <input placeholder="Your Name"
                ref={nameRef}
                required={true} name="Name" type="text" className=" w-[100%] md:w-[80%] h-[50px] mx-auto border border-black rounded p-2" />
              <input placeholder="Your Email" name="Email" type="text"
                ref={mailRef}
                required={true}
                className="  w-[100%]  md:w-[80%]  h-[50px] mx-auto border border-black mt-10 rounded p-2" />
              <input placeholder="9876543210" name="Message" type="text"
                ref={mobileRef}
                required={true}

                className="   w-[100%]   md:w-[80%] h-[50px] mx-auto border border-black mt-10 rounded p-2" />
              <textarea placeholder="Your Message" name="Message"
                ref={descriptionRef}
                required={true} type="text" className="  w-[100%] md:w-[80%]  h-[70px] mx-auto border border-black mt-10 rounded p-2" />
              <input name="Name" type="submit" className="  w-[100%]  md:w-[80%] h-[70px] mx-auto border border-black bg-indigo-500 hover:bg-blue-700 mt-10 rounded"
                loading={loading} />
            </form>
          </div>
        </div>
      </div>
    </>

  )
}


