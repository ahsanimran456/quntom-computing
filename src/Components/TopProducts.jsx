import React from 'react'
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;
import { Slider } from 'antd';
const TopProducts = () => {
    const data = [
        {
            key: '1',
            firstName: 'John',
            age: <Slider
                defaultValue={45}
                tooltip={{
                    open: false,
                }}
                trackStyle={{ backgroundColor: '#0095FF' }}
                handleStyle={{ borderColor: '#FFCF00', backgroundColor: '#FFCF00' }}
            />,
            tags: ['45%'],
        },
        {
            key: '2',
            firstName: 'Jim',
            age: <Slider
                defaultValue={66}
                tooltip={{
                    open: false,
                }}
                trackStyle={{ backgroundColor: '#00E096' }}
                handleStyle={{ borderColor: '#FFCF00', backgroundColor: '#FFCF00' }}
            />,
            tags: ['66%'],
        },
        {
            key: '3',
            firstName: 'Joe',
            age: <Slider
                defaultValue={28}
                tooltip={{
                    open: false,
                }}
                trackStyle={{ backgroundColor: '#884DFF' }}
                handleStyle={{ borderColor: '#FFCF00', backgroundColor: '#FFCF00' }}
            />,
            tags: ['28%'],
        },
        {
            key: '4',
            firstName: 'Joe',
            age: <Slider
                defaultValue={25}
                tooltip={{
                    open: false,
                }}
                trackStyle={{ backgroundColor: '#FF8F0D' }}
                handleStyle={{ borderColor: '#FF8F0D', backgroundColor: '#FF8F0D' }}
            />,
            tags: ['25%'],
        },
    ];
    return (
        <div className='Visitor-insights'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <div className='card-head'>
                    <p>
                        Customer Satisfaction
                    </p>
                </div>
            </div>
            <div className="table-ant">
                <Table dataSource={data} className='w-100' style={{width:"100%"}}>
                    <Column title="Name" dataIndex="firstName" key="firstName" />
                    <Column title="Popularity" dataIndex="age" key="age" />
                    <Column
                        title="Sales"
                        dataIndex="tags"
                        key="tags"
                        render={(tags) => (
                            <>
                                {tags.map((tag) => {
                                    let color = tag == "45%" ? "geekblue" : tag == "66%" ? "green" : tag == "28%" ? "#884DFF" : "#FF8F0D";
                                    if (tag === 'loser') {
                                        color = 'volcano';
                                    }
                                    return (
                                        <Tag color={color} key={tag}>
                                            {tag.toUpperCase()}
                                        </Tag>
                                    );
                                })}
                            </>
                        )}
                    />
                </Table>
            </div>
        </div>
    )
}

export default TopProducts