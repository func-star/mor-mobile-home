/***
 * created by yangxi 2018/1/8
 */
import React, { Component } from 'react'
import classNames from 'classnames'
import Nav from './components/nav'
import Aside from './components/aside'
import Iframe from './components/iframe'
import Router from 'moreact-router'

export default class DefaultLayout extends Component {
	componentWillMount () {
		this.routeInfo = Router.current
		this.showIframe = this.routeInfo.path.indexOf('component/') !== 0
		Router.addEventListener('onChange', res => {
			this.routeInfo = res
			this.showIframe = this.routeInfo.path.indexOf('component/') !== 0
		})
	}
	
	isAside = true
	
	render () {
		const iFrameUrl = this.routeInfo.path.replace('component/', '')
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
					<Iframe url={iFrameUrl} className={classNames({ 'page-iframe-hide': this.showIframe })} />
				</div>
			</div>
		)
	}
}
