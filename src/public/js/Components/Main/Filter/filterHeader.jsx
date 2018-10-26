import React from 'react';
import {Card} from 'antd';

class FilterHeader extends React.Component {
    constructor(props) {
        super(props);
        this.clearAll = this.clearAll.bind(this);
    }
    clearAll() {
        this.props.handleChange('clearedAllFiltered',[]);
    }
    render() {
        return (
            <Card className="filterComponent filterHeader" title="FILTERS" extra={<span onClick={this.clearAll}>Clear all filters</span>}></Card>
        )
    }
}

export default FilterHeader;