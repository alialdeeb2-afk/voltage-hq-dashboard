import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

// initial vehicles data; AdminPanel will modify this object in-memory
const defaultVehicles = {
  Toyota: { Corolla: [2020, 2021, 2022], Camry: [2019, 2020, 2021] },
  Ford: { Focus: [2018, 2019], F150: [2020, 2021, 2022] },
};

export default function RequestForm() {
  const { user } = useAuth();
  const [vehicles, setVehicles] = useState(defaultVehicles);
  const [make, setMake] = useState('');
  const [modelList, setModelList] = useState([]);
  const [model, setModel] = useState('');
  const [years, setYears] = useState([]);
  const [year, setYear] = useState('');
  const [vin, setVin] = useState('');
  const [part, setPart] = useState('');
  const [qty, setQty] = useState(1);
  const [condition, setCondition] = useState('OE');

  useEffect(() => {
    setModelList(make ? Object.keys(vehicles[make]) : []);
    setModel('');
    setYears([]);
    setYear('');
  }, [make, vehicles]);

  useEffect(() => {
    setYears(make && model ? vehicles[make][model] : []);
    setYear('');
  }, [model, make, vehicles]);

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      phone: user.phone,
      vin: vin.length === 17 ? vin : null,
      make: vin.length === 17 ? null : make,
      model: vin.length === 17 ? null : model,
      year: vin.length === 17 ? null : year,
      part,
      qty,
      condition
    };
    alert(JSON.stringify(payload, null, 2));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-3"
      >
        <h2 className="text-xl font-semibold">New Spare Part Request</h2>

        <input
          type="text"
          placeholder="VIN (17 chars) or leave blank"
          maxLength={17}
          value={vin}
          onChange={e => setVin(e.target.value)}
          className="border p-2 rounded w-full"
        />

        {!vin && (
          <>
            <select
              required
              value={make}
              onChange={e => setMake(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="">Select Make</option>
              {Object.keys(vehicles).map(m => (
                <option key={m}>{m}</option>
              ))}
            </select>
            <select
              required
              value={model}
              onChange={e => setModel(e.target.value)}
              disabled={!modelList.length}
              className="border p-2 rounded w-full"
            >
              <option value="">Select Model</option>
              {modelList.map(m => (
                <option key={m}>{m}</option>
              ))}
            </select>
            <select
              required
              value={year}
              onChange={e => setYear(e.target.value)}
              disabled={!years.length}
              className="border p-2 rounded w-full"
            >
              <option value="">Select Year</option>
              {years.map(y => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </>
        )}

        <input
          type="text"
          placeholder="Part Name"
          required
          value={part}
          onChange={e => setPart(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Quantity"
          required
          min={1}
          value={qty}
          onChange={e => setQty(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select
          required
          value={condition}
          onChange={e => setCondition(e.target.value)}
          className="border p-2 rounded w-full"
        >
          {['OE', 'Aftermarket', 'Used', 'Warranty', 'Any'].map(o => (
            <option key={o}>{o}</option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded w-full"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
