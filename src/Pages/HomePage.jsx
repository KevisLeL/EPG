import React, { useState, useEffect } from 'react';
import ChannelList from '../Components/ChannelComponents/ChannelList/ChannelList';
import MainHeader from '../Components/UIElements/MainHeader';
import Footer from '../Components/UIElements/Footer';
import UserSidebar from '../Components/UIElements/Sidebars/UserOptions/UserSidebar';

import "./HomePage.scss";

const HomePage = () => {
    const [loadedData, setLoadedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  
    useEffect(() => {
        setIsLoading(true);

        fetch("http://localhost:1337/epg")
            .then((response) => response.json())
            .then((response) => {
                setLoadedData(response);
            });
        setIsLoading(false);
    }, []);

    const onToggleSidebar = (evt) => {
        evt.preventDefault();
        setIsSideBarOpen(!isSideBarOpen);
    };

    return (
        <React.Fragment>
            <MainHeader onToggleSidebar={onToggleSidebar} />
            <UserSidebar isOpen={!isSideBarOpen} />
            {isLoading && <p className="loader">Loading...</p>}
            {!isLoading && <ChannelList items={loadedData}/>}
            <Footer />
        </React.Fragment>
    );
};

export default HomePage;