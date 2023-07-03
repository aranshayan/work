import React, { useEffect, useState } from 'react';
import { ProTable } from '@ant-design/pro-components'; 
import axios from 'axios';
import { ConfigProvider } from 'antd';
import fa_IR from 'antd/locale/fa_IR';

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setpage]= useState(1)
  const [pageSize,setpagesize] = useState(15)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      title: 'شناسه کاربر',
      dataIndex: 'userId',
      key: 'userId',
      align: 'center',
      editable: true
      
    },
    {
      title: 'شناسه',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      editable: true
    },
    {
      title: 'عنوان',
      dataIndex: 'title',
      key: 'title',
      align: 'center',
      editable: true
    },
    {
      title: 'بدنه',
      dataIndex: 'body',
      key: 'body',
      align: 'center',
      editable: true
    },

  ];

  return (  
  <ConfigProvider locale={fa_IR} direction="rtl">
    <ProTable
      dataSource={data}
      columns={columns}
      loading={loading}
      rowKey="id"
      pagination={{
        // current:page,
        // pageSize:pageSize,
        // onChange:(page,pageSize)=>{
        //   setpage(page);
        //   setpagesize(pageSize)
        // }
        pageSizeOptions:[10,15,20],
        defaultPageSize:15,
        showSizeChanger: true
      }}
      form={{
        dir:"rtl"
      }}

    />
  </ConfigProvider>
  );
};



export default TableComponent;

