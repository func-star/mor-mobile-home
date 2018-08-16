import Util from 'core/util'

class Code {
	constructor () {
		this.demoCode1 = Util.optionCode(this.demoCode1)
		this.demoCode2 = Util.optionCode(this.demoCode2)
		this.demoCode3 = Util.optionCode(this.demoCode3)
		this.demoCode4 = Util.optionCode(this.demoCode4)
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
	
	demoCode2 =
`<Row gutter={10}>
	<Col span={12}>
		<div>gutter: 10px</div>
	</Col>
	<Col span={12}>
		<div>gutter: 10px</div>
	</Col>
</Row>`
	
	demoCode3 =
`<Row align="center" justify="center">
	<Col span={6}>span: 6</Col>
	<Col span={6}>span: 6</Col>
</Row>`
	
	demoCode4 =
`<Row gutter={10} direction="column" align="center" justify="center">
	<Col span={6}>span: 6</Col>
	<Col span={6}>span: 6</Col>
</Row>`
}

export default new Code
