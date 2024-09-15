import React, { useState, useEffect } from "react";
import useAppContext from "../sessionManager";
import { hashId } from "../hash";



export default function EmergencyInfo() {
  const { 
    sessionID, setSessionID, user, setUser, hashID, setHashID 
  } = useAppContext();
  const [formData, setFormData] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
    userAddress: "",
    userZipCode: "",
    userState: "",
    userCountry: "",
    relationship: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };


 // Handle initially loading the form
 useEffect(() => {
  const fetchData = async () => {

    try {
      const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8080';
      console.log("Fetching emergency contact data...");
      const response = await fetch(`${serverUrl}/emergency-contact/get-emergency-contacts/${hashId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Emergency contact data: ", data);
      if (data) {
        setFormData({
          userName: data[0].userName || "",
          userPhone: data[0].userPhone || "",
          userEmail: data[0].userEmail || "",
          userAddress: data[0].userAddress || "",
          userZipCode: data[0].userZipCode || "",
          userState: data[0].userState || "",
          userCountry: data[0].userCountry || "",
          relationship: data[0].userRelationship || "",
        });
        setIsFormVisible(false); // Show the form if data exists
      }
    } catch (err) {
      console.error("Error fetching emergency contact data:", err);
    }
  };
  fetchData();
}, []);

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8080';
    const emergencyWithHashID = { ...formData, hashId: hashId };
    console.log("Sending request to:", `${serverUrl}/emergency-contact/create-emergency-contact`);
    console.log("Request body:", JSON.stringify(emergencyWithHashID));
    const response = await fetch(`${serverUrl}/emergency-contact/create-emergency-contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emergencyWithHashID),
    });

    if (!response.ok) throw new Error("Network response was not ok");
    const result = await response.json();
    setFormData(result);
  } catch (error) {
    console.error("Error details:", error);
  }
};

  const getEmergencyByHash = async () => {
    try {
      const response = await fetch(
        `https://medtap-backend.onrender.com/user-info/hash/${hashId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      setFormData(result);
    } catch (error) {
      setError(error.message);
    }
  };


  // Update the emergency contact data
  const updateEmergencyContact = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/update-emergency-contact/${hashId}`, {
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

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Emergency Contact Information</h1>
          <p className="mt-2 text-sm text-gray-700">
            Details of your emergency contact person including name, relationship, and contact information.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={toggleFormVisibility}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isFormVisible ? 'Hide Form' : 'Add Emergency Contact'}
          </button>
        </div>
      </div>

      {formData && !isFormVisible && (
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Relationship</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Phone</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Address</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{formData.userName}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{formData.relationship}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{formData.userPhone}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{formData.userEmail}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {`${formData.userAddress}, ${formData.userCity}, ${formData.userState} ${formData.userZipCode}, ${formData.userCountry}`}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                value={formData.userName || ''}
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
                value={formData.userPhone || ''}
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
                value={formData.userEmail || ''}
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
                value={formData.relationship || ''}
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
                value={formData.userAddress || ''}
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
                value={formData.userCity || ''}
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
                value={formData.userState || ''}
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
                value={formData.userZipCode || ''}
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
                value={formData.userCountry || 'United States'}
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
