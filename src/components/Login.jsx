import React, { useState } from 'react';
import { useAuth } from './AuthContext';

export default function Login() {
  const [phone, setPhone] = useState('');
  const { login } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={e => { e.preventDefault(); login(phone); }}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-semibold mb-4">Technician Login</h2>
        <input
          type="text"
          placeholder="Phone number"
          required
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="border p-2 rounded w-full mb-3"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}
