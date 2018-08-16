export default [{
	title: 'Row',
	props: [{
		name: 'gutter',
		desc: '列元素之间的间距（单位为px）',
		type: 'Number',
		default: 0,
		options: ''
	}, {
		name: 'align',
		desc: '垂直布局类型，匹配 align-items: *',
		type: 'String',
		default: '',
		options: 'flex-start|flex-end|center|baseline|stretch'
	}, {
		name: 'justify',
		desc: '水平布局类型 justify-content: *',
		type: 'String',
		default: '',
		options: 'start|center|end|space-between|space-around'
	}, {
		name: 'direction',
		desc: '水平布局或者垂直布局，匹配 flex-direction: *',
		type: 'String',
		default: '',
		options: 'column|row'
	}]
}, {
	title: 'Col',
	props: [{
		name: 'span',
		desc: '单元格宽度',
		type: 'Number|String',
		default: '',
		options: ''
	}]
}]

