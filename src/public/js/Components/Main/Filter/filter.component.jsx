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
                <Skills handleChange={this.props.handleChange} jobSkills={this.props.jobSkills} filteredJobs={this.props.filteredJobs}/>
                <Availablity />
            </div>
        )
    }
}

export default FilterComponent;