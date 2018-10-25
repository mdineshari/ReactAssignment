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
                        <Col span={8}>
                            <h4 className="resultHeader">Results ({this.props.jobs.length})</h4>
                        </Col>
                        <Col span={4}>
                        </Col>
                        <Col span={12} className="sortBy">
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
                </div>
                <br/><br/>
                <Pagination defaultCurrent={1} total={5} size="small"  />,
            </div>
        )
    }
}

export default ResultComponent;