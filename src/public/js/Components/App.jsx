import React from 'react';
import HeaderComponent from './Header/header.component.jsx';
import SearchBar from './Search/searchbar.component.jsx';
import MainComponent from './Main/main.component.jsx';

import {Layout} from 'antd';

class App extends React.Component {
    render() {
        return (
            <Layout>
                <HeaderComponent />
                <br/>
                <SearchBar />
                <br/>
                <MainComponent />
                <br/>
            </Layout>
        )
    }
}

export default App;