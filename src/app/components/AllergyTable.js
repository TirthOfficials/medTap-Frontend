import { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import dotenv from 'dotenv';
import  useAppContext  from '../sessionManager';
dotenv.config();

const severityOptions = ['Mild', 'Moderate', 'Severe'];

export default function AllergyTable() {
  const { sessionID, setSessionID, user, setUser, hashID, setHashID } =
    useAppContext();

  const [newAllergy, setNewAllergy] = useState({
    allergen: '',
    severity: 'Mild',
    symptoms: [],
    treatment: '',
    diagnosedDate: '',
    notes: '',
  });
  
  const [allergies, setAllergies] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllergies = async () => {
      console.log("HashID:", hashID);
      setIsLoading(true);
      try {
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8080';
        const response = await fetch(`${serverUrl}/allergy-history/user/${hashID}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setAllergies(data);
      } catch (error) {
        console.error("Failed to fetch allergies:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllergies();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAllergy(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8080';
      const allergyWithHashID = { ...newAllergy, hashId: hashID };
      console.log('Sending request to:', `${serverUrl}/allergy-history/create`);
      console.log('Request body:', JSON.stringify(allergyWithHashID));

      const response = await fetch(`${serverUrl}/allergy-history/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(allergyWithHashID),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      setAllergies([...allergies, data]);
      setNewAllergy({
        allergen: '',
        severity: 'Mild',
        symptoms: [],
        treatment: '',
        diagnosedDate: '',
        notes: '',
      });

    } catch (error) {
      console.error('Error details:', error);
    } finally {
      setIsFormOpen(false);
    }
  };


  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setAllergies([...allergies, newAllergy]);
    setNewAllergy({
      allergen: '',
      severity: '',
      symptoms: '',
      treatment: '',
      diagnosedDate: '',
      notes: '',
    });
    setIsFormOpen(false);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Allergy Information</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all allergies including allergen, severity, symptoms, treatment, and diagnosis date.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={toggleForm}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isFormOpen ? 'Hide Form' : 'Add Allergy'}
          </button>
        </div>
      </div>
      
      {isFormOpen && (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="allergen" className="block text-sm font-medium leading-6 text-gray-900">
                Allergen
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="allergen"
                  id="allergen"
                  value={newAllergy.allergen}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="severity" className="block text-sm font-medium leading-6 text-gray-900">
                Severity
              </label>
              <div className="mt-2">
                <select
                  id="severity"
                  name="severity"
                  value={newAllergy.severity}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">Select severity</option>
                  {severityOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="symptoms" className="block text-sm font-medium leading-6 text-gray-900">
                Symptoms
              </label>
              <div className="mt-2">
                <textarea
                  id="symptoms"
                  name="symptoms"
                  rows={3}
                  value={newAllergy.symptoms}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="treatment" className="block text-sm font-medium leading-6 text-gray-900">
                Treatment
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="treatment"
                  id="treatment"
                  value={newAllergy.treatment}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="diagnosedDate" className="block text-sm font-medium leading-6 text-gray-900">
                Diagnosed Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="diagnosedDate"
                  id="diagnosedDate"
                  value={newAllergy.diagnosedDate}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="notes" className="block text-sm font-medium leading-6 text-gray-900">
                Related Notes
              </label>
              <div className="mt-2">
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={newAllergy.notes}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Add Allergy
            </button>
          </div>
        </form>
      )}

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Allergen</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Severity</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Symptoms</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Treatment</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Diagnosed Date</th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                {allergies.map((allergy, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{allergy.allergen}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{allergy.severity}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{allergy.symptoms}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{allergy.treatment}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{allergy.diagnosedDate}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {allergy.allergen}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
