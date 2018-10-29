import React from 'react';
import Availablity from './availability.jsx';
import Rate from './payrate.jsx';
import FilterHeader from './filterHeader.jsx';
import FilterSelectSearch from './filterSelectSearch.jsx';
import FilterSelectMultiple from './filterSelectMultiple.jsx';

class FilterComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <FilterHeader handleChange={this.props.handleChange}/>
                <FilterSelectMultiple handleChange={this.props.handleChange} filterObject={this.props.filterObject} method='job_skills' clearAll={this.props.clearAll} cardTitle="Skills" mode='multiple' />
                <Availablity handleChange={this.props.handleChange}  jobAvailability={this.props.filterObject.job_availability} clearAll={this.props.clearAll} />
                <FilterSelectSearch handleChange={this.props.handleChange} filterObject={this.props.filterObject} method='job_type' clearAll={this.props.clearAll} cardTitle="Job type"/>
                <Rate handleChange={this.props.handleChange}  jobPrice={this.props.filterObject.job_price} clearAll={this.props.clearAll} />
                <FilterSelectSearch handleChange={this.props.handleChange} filterObject={this.props.filterObject} method='job_experience_level' clearAll={this.props.clearAll} cardTitle="Experience Level"/>
                <FilterSelectMultiple handleChange={this.props.handleChange} filterObject={this.props.filterObject} method='job_location' clearAll={this.props.clearAll} cardTitle="Countries" mode='multiple' />
                <FilterSelectMultiple handleChange={this.props.handleChange} filterObject={this.props.filterObject} method='job_language' clearAll={this.props.clearAll} cardTitle="Languages" mode='multiple' />
            </div>
        )
    }
}

export default FilterComponent;