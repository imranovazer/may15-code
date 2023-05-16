import { render } from "@testing-library/react";
import { Button, Modal, Row, Table } from "antd";
import axios, { formToJSON } from "axios";
import { useEffect, useState } from "react";




function App() {
  const { confirm } = Modal;

  const [data, setData] = useState();
  function formatDate(dateStr) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateStr);
    const month = months[date.getMonth()]?.slice(0, 3);
    const day = date.getDate();
    const year = date.getFullYear().toString()?.slice(-2);

    let suffix = "";
    switch (day % 10) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
    }

    return `${month} ${day}${suffix} ${year}`;
  }
  const deleteProduct = (id) => {

    confirm({
      title: 'Do you Want to delete these items?',

      content: 'Some descriptions',
      onOk() {
        onDelete(id)

      },
      onCancel() {
        console.log('Cancel');
      },
    });

  }
  const getData = async () => {
    const newData = await axios.get('https://northwind.vercel.app/api/orders');
    setData(newData.data)
  }
  useEffect(() => {
    getData();

  }, [])

  const onDelete = async (id) => {
    const newData = await axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`);
    getData();

  }



  const columns = [
    {
      title: 'Customer ID',
      dataIndex: 'customerId',
      key: 'customerId',
      filters: [{
        text: 'WILMK',
        value: 'WILMK'
      },
      {
        text: 'ALFKI',
        value: 'ALFKI'
      },
      {
        text: 'ANATR',
        value: 'ANATR'
      },
      {
        text: 'ANTON',
        value: 'ANTON'
      },
      {
        text: 'AROUT',
        value: 'AROUT'
      },
      {
        text: 'BERGS',
        value: 'BERGS'
      },
      {
        text: 'BLAUS',
        value: 'BLAUS'
      },
      {
        text: 'BLONP',
        value: 'BLONP'
      },
      {
        text: 'BONAP',
        value: 'BONAP'
      }
        ,
      {
        text: 'BOTTM',
        value: 'BOTTM'
      },
      {
        text: 'WOLZA',
        value: 'WOLZA'
      },
      {
        text: 'RICSU',
        value: 'RICSU'
      }
      ],
      sorter: (a, b) => a.customerId.localeCompare(b.customerId),
      onFilter: (value, record) => record.customerId.indexOf(value) === 0,

    },
    {
      title: 'Freight',
      dataIndex: 'freight',
      key: 'freight',
      sorter: (a, b) => a.freight - b.freight,
    },
    {
      title: 'Ship city',
      dataIndex: ['shipAddress', 'city'],
      key: 'city',
      //sorter: (a, b) => a.contactName.localeCompare(b.contactName),



    },
    {
      title: 'Ship country',
      dataIndex: ['shipAddress', 'country'],
      key: 'country',
      //sorter: (a, b) => a.contactName.localeCompare(b.contactName),



    },
    {
      title: 'Order date',
      dataIndex: 'orderDate',
      key: 'orderDate',
      render: (orderDate) => formatDate(orderDate),
      sorter: (a, b) => new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime(),


    },
    {
      title: 'Required date',
      dataIndex: 'requiredDate',
      key: 'requiredDate',
      render: (requiredDate) => formatDate(requiredDate)

    },
    {
      title: 'Shipped date',
      dataIndex: 'shippedDate',
      key: 'shippedDate',
      render: (shippedDate) => formatDate(shippedDate)

    }

  ];


  return (
    <div className="App">


      <Table dataSource={data} columns={columns} rowClassName={(record) => (new Date(record.requiredDate).getTime() - new Date(record.shippedDate).getTime() < 0 ? 'red' : null)}></Table>

    </div>
  );
}

export default App;
