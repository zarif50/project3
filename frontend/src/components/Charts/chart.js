//chart
import React, { useState } from 'react';
import './chart.css';

import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, XAxis, YAxis, CartesianGrid, Bar, LineChart, Line } from "recharts";

const Chart = () => {
    // Initialize state
    const [data, setData] = useState([
        { name: "কাচ্চি", value1: 10, value2: 15 },
        { name: "রেজালা", value1: 50, value2: 40 },
        { name: "মিষ্টান্ন", value1: 20, value2: 30 },
        { name: "সন্ধ্যা নাস্তা", value1: 20, value2: 25 },
        { name: "মাছ", value1: 20, value2: 20 },
        { name: "সবজি", value1: 20, value2: 10 },
        { name: "নুডলস", value1: 20, value2: 35 },
        { name: "কাবাব", value1: 20, value2: 30 }
    ]);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',];

    // Handle input change
    const handleChange = (e, index, key) => {
        const { value } = e.target;
        const newData = [...data];
        newData[index][key] = parseFloat(value);
        setData(newData);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>See your Orders in a smart way  </h1>
            <div className="inputs">
                {data.map((item, index) => (
                    <div key={item.name}>
                        <label>
                            {item.name} Value 1: 
                            <input
                                type="number"
                                value={item.value1}
                                onChange={(e) => handleChange(e, index, 'value1')}
                            />%
                        </label>
                        <label>
                            {item.name} Value 2: 
                            <input
                                type="number"
                                value={item.value2}
                                onChange={(e) => handleChange(e, index, 'value2')}
                            />%
                        </label>
                    </div>
                ))}
            </div>
            <div className="App">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value1"
                        isAnimationActive={false}
                        data={data}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label={({ name, value1 }) => `${name}: ${value1}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value1) => `${value1}%`} />
                    <Legend />
                </PieChart>

                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="value1">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>

                {/* Adding LineChart with two lines */}
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Line type="monotone" dataKey="value1" stroke="#FF8042" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="value2" stroke="#00C49F" />
                </LineChart>
            </div>
        </div>
    );
};

export default Chart;
