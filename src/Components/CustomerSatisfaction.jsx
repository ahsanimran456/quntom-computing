import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
];

const CustomerSatisfaction = () => {
    return (
        <div className='Visitor-insights'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <div className='card-head'>
                    <p>
                        Customer Satisfaction
                    </p>
                </div>
            </div>
            <div className="Visitor-insights-graph w-100">
                <div className="Visitor-insights-graph w-100" style={{ height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#07E098" />
                            <Line type="monotone" dataKey="uv" stroke="#0095FF" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    )
}

export default CustomerSatisfaction