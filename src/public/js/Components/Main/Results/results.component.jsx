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
            <div className="results_title">
                <Row gutter={48}>
                    <Col span={8}>
                        <h4>Results ({this.props.jobs.length})</h4>
                    </Col>
                    <Col span={4}>
                    </Col>
                    <Col span={12}>
                        <span>Sort by &nbsp; 
                            <Select style={{ width: 100 }} optionFilterProp="children" filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                                <Option value='Relevance'>Relevance</Option>
                                <Option value='Price'>Price</Option>
                            </Select> 
                        </span>
                    </Col>
                </Row>
                <br/><br/>
                <ResultCard jobs = {this.props.jobs} />
                <Pagination defaultCurrent={1} total={10} />,

            </div>
        )
    }
}

export default ResultComponent;