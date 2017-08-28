import React from 'react';
import TopMenu from './topMenu';
import LeftSidebar from './leftSidebar';
import RightSidebar from './rightSidebar';
import MainContent from './mainContent';

const IndexPage = () => (
    <div>
        <TopMenu />
        <div className="container">
            <MainContent />
            <LeftSidebar />
            <RightSidebar />
        </div>
    </div>
);

export default IndexPage;