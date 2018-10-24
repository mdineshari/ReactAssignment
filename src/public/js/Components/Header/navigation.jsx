import React from 'react';
import {Menu} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: ''
        }
    }
    handleClick(e) {
        this.setState({
            current: e.key
        })
    }

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} theme="dark" mode="horizontal">
                <MenuItem key="how">HOW IT WORKS</MenuItem>
                <SubMenu title="BROWSE">
                    <MenuItemGroup title="Browse 1">
                        <MenuItem key="browse11">Browse 1.1</MenuItem>
                        <MenuItem key="browse12">Browse 1.2</MenuItem>
                    </MenuItemGroup>
                    <MenuItemGroup title="Browse 2">
                        <MenuItem key="browse21">Browse 2.1</MenuItem>
                        <MenuItem key="browse22">Browse 2.2</MenuItem>
                    </MenuItemGroup>
                </SubMenu>
                <MenuItem key="search">SEARCH</MenuItem>
                <SubMenu title="My Account">
                    <MenuItemGroup title="Profile">
                        <MenuItem key="userInfo">User Information</MenuItem>
                        <MenuItem key="hobbies">Hobbies</MenuItem>
                    </MenuItemGroup>
                    <MenuItemGroup title="Carreer">
                        <MenuItem key="education">Education Details</MenuItem>
                        <MenuItem key="profession">Professional Details</MenuItem>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
        )
    }
}

export default MenuBar;