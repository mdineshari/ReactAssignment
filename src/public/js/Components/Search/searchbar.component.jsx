import React from 'react';
import {Input} from 'antd';
import './searchbar.less';

const Search = Input.Search;

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <Search
                placeholder="Search by keywords (PHP, .NET, graphic designer, etc."
                enterButton="Search"
                size="large"
                className="searchKeyword"
                onSearch={value => console.log(value)}
            />
        )
    }
}

export default SearchBar;
