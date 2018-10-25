import React from 'react';
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            openSubMenu: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.subMenuToggle = this.subMenuToggle.bind(this);
    }
    subMenuToggle(flag) {
        this.setState({
            openSubMenu: flag
        });
    }
    handleClick(e) {
        this.setState({
            current: e.key
        });
    }
    render() {
        return (
            <Menu onOpenChange = {() => this.subMenuToggle(!this.state.openSubMenu)} onClick={this.handleClick} selectedKeys={[this.state.current]} theme="light" mode="horizontal" className='menuBar'>
                <MenuItem key="how">HOW IT WORKS</MenuItem>
        <SubMenu title={<span>BROWSE &nbsp;&nbsp;{this.state.openSubMenu?<Icon type="up" theme="outlined" />:<Icon type="down" theme="outlined" />}</span>}>
                    <MenuItem key="browse11">Browse 1.1</MenuItem>
                    <MenuItem key="browse12">Browse 1.2</MenuItem>
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