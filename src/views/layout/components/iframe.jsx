/***
 * created by yangxi 2018/8/5
 */
import React, { Component } from 'react'
import menusData from 'data/menus'
import classNames from 'classnames'

export default class iframe extends Component {
	render () {
		const {
			className,
			...props
		} = this.props
		let iframeUrl = 'h5/v0.x.x#'
		if (window.location.port) {
			iframeUrl = 'static/' + iframeUrl
		}
		return (
			<div className={classNames('page-iframe h-full o-a', className)}>
				<div className="pape-iframe-content">
					<div className="page-iframe-header"></div>
					<div className="page-iframe-wrap w-full">
						<iframe src={iframeUrl} frameBorder="0" className="full" {...props}></iframe>
					</div>
				</div>
			</div>
		)
	}
}
