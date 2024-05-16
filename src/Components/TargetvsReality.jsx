import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Jully', uv: 2780, pv: 3908, amt: 2000 },
];

const TargetvsReality = () => {
    return (
        <div className='Visitor-insights'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <div className='card-head'>
                    <p>Target vs Reality</p>
                </div>
            </div>
            <div className="Visitor-insights-graph w-100" style={{ height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ left: -60 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tick={false} />  {/* Hide Y-axis labels */}
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#4AB58E" />
                        <Bar dataKey="uv" fill="#FFCF00" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default TargetvsReality;
