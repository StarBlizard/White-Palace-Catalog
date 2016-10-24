'use strict';

// Start configuration service
require('nconf').argv().env().file({ file: 'config/configuration.json' });

//Start server
require('./services/database').start();i
require('./services/passport').start();
require('./services/server').start();


//Load routes
require('./routes');
