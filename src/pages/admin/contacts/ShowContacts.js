import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import websiteStore from '../../../store/WebsiteStore';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import AdminHeader from '../../../component/admin-component/AdminHeader';
import AdminSidebar from '../../../component/admin-component/Admin-Sidebar';

const ShowContact = observer(() => {
  const navigate = useNavigate();
  const [contactDetails , setContactDetails] = useState([]);

  useEffect(()=>{
    websiteStore.getContacts();
  },[])

  useEffect(()=>{
    setContactDetails(toJS(websiteStore?.data?.contact))
  },[websiteStore?.data?.contact])

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
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Subject',
      selector: row => row.subject,
      sortable: true,
    },
    {
      name: 'Message',
      selector: row => row.message,
      sortable: true,
    },
    
   
    {
      name: 'Action',
      button: true,
      cell: row => (
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/contact`)}
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
    navigate(`/admin/add-team`);
  };

  return (
    <div>
      <AdminHeader/>
      <div className='d-flex'>
        <AdminSidebar/>
        <div className="container p-3">
      <h1 className="mb-4">Contacts</h1>
      
      {/* Add Item Button */}
      <button className="btn btn-success mb-3" onClick={handleAddItem}>
        Add Contact
      </button>

      {/* React Data Table */}
      <DataTable
        columns={columns}
        data={contactDetails}
        pagination
        highlightOnHover
        responsive
      />
    </div>
      </div>
    </div>
   
  );
});

export default ShowContact;
