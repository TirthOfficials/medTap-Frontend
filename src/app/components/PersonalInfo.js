import React, { useState, useEffect } from "react";

export default function PersonalInfo({ hashID }) {
  const [formData, setFormData] = useState({
    _id: "",
    userName: "",
    userPhone: "",
    userEmail: "",
    userInsurance: "",
    userMRN: "",
    userHeight: "",
    userWeight: "",
    userGender: "",
    userAddress: "",
    userZipCode: "",
    userState: "",
    userCountry: "",
    userCity: "",
  });

  const [error, setError] = useState(null); // Added error state

  // Handle initially loading the form
  useEffect(() => {
    if (hashID) {
      getPersonalByHash();
    }
  }, [hashID]);

  const getPersonalByHash = async () => {
    try {
      const response = await fetch(
        `https://medtap-backend.onrender.com/user-info/hash/${hashID}`,
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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(null);
    console.log(formData)
    try {
      const response = await fetch(
        `https://medtap-backend.onrender.com/user-info/update/${formData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      console.log(result);
      setFormData(result); // Update formData with the response data
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-3">
              <label
                htmlFor="userName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  value={formData.userName || ""} // Ensure controlled input
                  autoComplete="given-name"
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="userGender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="userGender"
                  name="userGender"
                  onChange={handleInputChange}
                  value={formData.userGender || ""} // Ensure controlled input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">Select Gender</option>
                  <option>He/Him</option>
                  <option>She/Her</option>
                  <option>They/Them</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Repeat similar structure for other fields */}

            <div className="sm:col-span-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="userEmail"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="userEmail"
                      name="userEmail"
                      type="email"
                      autoComplete="email"
                      value={formData.userEmail || ""} // Ensure controlled input
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="userPhone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="userPhone"
                      name="userPhone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.userPhone || ""} // Ensure controlled input
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="userHeight"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Height
                  </label>
                  <div className="mt-2">
                    <input
                      id="userHeight"
                      name="userHeight"
                      type="text"
                      value={formData.userHeight || ""} // Ensure controlled input
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="userWeight"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Weight
                  </label>
                  <div className="mt-2">
                    <input
                      id="userWeight"
                      name="userWeight"
                      type="text"
                      value={formData.userWeight || ""} // Ensure controlled input
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="userInsurance"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Insurance Provider
                  </label>
                  <div className="mt-2">
                    <input
                      id="userInsurance"
                      name="userInsurance"
                      type="text"
                      value={formData.userInsurance || ""} // Ensure controlled input
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="userMRN"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Medical Record Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="userMRN"
                      name="userMRN"
                      type="text"
                      value={formData.userMRN || ""} // Ensure controlled input
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="userAddress"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street Address
              </label>
              <div className="mt-2">
                <input
                  id="userAddress"
                  name="userAddress"
                  type="text"
                  value={formData.userAddress || ""} // Ensure controlled input
                  autoComplete="street-address"
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="userCity"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  id="userCity"
                  name="userCity"
                  type="text"
                  value={formData.userCity || ""} // Ensure controlled input
                  autoComplete="address-level2"
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="userState"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  id="userState"
                  name="userState"
                  type="text"
                  value={formData.userState || ""} // Ensure controlled input
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="userZipCode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal Code
              </label>
              <div className="mt-2">
                <input
                  id="userZipCode"
                  name="userZipCode"
                  type="text"
                  autoComplete="postal-code"
                  value={formData.userZipCode || ""} // Ensure controlled input
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="userCountry"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="userCountry"
                  name="userCountry"
                  autoComplete="country-name"
                  onChange={handleInputChange}
                  value={formData.userCountry || ""} // Ensure controlled input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">Select Country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>

      {error && (
        <div className="mt-4 text-red-600">
          <p>{error}</p>
        </div>
      )}
    </form>
  );
}


