import React, { useEffect, useState } from "react";
import websiteStore from "../store/WebsiteStore";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import Header from "../component/Header";
import { BASE_FILE_URL } from "../api/config";

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
        return url && (url.includes(".jpg") || url.includes(".jpeg") || url.includes(".png") || url.includes(".gif") || url.includes("https://"));
    };

    return (
        <div>
            <Header />
            <section className="team-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Team</h2>
                    </div>
                    <div className="team-grid">
                        {teamDetails.map((team, index) => (
                            <div className="team-member" key={team?.id || index}>
                                <div className="member-image">
                                    <img
                                        src={
                                            team?.image && isValidImageUrl(team?.image)
                                                ? BASE_FILE_URL + team?.image
                                                : "/path/to/default-image.jpg"
                                        }
                                        alt={team?.name || "Team Member"}
                                    />
                                </div>
                                <div className="member-details">
                                    <h4>{team?.name || "Team Member"}</h4>
                                    <span>{team?.position || "Position"}</span>
                                    <p>{team?.description || "Description not available."}</p>
                                    <div className="social-links">
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
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
});

export default OurTeams;
