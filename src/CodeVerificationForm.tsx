import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const CodeVerificationForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const phone = searchParams.get('phone');

  if (!phone) {
    navigate('/signup');
  }

  const [formData, setFormData] = useState({
    code: '',
    phone: phone,
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

    try {
      const res = await fetch(
        'http://auth-env.eba-3ysgkqwg.us-east-1.elasticbeanstalk.com/auth/verify-code',
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
      localStorage.setItem('codeToken', data.token);
      setResponse(data);

      navigate('/signup');
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
      <h1>Code Verification</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: 4, fontWeight: 'bold' }}
          >
            Verification Code:
          </label>
          <input
            type="text"
            name="code"
            value={formData.code}
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
          {loading ? 'Verifying...' : 'Verify Code'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {response && <p style={{ color: 'green' }}>Verification successful!</p>}
      </form>
    </div>
  );
};
