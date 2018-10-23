import React from 'react';
import MenuBar from './navigation.jsx'
import {Layout} from 'antd';
const Header = Layout.Header;
import './header.less';


class HeaderComponent extends React.Component {
    render() {
        return (
            <Header>
                <div className="logo" />
                <MenuBar />
            </Header>
        )
    }
}

export default HeaderComponent;