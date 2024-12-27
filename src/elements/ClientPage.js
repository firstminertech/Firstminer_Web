import React, { useEffect, useState } from "react";
import websiteStore from "../store/WebsiteStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { BASE_FILE_URL } from "../api/config";
import Header from "../component/Header";

const ClientCard = ({ image, altText }) => {
  return (
    <div className="client-card">
      <img src={BASE_FILE_URL + image} alt={altText} className="client-image" />
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
    setClients(
      clientData.map((client) => ({
        src: `${client.image}`, // Assuming imageName is returned by the server
        alt: client.name, // Assuming name is available in client data
      }))
    );
  }, [websiteStore?.data?.clients]);

  return (
    <div>
      <section id="clients" className="wow fadeInUp">
        <div className="container">
          {/* <div className="clients-carousel owl-carousel">
            {clients.map((client, index) => (
              <ClientCard key={index} image={client.src} altText={client.alt} />
            ))}
          </div> */}
          <div className="d-flex justify-content-start flex-wrap">
          {clients?.map((client, index) => (
            <div className="col-md-4 container my-4 " key={index}>
              <div className="text-center">
                <h6 className="fs-4 text-start username10">{client?.alt}</h6>
                <img
                  src={BASE_FILE_URL + client?.src}
                  alt={client?.alt}
                  className="img-fluid fixed-img1"
                />
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
});

export default ClientPage;
