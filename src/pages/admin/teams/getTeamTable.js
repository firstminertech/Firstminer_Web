import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import websiteStore from '../../../store/WebsiteStore';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import AdminHeader from '../../../component/admin-component/AdminHeader';
import AdminSidebar from '../../../component/admin-component/Admin-Sidebar';

const GetTeamTable = observer(() => {
  const navigate = useNavigate();
  const [teamDetails , seTeamDetails] = useState([]);

  useEffect(()=>{
    websiteStore.getTeams();
  },[])

  useEffect(()=>{
    seTeamDetails(toJS(websiteStore?.data?.teams))
  },[websiteStore?.data?.teams])

  const handleDelete = (id) =>{
    websiteStore.deleteTeam(id)
  }


  // Columns for the table
  const columns = [
    {
      name: 'Team Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Position',
      selector: row => row.position,
      sortable: true,
    },
    {
      name: 'Description',
      selector: row => row.description,
      sortable: true,
    },
    {
      name: 'Image',
      selector: row => row.image,
      sortable: true,
    },
    {
      name: 'Instagram',
      selector: row => row.instagram,
      sortable: true,
    },
    {
      name: 'Linkedin',
      selector: row => row.linkedin,
      sortable: true,
    },
    {
      name: 'Whatsapp',
      selector: row => row.whatsapp,
      sortable: true,
    },
    {
      name: 'Facebook',
      selector: row => row.facebook,
      sortable: true,
    },
    {
      name: 'Action',
      button: true,
      cell: row => (
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/admin/get-teams-details/${row.id}`)}
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
          Delete Details
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
      <h1 className="mb-4">Team List</h1>
      
      {/* Add Item Button */}
      <button className="btn btn-success mb-3" onClick={handleAddItem}>
        Add Item
      </button>

      {/* React Data Table */}
      <DataTable
        columns={columns}
        data={teamDetails}
        pagination
        highlightOnHover
        responsive
      />
    </div>
      </div>
    </div>
   
  );
});

export default GetTeamTable;
