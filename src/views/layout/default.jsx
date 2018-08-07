/***
 * created by yangxi 2018/1/8
 */
import React, { Component } from 'react'
import Nav from './components/nav'
import Aside from './components/aside'
import Iframe from './components/iframe'

export default class DefaultLayout extends Component {
	isAside = true
	
	render () {
		return (
			<div className="page-wrapper">
				<Nav />
				<div className="page-wrapper-content block-center d-f">
					<If condition={this.isAside}>
						<Aside />
					</If>
					<div className="page-content flex-1 h-full o-a">
						{this.props.children}
					</div>
					<Iframe/>
				</div>
			</div>
		)
	}
}
