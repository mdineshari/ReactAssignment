import React from 'react';
import FilterComponent from './Filter/filter.component.jsx';

import {Layout} from 'antd';
const Content = Layout.Content;
import axios from 'axios';

import './main.less';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobSkills: [],
            jobs:[],
            filteredJobs: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        axios.get('/api/getJobSkills').then(res => {
            var jobSkills = [];
            this.setState({
                jobs: res.data
            });
            res.data.map( (ele,key) => {
                ele.job_skills.split(',').map( (e,k) => {
                    if(jobSkills.indexOf(e) < 0) {
                        jobSkills.push(e);
                    }
                });
            });
            this.setState({jobSkills});
        });
    }
    handleChange(value) {
        const filteredJobs = [];
        this.state.jobs.map( (ele,key) => {
            let found = ele.job_skills.split(',').some(r=> value.indexOf(r) >= 0);
            if(found) {
                filteredJobs.push(ele);
            }
        });
        this.setState({
            filteredJobs: filteredJobs
        });
    }

    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
                <FilterComponent handleChange={this.handleChange} jobSkills={this.state.jobSkills} filteredJobs={this.state.filteredJobs}/>
            </Content>

        )
    }
}

export default MainComponent;