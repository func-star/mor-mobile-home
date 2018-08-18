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
	componentDidMount () {
		this.wrap = this.refs.wrap
		this.ctrlIframe(Router.current, false)
		Router.addEventListener('onChange', res => {
			this.wrap.scrollTop = 0
			this.ctrlIframe(res, true)
			this.setState({})
		})
	}
	
	ctrlIframe (curretRouter, isInited) {
		this.routeInfo = curretRouter
		if (isInited) {
			monajsIframe.window.location.hash = '#' + this.routeInfo.path.replace('component/', '')
		} else {
			monajsIframe.onload = () => {
				monajsIframe.window.location.hash = '#' + this.routeInfo.path.replace('component/', '')
			}
		}
		this.showIframe = this.routeInfo.path.indexOf('component/') !== 0
	}
	
	isAside = true
	
	render () {
		return (
			<div className="page-wrapper">
				<Nav />
				<div className="page-wrapper-content block-center d-f">
					<If condition={this.isAside}>
						<Aside />
					</If>
					<div className="page-content flex-1 h-full o-a" ref="wrap">
						{this.props.children}
					</div>
					<Iframe name="monajsIframe" className={classNames({ 'page-iframe-hide': this.showIframe })} />
				</div>
			</div>
		)
	}
}
