import React from 'react';
import FilterComponent from './Filter/filter.component.jsx';
import ResultComponent from './Results/results.component.jsx';
import SideBarComponent from './Sidebar/sidebar.component.jsx';
import {Layout, Row, Col} from 'antd';
const Content = Layout.Content;
import axios from 'axios';

import './main.less';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs:[],
            filterObject:{
                job_skills: [],
                job_availability: [],
                job_type: [],
                job_experience_level: [],
                job_location: [],
                job_language: [],
                job_price: []
            },
            filteredJobs: [],
            resultObject: {
                job_skills: [],
                job_availability: [],
                job_type: null,
                job_experience_level: null,
                job_location: [],
                job_language: [],
                job_price: null
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        axios.get('/api/getJobSkills').then(res => {
            let newobject=this.state.filterObject;
            this.setState({
                jobs: res.data
            });
            res.data.map( (ele,key) => {
                for(var key in ele) {
                    if(key=='job_skills') {
                        ele[key].split(',').map( (e,k) => {
                            if(newobject[key] && newobject[key].indexOf(e) < 0) {
                                newobject[key].push(e);
                            }
                        });
                    } else {
                        if(newobject[key] && newobject[key].indexOf(ele[key]) < 0 && ele[key] != null) {
                            newobject[key].push(ele[key]);
                        }
                    }
                }
            });
            this.setState({
                filterObject: newobject
            });
        });
    }
    handleChange(method,value) {
        let newobject=this.state.resultObject;
        newobject[method] = value;
        this.setState({
            resultObject: newobject
        });
        let that = this;
        let resultObject = that.state.jobs.filter(entry => {
            for (var k in that.state.resultObject) {
                if(that.state.resultObject[k] && typeof(that.state.resultObject[k]) == 'object') {
                    if(k == 'job_skills') {
                        if(entry[k].split(',').some(r=> that.state.resultObject[k].indexOf(r) >= 0)) {
                            return true;
                        }
                    } else {
                        console.log(that.state.resultObject[k]);
                        if(that.state.resultObject[k] && that.state.resultObject[k].length > 0 && that.state.resultObject[k].indexOf(entry[k]) >=0) {
                            return true
                        }
                    }

                        
                } else {
                    if(that.state.resultObject[k] === entry[k]) {
                        return true;
                    }
                }
            }
        });
        this.setState({
            resultObject
        });
        console.log(this.state.resultObject);
    }

    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <FilterComponent handleChange={this.handleChange} filterObject={this.state.filterObject} />
                    </Col>
                    <Col span={12}>
                        <ResultComponent jobs={this.state.resultObject} />
                    </Col>
                    <Col span={4}>
                        <SideBarComponent />
                    </Col>
                </Row>
            </Content>

        )
    }
}

export default MainComponent;