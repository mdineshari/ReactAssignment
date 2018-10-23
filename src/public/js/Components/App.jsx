import React from 'react';
import HeaderComponent from './Header/header.component.jsx';
import SearchBar from './Search/searchbar.component.jsx';
import MainComponent from './Main/main.component.jsx';
import FooterComponent from './Footer/footer.component.jsx';

import {Layout} from 'antd';

class App extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <HeaderComponent />
                <br/>
                <SearchBar />
                <br/>
                <MainComponent />
                <br/>
                <FooterComponent />
                
            </Layout>
        )
    }
}

export default App;