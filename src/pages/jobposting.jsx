import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const experienceOptions = [
  { value: "junior", label: "Junior" },
  { value: "mid", label: "Mid-Level" },
  { value: "senior", label: "Senior" },
];

const JobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experience, setExperience] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [candidateInput, setCandidateInput] = useState("");
  const [endDate, setEndDate] = useState(null);

  const handleAddCandidate = (e) => {
    if (e.key === "Enter" && candidateInput.trim()) {
      setCandidates([...candidates, candidateInput.trim()]);
      setCandidateInput("");
      e.preventDefault();
    }
  };

  const handleRemoveCandidate = (index) => {
    setCandidates(candidates.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      jobTitle,
      jobDescription,
      experience,
      candidates,
      endDate,
    });
  };

  return (
    <div className="min-h-screen bg-white p-12 flex">
      {/* Form Section */}
      <div className="w-full max-w-xl ml-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Enter Job Title"
              className="mt-1 w-full p-2 border rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Description
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Enter Job Description"
              className="mt-1 w-full p-2 border rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Experience Level
            </label>
            <Select
              options={experienceOptions}
              value={experience}
              onChange={setExperience}
              placeholder="Select Experience Level"
              className="mt-1"
              theme={(theme) => ({
                ...theme,
                borderRadius: 6,
                colors: {
                  ...theme.colors,
                  primary25: "#bfdbfe",
                  primary: "#3b82f6",
                },
              })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Add Candidate
            </label>
            <div className="mt-1 flex flex-wrap gap-2">
              {candidates.map((candidate, index) => (
                <div
                  key={index}
                  className="flex items-center px-3 py-1 bg-gray-200 rounded-full"
                >
                  <span>{candidate}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveCandidate(index)}
                    className="ml-2 text-red-500"
                  >
                    &times;
                  </button>
                </div>
              ))}
              <input
                type="text"
                value={candidateInput}
                onChange={(e) => setCandidateInput(e.target.value)}
                onKeyDown={handleAddCandidate}
                placeholder="Add candidate email"
                className="flex-1 p-2 border rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="Select a Date"
              className="mt-1 w-full p-2 border rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
