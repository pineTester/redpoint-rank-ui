import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    redpoint: ''
  });

  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResponse(null);
    try {
      const res = await fetch('http://redpoint-env.eba-waypeqif.us-east-1.elasticbeanstalk.com/rank', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      console.error(err);
      setError('Something went wrong while calling the API.');
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 40, fontFamily: 'sans-serif' }}>
      <h1>🧗 Redpoint Rank</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        {['age (years)', 'height (inches)', 'weight (lbs)', 'redpoint (v?)'].map((field) => (
          <div key={field}>
            <label style={{ display: 'block', marginBottom: 4, fontWeight: 'bold' }}>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              type="text"
              name={field}
              value={(formData as any)[field]}
              onChange={handleChange}
              style={{ width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4, fontSize: '16px' }}
            />
          </div>
        ))}
        <button type="submit" style={{ padding: 10, backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: 4 }}>
          Submit
        </button>
      </form>

      {error && (
        <div style={{ marginTop: 20, color: 'red' }}>
          <strong>{error}</strong>
        </div>
      )}

      {response && (
        <div style={{ marginTop: 30, padding: 20, border: '1px solid #ddd', borderRadius: 8, backgroundColor: '#f9f9f9' }}>
          <h3>📊 Rank Analysis</h3>
          <p><strong>Rank:</strong> {response.rank}</p>
          <p><strong>Score:</strong> {response.score}</p>
          <p><strong>Analysis:</strong> {response.analysis}</p>
        </div>
      )}
    </div>
  );
}

export default App;
