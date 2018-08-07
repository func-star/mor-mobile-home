import React, { Component } from 'react';
import BaseComponent from 'components/baseComponent';

export default class BaseList extends BaseComponent {
	state = {
		pageNum: 1,
		pageSize: 10,
		total: 0,
		list: [],
	};
	listQueryInfo = {};
	
	search (data) {
		this.query(data);
	}
	
	getList () {
		if (this.getListCheck && !this.getListCheck()) {
			return;
		}
		let paramsAppend;
		if (this.getParamsAppend) {
			paramsAppend = this.getParamsAppend();
		}
		let data = Object.assign({
			pageNum: this.state.pageNum,
			pageSize: this.state.pageSize,
		}, paramsAppend, this.listQueryInfo);
		this.hasLoad = false;
		return this.server(data).then((res) => {
			if (this.unmount) {
				return;
			}
			this.hasLoad = true;
			this.setState(res.data, () => {
				if (this.onListChange) {
					this.onListChange();
				}
			});
		});
	}
	
	query (data) {
		this.state.pageNum = 1;
		this.setState({});
		this.listQueryInfo = data;
		this.getList();
	}
	
	changePage (page) {
		this.state.pageNum = page;
		this.onPageChange && this.onPageChange();
		this.getList();
	}
	
	changePageSize (page, pageSize) {
		this.state.pageNum = page;
		this.state.pageSize = pageSize;
		this.changePage(page);
	}
}
