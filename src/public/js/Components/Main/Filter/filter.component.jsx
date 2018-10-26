import React from 'react';
import Skills from './skills.jsx';
import Availablity from './availability.jsx';
import Type from './jobtype.jsx';
import Rate from './payrate.jsx';
import Experience from './experience.jsx';
import Countries from './countries.jsx';
import Language from './language.jsx';
import FilterHeader from './filterHeader.jsx';

class FilterComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <FilterHeader handleChange={this.props.handleChange}/>
                <Skills handleChange={this.props.handleChange} jobSkills={this.props.filterObject.job_skills} clearAll={this.props.clearAll}/>
                <Availablity handleChange={this.props.handleChange}  jobAvailability={this.props.filterObject.job_availability} clearAll={this.props.clearAll} />
                <Type handleChange={this.props.handleChange}  jobType={this.props.filterObject.job_type} clearAll={this.props.clearAll} />
                <Rate handleChange={this.props.handleChange}  jobPrice={this.props.filterObject.job_price} clearAll={this.props.clearAll} />
                <Experience handleChange={this.props.handleChange}  jobExperience={this.props.filterObject.job_experience_level} clearAll={this.props.clearAll} />
                <Countries handleChange={this.props.handleChange}  jobLocation={this.props.filterObject.job_location} clearAll={this.props.clearAll} />
                <Language handleChange={this.props.handleChange}  jobLanguage={this.props.filterObject.job_language} clearAll={this.props.clearAll} />
            </div>
        )
    }
}

export default FilterComponent;