import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/nasa/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-4">
      {data ? (
        <div>
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p>{data.description}</p>
          <img src={data.image_url} alt={data.title} className="mt-4 rounded-lg" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App
