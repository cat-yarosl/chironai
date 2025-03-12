import { useState, useEffect } from 'react';
import DataCard from './components/DataCard';

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/nasa/')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className='
      min-h-screen 
      bg-gray-900
      text-white
      flex items-center 
      justify-center 
      p-4
    '>
      {data ? 
      <DataCard 
        data={data}
      />
       : (
        <p className='text-gray-400'>Loading...</p>
      )}
    </div>
  );
}

export default App;