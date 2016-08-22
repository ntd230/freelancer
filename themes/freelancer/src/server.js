const React=require('react');
global.reactServer = require('react-dom/server');
global.app = React.createFactory(require('../ui/pages/index'));
