import React, { useState } from 'react';

const sampleRequests = [
  { id: 1, phone: '+201234567890', name: 'Brake Pads', type: 'OE', qty: 2, urgency: 'High', status: 'Pending', price: '', eta: '', delivery: '', reply: '' },
  { id: 2, phone: '+201098765432', name: 'Oil Filter', type: 'Aftermarket', qty: 1, urgency: 'Medium', status: 'Pending', price: '', eta: '', delivery: '', reply: '' }
];

export default function HQDashboard() {
  const [requests, setRequests] = useState(sampleRequests);
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (id, field, value) =>
    setRequests(reqs => reqs.map(r => (r.id === id ? { ...r, [field]: value } : r)));

  const handleReplySubmit = id => {
    const req = requests.find(r => r.id === id);
    alert(`Reply to ${req.phone}: ${req.reply}`);
    setRequests(reqs => reqs.map(r => (r.id === id ? { ...r, reply: '' } : r)));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Voltage Autoparts HQ Dashboard</h1>
      <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['Tech Phone','Part','Type','Qty','Urgency','Status','Price','ETA','Delivery','Reply','Action'].map(h => (
                <th key={h} className="px-4 py-2 text-left text-sm font-medium text-gray-700">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map(r => {
              const disabled = !(r.price && r.eta && r.delivery && r.reply);
              return (
                <tr key={r.id}>
                  <td className="px-4 py-2 text-sm">{r.phone}</td>
                  <td className="px-4 py-2 text-sm">{r.name}</td>
                  <td className="px-4 py-2 text-sm">
                    <select
                      className="border rounded px-2 py-1"
                      value={r.type}
                      onChange={e => handleChange(r.id, 'type', e.target.value)}
                    >
                      {['OE','Aftermarket','Used','Warranty','Any'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </td>
                  <td className="px-4 py-2 text-sm">{r.qty}</td>
                  <td className="px-4 py-2 text-sm">{r.urgency}</td>
                  <td className="px-4 py-2 text-sm">
                    <select
                      className="border rounded px-2 py-1"
                      value={r.status}
                      onChange={e => handleChange(r.id, 'status', e.target.value)}
                    >
                      {['Pending','Approved','In Progress','Delivered','Rejected'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <input
                      type="text"
                      placeholder="Price"
                      className="border rounded px-2 py-1 w-full"
                      value={r.price}
                      onChange={e => handleChange(r.id, 'price', e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <input
                      type="date"
                      min={today}
                      className="border rounded px-2 py-1 w-full"
                      value={r.eta}
                      onChange={e => handleChange(r.id, 'eta', e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <input
                      type="text"
                      placeholder="Delivery person"
                      className="border rounded px-2 py-1 w-full"
                      value={r.delivery}
                      onChange={e => handleChange(r.id, 'delivery', e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <input
                      type="text"
                      placeholder="Type reply…"
                      className="border rounded px-2 py-1 w-full"
                      value={r.reply}
                      onChange={e => handleChange(r.id, 'reply', e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <button
                      onClick={() => handleReplySubmit(r.id)}
                      disabled={disabled}
                      className="bg-red-600 text-white px-3 py-1 rounded disabled:opacity-50"
                    >Submit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

