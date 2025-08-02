import React, { useState } from 'react';

export default function AdminPanel() {
  const [users, setUsers] = useState([]);      // { phone, location }
  const [vehicles, setVehicles] = useState({}); // same shape as defaultVehicles

  // form state
  const [newPhone, setNewPhone] = useState('');
  const [newLoc, setNewLoc] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const addUser = e => {
    e.preventDefault();
    setUsers(u => [...u, { phone: newPhone, location: newLoc }]);
    setNewPhone('');
    setNewLoc('');
  };

  const addVehicle = e => {
    e.preventDefault();
    setVehicles(v => {
      const copy = { ...v };
      if (!copy[make]) copy[make] = {};
      if (!copy[make][model]) copy[make][model] = [];
      copy[make][model].push(Number(year));
      return copy;
    });
    setMake('');
    setModel('');
    setYear('');
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 space-y-6">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Manage Requesters</h2>
        <form onSubmit={addUser} className="space-y-2">
          <input
            placeholder="Phone"
            required
            value={newPhone}
            onChange={e => setNewPhone(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            placeholder="Location"
            required
            value={newLoc}
            onChange={e => setNewLoc(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button className="bg-blue-600 text-white py-1 px-3 rounded">Add</button>
        </form>
        <ul className="mt-2">
          {users.map((u, i) => (
            <li key={i}>{u.phone} → {u.location}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Manage Vehicles</h2>
        <form onSubmit={addVehicle} className="space-y-2">
          <input
            placeholder="Make"
            required
            value={make}
            onChange={e => setMake(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            placeholder="Model"
            required
            value={model}
            onChange={e => setModel(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Year"
            required
            value={year}
            onChange={e => setYear(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button className="bg-blue-600 text-white py-1 px-3 rounded">Add</button>
        </form>
        <pre className="mt-2 text-sm bg-gray-100 p-2 rounded">
          {JSON.stringify(vehicles, null, 2)}
        </pre>
      </div>
    </div>
);
}
