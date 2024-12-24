import React, { useEffect, useState } from "react";
import websiteStore from "../store/WebsiteStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { BASE_FILE_URL } from "../api/config";

const ClientCard = ({ image, altText }) => {
  return (
    <div className="client-card">
      <img src={BASE_FILE_URL+image} alt={altText} className="client-image" />
    </div>
  );
};

const ClientPage = observer(() => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    websiteStore.getClients(); // Assuming this fetches client data
  }, []);

  useEffect(() => {
    // Update clients state when websiteStore data changes
    const clientData = toJS(websiteStore?.data?.clients) || [];
    setClients(clientData.map(client => ({
      src: `${client.image}`, // Assuming imageName is returned by the server
      alt: client.name, // Assuming name is available in client data
    })));
  }, [websiteStore?.data?.clients]);

  return (
    <div>
      <section id="clients" className="wow fadeInUp">
        <div className="container">
          <div className="section-header">
            <h2>Clients</h2>
            <p>
              Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam
              aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis
              nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore
            </p>
          </div>
          <div className="clients-carousel owl-carousel">
            {clients.map((client, index) => (
              <ClientCard key={index} image={client.src} altText={client.alt} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

export default ClientPage;
