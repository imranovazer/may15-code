import { Button, Modal, Row, Table   } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";




function App() {  
const {confirm} =Modal ;

  const [data,setData] = useState() ;
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
  const getData = async() =>
  {
    const  newData =await axios.get('https://northwind.vercel.app/api/suppliers') ;
    setData(newData.data)
  }
  useEffect(()=>
  {
    getData() ;
    
  },[])

  const onDelete = async(id)=>
  {
    const  newData =await axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`) ;
    getData() ;

  }


  
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'CompanyName',
      dataIndex: 'companyName',
      key: 'companyName',
      sorter: (a, b) => a.contactName.localeCompare(b.contactName) ,
    },
    {
      title: 'ContactName',
      dataIndex: 'contactName',
      key: 'contactName',
      sorter: (a, b) => a.contactName.localeCompare(b.contactName) ,
          
        
      
    },
    {
      title : 'City' ,
      dataIndex: ['address' ,'city'],
      key: 'city',
    } ,
    {
      title : 'Delete' ,
      
      dataIndex : 'id' ,
      render :(id)=><Button onClick={()=>deleteProduct(id)}>Delete</Button>
    }   

  ];
  

  return (
    <div className="App">
      
      
     <Table  rowClassName={(record)=>(record.address.city=='Tokyo' ?'red':null)}   dataSource={data} columns={columns}></Table>
    </div>
  );
}

export default App;
