import React, { useEffect, useState } from "react";
import websiteStore from "../store/WebsiteStore";
import { toJS } from "mobx";
import { observer } from "mobx-react";

const OurTeams = observer(() => {
    const [teamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        setTeamDetails(toJS(websiteStore?.data?.teams));
    }, [websiteStore?.data?.teams]);

    useEffect(() => {
        websiteStore?.getTeams();
    }, []);

    if (teamDetails.length === 0) {
        return <div>Loading...</div>;
    }

    const isValidImageUrl = (url) => {
        return url && (url.includes(".jpg") || url.includes(".jpeg") || url.includes(".png") || url.includes(".gif")|| url.includes("https://"));
    };

    return (
        <div>
        <section id="team" className="wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Our Team</h2>
                </div>
                <div className="row">
                    {teamDetails.map((team, index) => (
                        <div className="col-lg-3 col-md-6" key={team?.id || index}>
                            <div className="member">
                                <div className="pic">
                                    <img   src={
                                                team?.image && isValidImageUrl(team?.image)
                                                    ? team?.image
                                                    : "/path/to/default-image.jpg"
                                            } />
                                </div>
                                <div className="details">
                                    <h4>{team?.name || "Team Member"}</h4>
                                    <span>{team?.position || "Position"}</span>
                                    <p>{team?.description || "Description not available."}</p>
                                    <div className="social">
                                        {team?.instagram && (
                                            <a href={team?.instagram} target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        )}
                                        {team?.facebook && (
                                            <a href={team?.facebook} target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-facebook"></i>
                                            </a>
                                        )}
                                        {team?.whatsapp && (
                                            <a href={team?.whatsapp} target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </a>
                                        )}
                                        {team?.linkedin && (
                                            <a href={team?.linkedin} target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
    );
});

export default OurTeams;
