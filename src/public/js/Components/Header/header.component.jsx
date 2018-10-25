import React from 'react';
import MenuBar from './navigation.jsx'
import {Layout} from 'antd';
const Header = Layout.Header;
import './header.less';

class HeaderComponent extends React.Component {
    render() {
        return (
            <Header className="header-container">
                <div className="logo"></div>
                <MenuBar />
            </Header>
        )
    }
}

export default HeaderComponent;