import PropTypes from 'prop-types';

function TrainingCountComponent({ data }) {
  const trainingCounts = data.reduce((acc, person) => {
    person.completions.forEach(completion => {
      acc[completion.name] = (acc[completion.name] || 0) + 1;
    });
    return acc;
  }, {});

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 my-4">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Training Completion Counts</h2>
//       <ul className="list-disc pl-6">
//         {Object.entries(trainingCounts).map(([training, count]) => (
//           <li key={training} className="text-gray-700 text-lg mb-2">
//             <span className="font-medium">{training}</span>: {count} completions
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
        <th className="border border-gray-300 px-4 py-2 text-left">Training Name</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Count</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(trainingCounts).map(([training, count], index) => (
        <tr key={training} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}>
          <td className="border border-gray-300 px-4 py-2">{training}</td>
          <td className="border border-gray-300 px-4 py-2">{count}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

TrainingCountComponent.propTypes = {
  data: PropTypes.array.isRequired // Define the expected type of 'data'
};

export default TrainingCountComponent;
