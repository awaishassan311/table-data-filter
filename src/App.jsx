import { useState, useEffect } from 'react';
import TrainingCountComponent from './Components/TrainingCountComponent';
import TrainingsInFiscalYearComponent from './Components/TrainingsInFiscalYearComponent';
import ExpiredTrainingsComponent from './Components/ExpiredTrainingsComponent';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/trainings.txt')
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading JSON data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
             <div className="text-xl font-semibold">Loading...</div>
           </div>;
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Training Dashboard</h1>
      </header>
      <main>
        <TrainingCountComponent data={data} />
        <TrainingsInFiscalYearComponent data={data} fiscalYear={2024} />
        <ExpiredTrainingsComponent data={data} checkDate="2023-10-01" />
      </main>
    </div>
  );
}

export default App;
