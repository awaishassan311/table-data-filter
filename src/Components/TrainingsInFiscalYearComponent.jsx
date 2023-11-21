import PropTypes from 'prop-types';

function TrainingsInFiscalYearComponent({ data, fiscalYear }) {
  const specifiedTrainings = ["Electrical Safety for Labs", "X-Ray Safety", "Laboratory Safety Training"];
  const startDate = new Date(`07/01/${fiscalYear - 1}`);
  const endDate = new Date(`06/30/${fiscalYear}`);

  const people = data.filter(person => 
    person.completions.some(completion => 
      specifiedTrainings.includes(completion.name) &&
      new Date(completion.timestamp) >= startDate &&
      new Date(completion.timestamp) <= endDate
    )
  );

//   return (
//     <div className="bg-blue-100 rounded-lg shadow-lg p-6 my-4">
//       <h2 className="text-xl font-semibold text-blue-800 mb-4">Trainings Completed in Fiscal Year {fiscalYear}</h2>
//       <ul className="list-disc pl-6">
//         {people.map(person => (
//           <li key={person.name} className="text-blue-700 mb-2">
//             <span className="font-medium">{person.name}</span>: {person.completions.filter(completion => specifiedTrainings.includes(completion.name)).map(completion => completion.name).join(', ')}
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
        <th className="border border-gray-300 px-4 py-2 text-left">Completed Trainings</th>
      </tr>
    </thead>
    <tbody>
      {people.map((person, index) => (
        <tr key={person.name} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}>
          <td className="border border-gray-300 px-4 py-2">{person.name}</td>
          <td className="border border-gray-300 px-4 py-2">
            {person.completions.filter(completion => specifiedTrainings.includes(completion.name)).map(completion => completion.name).join(', ')}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

TrainingsInFiscalYearComponent.propTypes = {
  data: PropTypes.array.isRequired, // Define the expected type of 'data'
  fiscalYear: PropTypes.number.isRequired // Define the expected type of 'fiscalYear'
};

export default TrainingsInFiscalYearComponent;
