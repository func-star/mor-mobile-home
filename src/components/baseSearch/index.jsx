import React from 'react';
import BaseComponent from 'components/baseComponent';

export default class BaseSearch extends BaseComponent {
	formKey = Date.now();
	
	search (e) {
		if (e && e.preventDefault) {
			e.preventDefault();
		}
		let info = this.refs.form.getInfo('name', true);
		this.onSearch(info);
	}
	
	reset () {
		this.formKey = Date.now();
		this.setState({});
		this.onSearch({});
	}
	
	onSearch (data) {
		this.props.onSearch && this.props.onSearch(data);
	}
}
