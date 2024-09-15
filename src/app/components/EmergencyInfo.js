import React, { useState, useEffect } from "react";
import axios from "axios";
import useAppContext from "../sessionManager";

export default function EmergencyInfo() {
  const { hashID, setHashID } = useAppContext();
  const [formData, setFormData] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
    userAddress: "",
    userZipCode: "",
    userState: "",
    userCountry: "",
    userRelationship: "",
  });

  // Handle initially loading the form
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching emergency contact data...");
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/get-emergency-contacts/${hashID}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Emergency contact data: ", data);
        if (data) {
          setFormData({
            userName: data.userName || "",
            userPhone: data.userPhone || "",
            userEmail: data.userEmail || "",
            userAddress: data.userAddress || "",
            userZipCode: data.userZipCode || "",
            userState: data.userState || "",
            userCountry: data.userCountry || "",
            userRelationship: data.userRelationship || "",
          });
          setIsFormVisible(true); // Show the form if data exists
        }
      } catch (err) {
        console.error("Error fetching emergency contact data:", err);
      }
    };
    fetchData();
  }, []);

  // Update the emergency contact data
  const updateEmergencyContact = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/update-emergency-contact/${hashID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Emergency contact updated: ", data);
    } catch (err) {
      console.error("Error updating emergency contact:", err);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };
      console.log(updatedData); // Print the updated form data
      return updatedData;
    });
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contact Information</h2>
      
      <button
        onClick={toggleFormVisibility}
        className="mb-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-150 ease-in-out"
      >
        {isFormVisible ? "Cancel" : "Add Emergency Contact"}
      </button>

      {isFormVisible && (
        <form className="space-y-8">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleInputChange}
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="userPhone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="userPhone"
                id="userPhone"
                autoComplete="tel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleInputChange}
              />
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                autoComplete="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleInputChange}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="relationship" className="block text-sm font-medium text-gray-700">
                Relationship
              </label>
              <select
                id="relationship"
                name="relationship"
                autoComplete="relationship"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleInputChange}
              >
                <option>Partner/Spouse</option>
                <option>Parent/Guardian</option>
                <option>Sibling</option>
                <option>Friend</option>
                <option>Colleague</option>
              </select>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="userAddress" className="block text-sm font-medium text-gray-700">
                Street address
              </label>
              <input
                type="text"
                name="userAddress"
                id="userAddress"
                autoComplete="street-address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleInputChange}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="userCity" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="userCity"
                id="userCity"
                autoComplete="address-level2"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleInputChange}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="userState" className="block text-sm font-medium text-gray-700">
                State / Province
              </label>
              <input
                type="text"
                name="userState"
                id="userState"
                autoComplete="address-level1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleInputChange}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="userZipCode" className="block text-sm font-medium text-gray-700">
                ZIP / Postal code
              </label>
              <input
                type="text"
                name="userZipCode"
                id="userZipCode"
                autoComplete="postal-code"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleInputChange}
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="userCountry" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select
                id="userCountry"
                name="userCountry"
                autoComplete="country-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleInputChange}
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
