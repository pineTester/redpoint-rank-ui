import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    token: localStorage.getItem('codeToken'),
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [response, setResponse] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.token) {
      setError('No token found. Please log in first.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        'http://auth-env.eba-3ysgkqwg.us-east-1.elasticbeanstalk.com/auth/signup',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const data = await res.json();
      localStorage.setItem('token', data.token);
      setResponse(data);

      localStorage.removeItem('codeToken');
      navigate(`/rank`);
    } catch (err: any) {
      console.error(err);
      setError('Something went wrong while calling the API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: '0 auto',
        padding: 40,
        fontFamily: 'sans-serif',
      }}
    >
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        {['username', 'password'].map((field) => (
          <div key={field}>
            <label
              style={{ display: 'block', marginBottom: 4, fontWeight: 'bold' }}
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              type="text"
              name={field}
              value={(formData as any)[field]}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: 8,
                border: '1px solid #ccc',
                borderRadius: 4,
                fontSize: '16px',
                backgroundColor: 'white',
              }}
            />
          </div>
        ))}
        <button
          type="submit"
          style={{
            padding: 10,
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
          }}
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {response && <p style={{ color: 'green' }}>Success!</p>}
      </form>
    </div>
  );
};
