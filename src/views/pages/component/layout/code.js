class Code {
	constructor () {
		for (let i = 0; i < this.demoCode1; i++) {
			console.log(this.demoCode1[i])
		}
		this.demoCode1 = this.demoCode1.replace('   ', '')
	}
	
	useCode = `import {Row, Col} from 'mona'`
	
	demoCode1 =
`<Row>
    <Col span={12}>span: 12</Col>
    <Col span={12}>span: 12</Col>
</Row>
<Row>
    <Col span={8}>span: 8</Col>
    <Col span={8}>span: 8</Col>
    <Col span={8}>span: 8</Col>
</Row>
<Row>
    <Col span={6}>span: 6</Col>
    <Col span={6}>span: 6</Col>
    <Col span={6}>span: 6</Col>
    <Col span={6}>span: 6</Col>
</Row>`
}

export default new Code
