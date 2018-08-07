import React, { Component } from 'react';
import { render } from 'react-dom';
import Router from 'components/router';
import RouterConf from './routeConf';

import 'app.less';

//*************项目路由**************
render(<Router conf={RouterConf} />, document.getElementById('appWrapper'));

