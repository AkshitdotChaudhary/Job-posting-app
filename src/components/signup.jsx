import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  IoPersonSharp,
  IoCall,
  IoBusinessSharp,
  IoMailSharp,
  IoPeopleSharp,
  IoCheckmarkCircle,
} from "react-icons/io5"; // import icons

const SignUpForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    companyName: "",
    companyEmail: "",
    employeeSize: "",
  });

  // State to track if the form is submitted (for OTP fields)
  const [submitted, setSubmitted] = useState(false);

  // State to hold OTP values for verification
  const [otpData, setOtpData] = useState({
    emailOtp: "",
    phoneOtp: "",
  });

  // Verification states
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleOtpChange = (e) => {
    const { id, value } = e.target;
    setOtpData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Switch to OTP state
    console.log("Form data:", formData);
  };

  const handleVerifyPhone = () => {
    if (otpData.phoneOtp.trim() === "") {
      toast.error("Please enter a valid email OTP");
      return;
    }
    // Simulate phone verification
    setMobileVerified(true);
  };

  const handleVerifyEmail = () => {
    if (otpData.emailOtp.trim() === "") {
      toast.error("Please enter a valid email OTP");
      return;
    }
    // Simulate email verification
    setEmailVerified(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full border border-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <p className="text-center text-gray-400 mb-6">
          Lorem Ipsum is simply dummy text
        </p>

        <form onSubmit={handleSubmit}>
          {!submitted ? (
            <>
              {/* Name and Company Name fields */}
              <InputField
                icon={<IoPersonSharp />}
                id="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />

              <InputField
                icon={<IoBusinessSharp />}
                id="companyName"
                type="text"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
              />

              <InputField
                icon={<IoCall />}
                id="phone"
                type="tel"
                placeholder="Phone no."
                value={formData.phone}
                onChange={handleInputChange}
              />

              <InputField
                icon={<IoMailSharp />}
                id="companyEmail"
                type="email"
                placeholder="Company Email"
                value={formData.companyEmail}
                onChange={handleInputChange}
              />

              <InputField
                icon={<IoPeopleSharp />}
                id="employeeSize"
                type="number"
                placeholder="Employee Size"
                value={formData.employeeSize}
                onChange={handleInputChange}
              />

              <p className="text-center text-gray-500 text-sm mt-4  ">
                By clicking on proceed you will accept our{" "}
                <span>
                  <a href="#" className="text-blue-500">
                    Terms & Conditions
                  </a>
                </span>
              </p>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200 mt-4"
              >
                Proceed
              </button>
            </>
          ) : (
            <>
              {/* OTP Input for Email */}
              <InputField
                icon={<IoMailSharp />}
                id="emailOtp"
                type="text"
                placeholder="Email OTP"
                value={otpData.emailOtp}
                onChange={handleOtpChange}
              />
              {emailVerified ? (
                <SuccessMark />
              ) : (
                <VerificationButton
                  label="Verify"
                  onClick={handleVerifyEmail}
                />
              )}

              {/* OTP Input for Phone */}
              <InputField
                icon={<IoCall />}
                id="phoneOtp"
                type="text"
                placeholder="Mobile OTP"
                value={otpData.phoneOtp}
                onChange={handleOtpChange}
              />
              {mobileVerified ? (
                <SuccessMark />
              ) : (
                <VerificationButton
                  label="Verify"
                  onClick={handleVerifyPhone}
                />
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
};

// Input Field component with Icon support
const InputField = ({ id, type, placeholder, value, onChange, icon }) => (
  <div className="relative mb-4">
    {icon && <div className="absolute left-3 top-4 text-gray-500">{icon}</div>}
    <input
      required
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
        ${icon ? "pl-10" : "pl-4"}`} // Add left padding if icon is present
    />
  </div>
);

// Verification Button component
const VerificationButton = ({ label, onClick }) => (
  <div className="relative mb-4">
    <button
      onClick={onClick}
      className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
    >
      {label}
    </button>
  </div>
);

// Success mark component
const SuccessMark = () => (
  <div
    className="relative flex items-center justify-end"
    style={{ top: "-3rem", right: "0.8rem" }}
  >
    <IoCheckmarkCircle className="text-green-500 text-2xl " />
  </div>
);

export default SignUpForm;
