import React, { useState } from 'react';
import { Button, Table, Tag } from 'antd';
import { CiExport } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status) => (
      <Tag color={status === 'success' ? 'green' : 'red'}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    render: (status) => (
      <Tag color={status === '790$' ? 'red' : 'green'}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'Deposit',
    dataIndex: 'Deposit',

  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    status: i % 2 === 0 ? 'success' : 'error',
    balance: i % 2 === 0 ? '790$' : '124$',
    Deposit: i % 2 === 0 ? '600$' : '1000$',
  });
}

const Home = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div
        style={{
          marginBottom: 16,
          textAlign: "right",
          display: 'flex',
          gap:"10px",
          justifyContent:"flex-end"

        }}
      >
        <Button icon={<CiExport />}>Export</Button>
        <Button icon={<CiFilter />}>Filter</Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default Home;
