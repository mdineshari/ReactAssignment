import React from 'react';
import FilterComponent from './Filter/filter.component.jsx';
import './main.less';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <FilterComponent />
            </div>

        )
    }
}

export default MainComponent;