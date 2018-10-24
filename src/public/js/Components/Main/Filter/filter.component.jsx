import React from 'react';
import Skills from './skills.jsx';
import Availablity from './availability.jsx';
import Type from './jobtype.jsx';
import Rate from './payrate.jsx';
import Experience from './experience.jsx';
import Countries from './countries.jsx';
import Language from './language.jsx';

class FilterComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Skills handleChange={this.props.handleChange} jobSkills={this.props.jobSkills}/>
                <Availablity jobAvailability={this.props.jobAvailability} />
                <Type jobType={this.props.jobType} />
                <Rate jobPrice={this.props.jobPrice} />
                <Experience jobExperience={this.props.jobExperience} />
                <Countries jobLocation={this.props.jobLocation} />
                <Language jobLanguage={this.props.jobLanguage} />
            </div>
        )
    }
}

export default FilterComponent;