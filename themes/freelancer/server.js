const fs = require('fs');
require('./assets/node.bundle');
global.app({fs:fs, process:process, JSON:JSON, Buffer:Buffer});
