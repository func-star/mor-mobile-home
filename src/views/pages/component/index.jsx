import React, { Component } from 'react'
import Router from 'moreact-router'
import Readme from 'readme/readme'

export default class Layout extends Component {
	componentWillMount () {
		this.readme = Readme[Router.current.path]
		Router.addEventListener('onChange', info => {
			this.readme = Readme[info.path]
			this.setState({})
		})
	}
	
	render () {
		return (
			<div className="mor-mobile-markdown" dangerouslySetInnerHTML={{ __html: this.readme }}></div>
		)
	}
}
