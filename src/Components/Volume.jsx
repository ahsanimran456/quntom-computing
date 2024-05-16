import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLine } from 'victory';

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
];

const position = [51.505, -0.09];

const Volume = () => {
    return (
        <div className='Visitor-insights'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <div className='card-head'>
                    <p>Sales Mapping by Country</p>
                </div>
            </div>
            <div className="Visitor-insights-graph w-100" style={{ height: '389px' }}>
                <VictoryChart
                    theme={VictoryTheme.material}
                >
                    <VictoryLine
                        data={data}
                        x="quarter"
                        y="earnings"
                    />
                </VictoryChart>
            </div>
        </div>
    );
}

export default Volume;
