import PropTypes from 'prop-types';

function ExpiredTrainingsComponent({ data, checkDate }) {
  const checkDateTime = new Date(checkDate);
  const oneMonthLater = new Date(checkDateTime);
  oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

  const peopleWithExpiringTrainings = data.map(person => ({
    ...person,
    completions: person.completions.filter(completion => {
      const expirationDate = new Date(completion.expires);
      return expirationDate > checkDateTime && expirationDate <= oneMonthLater;
    })
  })).filter(person => person.completions.length > 0);

//   return (
//     <div className="bg-red-100 rounded-lg shadow-lg p-6 my-4">
//       <h2 className="text-xl font-semibold text-red-800 mb-4">People with Expired/Expiring Trainings</h2>
//       <ul className="list-disc pl-6">
//         {peopleWithExpiringTrainings.map(person => (
//           <li key={person.name} className="text-red-700 mb-2">
//             <span className="font-medium">{person.name}</span>: {person.completions.map(completion => `${completion.name} (${completion.expires})`).join(', ')}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
return (
    <div className="overflow-x-auto">
    <table className="min-w-full table-auto border-collapse bg-white shadow-md">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left">Person Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Expiring Trainings</th>
        </tr>
      </thead>
      <tbody>
        {peopleWithExpiringTrainings.map((person, index) => (
          <tr key={person.name} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}>
            <td className="border border-gray-300 px-4 py-2">{person.name}</td>
            <td className="border border-gray-300 px-4 py-2">
              {person.completions.map(completion => `${completion.name} (Expires: ${completion.expires})`).join(', ')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
}

ExpiredTrainingsComponent.propTypes = {
  data: PropTypes.array.isRequired,  // Define the expected type of 'data'
  checkDate: PropTypes.string.isRequired  // Define the expected type of 'checkDate'
};

export default ExpiredTrainingsComponent;
