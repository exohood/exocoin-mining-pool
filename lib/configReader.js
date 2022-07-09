var fs = require('fs');

var configFile = (function(){
    for (var i = 0; i < process.argv.length; i++){
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();


try {
    global.config = JSON.parse(fs.readFileSync(configFile));
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

global.version = "v0.99.3.3";
global.devDonationAddress = '713ca310097e8d894fbd7adf9285a2759b5f64004028bd5074daedde138052c109178a10fa5db10a0b4e86ce817500f';
global.coreDevDonationAddress = 'fcc586c9fc55404a539f0c164701808d979ce3a9ef8ba1daeb42aca3b9049c115155fd622717477112bea8a2ee3bd63';
global.doDonations =  devDonationAddress[0] === config.poolServer.poolAddress[0] && (
    config.blockUnlocker.devDonation > 0 || config.blockUnlocker.coreDevDonation > 0
);
