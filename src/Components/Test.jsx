import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import qs from 'qs';
import { IoIosSearch } from "react-icons/io";
import './a.css'
import { styled, alpha } from '@mui/material/styles';
import { Menu, MenuItem } from '@mui/material';
const columns = [
  {
    title: '#',
    dataIndex: 'key',
    sorter: true,
  },
  {
    title: 'NAME',
    dataIndex: 'name',
    sorter: true,
    render: (_, record) => (
      <div className='name'>
        <div className="h3">{record.name}</div>
        <div className="h4">{record.phone}</div>
      </div>
    ),
  },
  {
    title: 'description',
    dataIndex: 'description',
    width:"20rem",
    render: (_, record) => (
      <div className='para'>
        <p>{record.description}</p>
      </div>
    ),
    },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: true,
    render: (_, record) => (
      <div className='badge'>
       {record.status}
      </div>
    ),
  },
  {
    title: 'Rate',
    dataIndex: 'rate',
    render: (_, record) => (
      <div className='Rate'>
       <span>{record.rate.price}</span>
       <p>{record.rate.label}</p>
      </div>
    ),
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    render: (_, record) => (
      <div className='Rate'>
       <span className='red'>{record.balance.price}</span>
       <p>{record.balance.price}</p>
      </div>
    ),
  },
  {
    title: 'Deposit',
    dataIndex: 'deposit',
    render: (_, record) => (
      <div className='Rate'>
       <span >{record.deposit.price}</span>
       <p>{record.deposit.label}</p>
      </div>
    ),
  },
];
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
const Test = () => {
  const [data, setData] = useState([
    {
    key: "1",
    name: "Ann Culhane",
    phone: "5684236526",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Open",
    rate: {
      price: "$70.00",
      label: "CAD",
    },
    balance: {
        price: "-$270.00",
      label: "CAD",
    },
    deposit: {
        price: "$500.00",
      label: "CAD",
    },
  },
    {
    key: "2",
    name: "Ann Culhane",
    phone: "5684236526",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Open",
    rate: {
      price: "$70.00",
      label: "CAD",
    },
    balance: {
        price: "-$270.00",
      label: "CAD",
    },
    deposit: {
        price: "$500.00",
      label: "CAD",
    },
  },
]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const fetchData = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
      .then((res) => res.json())
      .then(({ results }) => {
        // setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };
  useEffect(() => {
    fetchData();
  }, [tableParams.pagination?.current, tableParams.pagination?.pageSize]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

  };

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if(loading) return false
  return (
    <div className='Mtable'>

        <div className='Mtable-top flex justify-between'>
            <div className="Mtable-top-left">
                <IoIosSearch />
                <input type="text" />
            </div>
            <div className="Mtable-top-right flex items-center gap-3">
                <div className='flex items-center gap-2 py-2 px-4 btn1 cursor-pointer'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.1019 4.11196L7.44021 1.83077C7.31594 1.72183 7.15906 1.6661 7.00136 1.66602C6.89345 1.66596 6.78515 1.69196 6.68666 1.7448C6.64276 1.76828 6.60106 1.79696 6.5625 1.83077L3.90081 4.11196C3.62125 4.35156 3.58885 4.77242 3.82845 5.05198C4.06805 5.33155 4.48892 5.36395 4.76848 5.12435L6.33464 3.78207V8.94516C6.33464 9.31335 6.63312 9.61183 7.00131 9.61183C7.3695 9.61183 7.66798 9.31335 7.66798 8.94516L7.66798 3.782L9.23423 5.12435C9.51379 5.36395 9.93466 5.33155 10.1743 5.05198C10.4139 4.77242 10.3815 4.35156 10.1019 4.11196ZM3.0013 8.33268C3.0013 7.96449 3.29978 7.66602 3.66797 7.66602H4.66797C5.03616 7.66602 5.33464 7.36754 5.33464 6.99935C5.33464 6.63116 5.03616 6.33268 4.66797 6.33268H3.66797C2.5634 6.33268 1.66797 7.22811 1.66797 8.33268V10.3327C1.66797 11.4373 2.5634 12.3327 3.66797 12.3327H10.3346C11.4392 12.3327 12.3346 11.4373 12.3346 10.3327V8.33268C12.3346 7.22811 11.4392 6.33268 10.3346 6.33268H9.33464C8.96645 6.33268 8.66797 6.63116 8.66797 6.99935C8.66797 7.36754 8.96645 7.66602 9.33464 7.66602H10.3346C10.7028 7.66602 11.0013 7.96449 11.0013 8.33268V10.3327C11.0013 10.7009 10.7028 10.9993 10.3346 10.9993H3.66797C3.29978 10.9993 3.0013 10.7009 3.0013 10.3327V8.33268Z"
      fill="#0F3659"
    />
  </svg>
<span className='text-[#979797]'>
Export

</span>


                </div>
                <div className='flex items-center gap-2 py-2 px-4 btn1 cursor-pointer' disableElevation
        onClick={handleClick}
>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.79 1.61564C12.3029 0.959102 11.8351 0 11.002 0H1.00186C0.168707 0 -0.299092 0.959101 0.213831 1.61564L5.03983 7.72867C5.1772 7.90449 5.25181 8.1212 5.25181 8.34432V13.7961C5.25181 13.9743 5.46724 14.0635 5.59323 13.9375L6.60536 12.9254C6.69913 12.8316 6.75181 12.7044 6.75181 12.5718V8.34432C6.75181 8.1212 6.82643 7.90449 6.96379 7.72867L11.79 1.61564Z" fill="#464F60"/>
</svg>
<span className='text-[#979797]'>
Filter

</span>

                </div>
                <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          filter
        </MenuItem>
        </StyledMenu>
                <div className='cursor-pointer'>
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="33" height="33" fill="url(#pattern0_8_505)"/>
    <defs>
      <pattern id="pattern0_8_505" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_8_505" transform="scale(0.01)"/>
      </pattern>
      <image id="image0_8_505" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADoklEQVR4nO2dz49LURTHT8IGYY8M/wBLiQQZ5J3zmtGe25FUwtBzOgvBP4BYzGISEsGOjdghYstfQDLWbImw9SPEksXIncyC+pEwbe89951P8l01Td/7nvb29X3aPgDHcRzHcRzHcRznn8CgHQxyh1huV0Fn/u3ezkgh1gUKuvxTWC55zQmoeH4bBfn2m4F8rWfntvpQJj2QoDO/DGM1vnQlAFl7fxpIvC3FNpli5uj8TgqyiCwPKOjDtQZZl/4ykKXRPEbcVlmM2w4l0WrrHgzy5U8F5h4M8iXuA5QCBX2WulRa61BYl8ASiCc3VUHruH7/mLrbPxaPfFIXSmtNPHrr9o8N79/KPuPJTZAT2NHDxPoheWkhVeQ9cf8Q5ECrNbcFWT6mL0WTJnbAPL859TwAuT+bugzKJHVHQ+p5AAXppi6CMknFfU49D1+yQmZLViS+oa28sWXwLKUEQZZ3dZCDkBPt9umN1FEcPiwsPdRR3NvrbUjdv+M4juM4jjNRiOVz6s8FNKmwfIbcIZYXjflAGPQ55A4GfdyYgbA8gtxBllupi6JJheUm5A529GKDBnIBcodY5pIXFSaWE5A7ddADGRS1PIlU3cF+yJ2qfWpH6qJocpmC3On1eut++53b4iLfpqcX1oMFKOjb9IXpWIMsb8AKxPK0AQN5AlZAlnvFDyToXbACBr2SujAae+QyWAGDnktfmI433cFZsAJ1B+3khYXxpmY5Alaogu5OXRiNOTg7vwusEL/vm7owGnPiPoIlihZVrJ/AGiWLKrQgppokqtCCmGqUqGIDYqpRoooNiKmGiaoTYI0obzIobnkcwY7sA2sULqqmwBrliiqxI6aaIKrQkphqgqhCS2KqCaIKLYmpZogqsSOmhokSJ32BOtLULGfAKlHipC6QRhzT/1ZXoqhCS2KqCaKqZU1MFS2q2KCYKllUoUUxVbKoQotiqmhRxQbF1DBR5iQvMows58E6UeZkUOTyKFJ1B8fBOiWJKrQopgoXVVNgnXJEldgVUyWKKrQspkoUVWhZTJUoqtCymCpTVIldMVWiqKoti6kSRVVlWUyVKKrQspgqUVS1rIupYSjoa7OvDtZXUBoU5EbqYun/cxVK4/CR/naTOpf1U7yIJZRIvL6GqfNaLF/jb+6hZKruYDquycnLDn8PBnkZ/4wNmkA8a7r6arlOLPdHcRFIGkVY7iPrtXgF6mLO7DqO4ziO4ziO4ziO4ziOA43gOw+fVTACwSqLAAAAAElFTkSuQmCC"/>
    </defs>
  </svg>
                </div>
            </div>
        </div>
    <Table
      columns={columns}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
      rowSelection={rowSelection}
      />
      </div>
  );
};
export default Test;