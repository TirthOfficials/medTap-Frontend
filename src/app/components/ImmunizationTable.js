import useAppContext from "../sessionManager";
import { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { hashId } from "../hash";


export default function ImmunizationTable() {
	const { sessionID, setSessionID, user, 
    setUser, setHashID } = useAppContext();
	const [newImmunization, setNewImmunization] = useState({
		vaccineName: "",
		doseNumber: "",
		dateAdministered: "",
		provider: "",
		notes: "",
	});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [immunizations, setImmunizations] = useState([]);
	const [isFormVisible, setIsFormVisible] = useState(false);
  const [hash, setHash] = useState(JSON.stringify(hashId))

	// Fetch immunizations from the backend
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/immune-records/get-immunizations/${hashId}`
				);
        console.log(response)
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setImmunizations(data);
				setIsLoading(false);
			} catch (err) {
				setError(err.message);
				setIsLoading(false);
			}
		};
		fetchData();
	}, [hashId]);

	// Update immunization
	const updateImmunization = async (immunization) => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/immune-records/update-immunization/${immunization._id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(immunization),
				}
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			setImmunizations(data);
		} catch (err) {
			setError(err.message);
		}
	};

	// Handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewImmunization((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		
    try {
      const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8080';
      const immunizationWithHashID = { ...newImmunization, hashId: hashId };
      console.log('Sending request to:', `${serverUrl}/immune-records/create/`);
      console.log('Request body:', JSON.stringify(immunizationWithHashID));

			const response = await fetch(`${serverUrl}/immune-records/create`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(immunizationWithHashID),
				}
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			setImmunizations([...immunizations, data]);
			setIsFormVisible(false);
		} catch (err) {
			setError(err.message);
		}
	};

	// Toggle visibility
	const toggleFormVisibility = () => {
		setIsFormVisible((prevVisibility) => !prevVisibility);
	};

	return (
		<div className="px-4 sm:px-6 lg:px-8">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-base font-semibold leading-6 text-gray-900">
						Immunizations
					</h1>
				</div>
				<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
					<button
						type="button"
						onClick={toggleFormVisibility}
						className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						{isFormVisible ? "Hide Form" : "Add Immunization"}
					</button>
				</div>
			</div>
			{isFormVisible && (
				<form onSubmit={handleSubmit} className="mt-8 space-y-6">
					<div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label
								htmlFor="vaccineName"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Vaccine
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="vaccineName"
									id="vaccineName"
									value={newImmunization.vaccineName}
									onChange={handleInputChange}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="doseNumber"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Dose
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="doseNumber"
									id="doseNumber"
									value={newImmunization.doseNumber}
									onChange={handleInputChange}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="dateAdministered"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Date
							</label>
							<div className="mt-2">
								<input
									type="date"
									name="dateAdministered"
									id="dateAdministered"
									value={newImmunization.date}
									onChange={handleInputChange}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="provider"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Provider
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="provider"
									id="provider"
									value={newImmunization.provider}
									onChange={handleInputChange}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-6">
							<label
								htmlFor="notes"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Notes
							</label>
							<div className="mt-2">
								<textarea
									id="notes"
									name="notes"
									rows={3}
									value={newImmunization.notes}
									onChange={handleInputChange}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>

					<div className="mt-6 flex items-center justify-end gap-x-6">
						<button
							type="button"
							onClick={toggleFormVisibility}
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Save
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
										<th
											scope="col"
											className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
										>
											Vaccine
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>
											Dose
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>
											Date
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>
											Provider
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>
											Notes
										</th>
										<th
											scope="col"
											className="relative py-3.5 pl-3 pr-4 sm:pr-6"
										>
											<span className="sr-only">Edit</span>
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 bg-white">
									{immunizations.map((immunization) => (
										<tr key={immunization._id}>
											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
												{immunization.vaccineName}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{immunization.doseNumber}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{immunization.dateAdministered}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{immunization.provider}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{immunization.notes}
											</td>
											<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
												<a
													href="#"
													className="text-indigo-600 hover:text-indigo-900"
													onClick={() => {
														// Implement edit functionality
													}}
												>
													Edit
													<span className="sr-only">
														, {immunization.vaccineName}
													</span>
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
