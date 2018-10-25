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
                <Availablity handleChange={this.props.handleChange}  jobAvailability={this.props.jobAvailability} />
                <Type handleChange={this.props.handleChange}  jobType={this.props.jobType} />
                <Rate handleChange={this.props.handleChange}  jobPrice={this.props.jobPrice} />
                <Experience handleChange={this.props.handleChange}  jobExperience={this.props.jobExperience} />
                <Countries handleChange={this.props.handleChange}  jobLocation={this.props.jobLocation} />
                <Language handleChange={this.props.handleChange}  jobLanguage={this.props.jobLanguage} />
            </div>
        )
    }
}

export default FilterComponent;