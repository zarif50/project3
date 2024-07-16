//chart
import React, { useState } from 'react';
import './chart.css';

import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, XAxis, YAxis, CartesianGrid, Bar } from "recharts";

const Chart = () => {
    // Initialize state
    const [data, setData] = useState([
        { name: "কাচ্চি", value: 10 },
        { name: "রেজালা", value: 50 },
        { name: "মিষ্টান্ন", value: 20 },
        { name: "সন্ধ্যা নাস্তা", value: 20 },
        { name: "মাছ", value: 20 },
        { name: "সবজি", value: 20 },
        { name: "নুডলস", value: 20 },
        { name: "কাবাব", value: 20 }
    ]);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',];

    // Handle input change
    const handleChange = (e, index) => {
        const { value } = e.target;
        const newData = [...data];
        newData[index].value = parseFloat(value);
        setData(newData);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>See your Orders in a smart way  </h1>
            <div className="inputs">
                {data.map((item, index) => (
                    <div key={item.name}>
                        <label>
                            {item.name}: 
                            <input
                                type="number"
                                value={item.value}
                                onChange={(e) => handleChange(e, index)}
                            />%
                        </label>
                    </div>
                ))}
            </div>
            <div className="App">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label={({ name, value }) => `${name}: ${value}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
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
                    <Bar dataKey="value">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default Chart;
