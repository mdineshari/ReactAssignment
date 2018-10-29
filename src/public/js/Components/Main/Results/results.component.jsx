import React from 'react';
import {Pagination,Row,Col,Select} from 'antd';
const Option = Select.Option;

import ResultCard from './resultCard.jsx';
import './result.less';

class ResultComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div className="results_title">
                    <Row gutter={48}>
                    <div className="result_right_title">
                        <h4 className="resultHeader">RESULTS ({this.props.jobs.length})</h4>
                    </div>
                    <div className="result_left_title">
                            Sort by &nbsp; 
                            <Select 
                                style={{ width: 100 }} 
                                optionFilterProp="children" 
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                value={this.props.selectedValue} 
                                onChange={this.props.onSorting}
                            >
                                <Option value="no_sort" disabled>No Sorting</Option>
                                <Option value='job_price'>Price</Option>
                                <Option value='job_availability'>Availability</Option>
                                <Option value='job_title'>Title</Option>
                                <Option value='job_replyRate'>Reply Rate</Option>
                            </Select> 
                    </div>
                    </Row>
                    <br/><br/>
                    <ResultCard jobs = {this.props.jobs} />
                </div>
            </div>
        )
    }
}

export default ResultComponent;