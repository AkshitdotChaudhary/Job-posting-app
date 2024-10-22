import React from "react";
import SignUpForm from "../components/signup";

const Loginpage = () => {
  return (
    <>
      <div className="flex items-center justify-evenly">
        <div className="max-w-96">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>
        <SignUpForm />
      </div>
    </>
  );
};

export default Loginpage;
