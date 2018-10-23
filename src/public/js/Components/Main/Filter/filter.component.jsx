import React from 'react';
import Skills from './skills.jsx';
import Availablity from './availability.jsx';

class FilterComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Skills />
                <Availablity />
            </div>
        )
    }
}

export default FilterComponent;