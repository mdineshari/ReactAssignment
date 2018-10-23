import React from 'react';
import MenuBar from './navigation.jsx'
import {Layout, Avatar, Row, Col} from 'antd';
const Header = Layout.Header;

class HeaderComponent extends React.Component {
    render() {
        return (
            <Header>
                <Row gutter={16}>
                    <Col span={8}>
                        <Avatar size={48} icon="user" />
                    </Col>
                    <Col span={16}>
                        <MenuBar />
                    </Col>
                </Row>
            </Header>
        )
    }
}

export default HeaderComponent;