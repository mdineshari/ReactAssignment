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
                <Skills handleChange={this.props.handleChange} jobSkills={this.props.filterObject.job_skills}/>
                <Availablity handleChange={this.props.handleChange}  jobAvailability={this.props.filterObject.job_availability} />
                <Type handleChange={this.props.handleChange}  jobType={this.props.filterObject.job_type} />
                <Rate handleChange={this.props.handleChange}  jobPrice={this.props.filterObject.job_price} />
                <Experience handleChange={this.props.handleChange}  jobExperience={this.props.filterObject.job_experience_level} />
                <Countries handleChange={this.props.handleChange}  jobLocation={this.props.filterObject.job_location} />
                <Language handleChange={this.props.handleChange}  jobLanguage={this.props.filterObject.job_language} />
            </div>
        )
    }
}

export default FilterComponent;