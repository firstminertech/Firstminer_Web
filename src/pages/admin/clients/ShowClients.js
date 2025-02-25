import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import websiteStore from '../../../store/WebsiteStore';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import AdminHeader from '../../../component/admin-component/AdminHeader';
import AdminSidebar from '../../../component/admin-component/Admin-Sidebar';
import { BASE_API_URL, BASE_FILE_URL } from '../../../api/config';

const ShoowClients = observer(() => {
  const navigate = useNavigate();
  const [clientDetails , setClientDetails] = useState([]);

  useEffect(()=>{
    websiteStore.getClients();
  },[])

  useEffect(()=>{
    setClientDetails(toJS(websiteStore?.data?.clients))
  },[websiteStore?.data?.clients])

  const handleDelete =(record)=>{
    websiteStore.deleteContact(record);
  }

  // Columns for the table
  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Image',
      sortable: true,
      cell: (record) => {
        return (
          <div>
            <img src={`${BASE_FILE_URL + record.image}`} width={50} alt="Record Image" />
          </div>
        );
      }
    },
    
    
    {
      name: 'Action',
      button: true,
      cell: row => (
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/admin/add-client`)}
        >
          Edit Details
        </button>
      ),
    },
    {
      name: 'Action',
      button: true,
      cell: row => (
        <button
          className="btn btn-primary"
          onClick={() => handleDelete(row.id)}
        >
         delete details
        </button>
      ),
    },
  ];

  // Handle Add Item button click
  const handleAddItem = () => {
    navigate(`/admin/add-client`);
  };

  return (
    <div>
      <AdminHeader/>
      <div className='d-flex'>
        <AdminSidebar/>
        <div className="container p-3">
      <h1 className="mb-4">Clients</h1>
      
      {/* Add Item Button */}
      <button className="btn btn-success mb-3" onClick={handleAddItem}>
        Add Client
      </button>

      {/* React Data Table */}
      <DataTable
        columns={columns}
        data={clientDetails}
        pagination
        highlightOnHover
        responsive
      />
    </div>
      </div>
    </div>
   
  );
});

export default ShoowClients;
