import React from 'react';
import {Card, Row, Col, Button, Anchor} from 'antd';
const { Link } = Anchor;

class SideBarComponent extends React.Component {
    render() {
        return(
            <div>
                <Card
                    title=""
                    style={{ width: 300 }}
                >
                    <div className="logoImageContainer">
                        <img src="" />
                    </div>
                        <p>Track Time on Hubstaff</p>
                        <p>Pay only for the hours worked</p>

                        <Button type="primary">Sign Up</Button>
                        <Anchor affix={false}>
                            <Link href="#components-anchor-demo-basic" title="Learn More" />
                        </Anchor>
                </Card>

                <Card
                    title="TOP JOBS"
                    style={{ width: 300 }}
                >
                    <Row gutter={16}>
                        <Col span={18}>
                            <h3>Senior Ruby on Rails Engineer</h3>
                        </Col>
                        <Col span={6}>
                            <p>$60/hr</p>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={20}>
                            <p>Lorem Ipsum dolor sit almet, consect velit vulputate eu pharetra nec.</p>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={18}>
                            <h3>Senior Product Designer</h3>
                        </Col>
                        <Col span={6}>
                            <p>$45/hr</p>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={20}>
                            <p>Lorem Ipsum dolor sit almet, consect velit vulputate eu pharetra nec.</p>
                        </Col>
                    </Row>
                </Card>

                <Card
                    title="MOST VIEWED THIS WEEK"
                    style={{ width: 300 }}
                >
                    <Row gutter={16}>
                        <Col span={18}>
                            <h3>Senior Ruby on Rails Engineer</h3>
                        </Col>
                        <Col span={6}>
                            <p>$60/hr</p>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={20}>
                            <p>Lorem Ipsum dolor sit almet, consect velit vulputate eu pharetra nec.</p>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={18}>
                            <h3>Senior Product Designer</h3>
                        </Col>
                        <Col span={6}>
                            <p>$45/hr</p>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={20}>
                            <p>Lorem Ipsum dolor sit almet, consect velit vulputate eu pharetra nec.</p>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default SideBarComponent;