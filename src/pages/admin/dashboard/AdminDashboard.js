import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'react-bootstrap';
import AdminHeader from '../../../component/admin-component/AdminHeader';
import AdminSidebar from '../../../component/admin-component/Admin-Sidebar';

const AdminDashboard = () => {
  return (
    <div>
    <AdminHeader/>
    <div className='d-flex'>
    <AdminSidebar/>
    <div className="container-fluid p-3">
      <Row>
        <Col sm="4">
          <Card className="custom-card shadow-lg">
            <CardBody>
              <CardTitle tag="h5" className="card-title">Total Users</CardTitle>
              <CardText className="card-value">1500</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="custom-card shadow-lg">
            <CardBody>
              <CardTitle tag="h5" className="card-title">Total Orders</CardTitle>
              <CardText className="card-value">320</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="custom-card shadow-lg">
            <CardBody>
              <CardTitle tag="h5" className="card-title">Total Sales</CardTitle>
              <CardText className="card-value">$5000</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
