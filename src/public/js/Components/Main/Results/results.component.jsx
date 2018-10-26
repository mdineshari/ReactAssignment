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
                            <Select style={{ width: 100 }} optionFilterProp="children" filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                                <Option value='Relevance'>Relevance</Option>
                                <Option value='Price'>Price</Option>
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