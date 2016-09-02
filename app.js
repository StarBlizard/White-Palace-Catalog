'use strict';

// Start configuration service
require('nconf').argv().env().file({ file: 'config/configuration.json' });

//Start server
require('./services/passport').start();
require('./services/server').start();
require('./services/database').start();

//Load routes
require('./routes');
