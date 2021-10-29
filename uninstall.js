const Service = require('node-windows').Service;

function getDir() {
    if (process.pkg) {
        return path.resolve(process.execPath + "/..");
    } else {
        return path.join(require.main ? require.main.path : process.cwd());
    }
}

//create a new service obj
let service = new Service({
    name: 'testApp',
    description: 'a test app as a service',
    script: require('path').join(getDir() + 'index.js')
})

svc.on('uninstall', function(){
    console.log('uninstall complete.')
    console.log('the service exists: ', svc.exists);
})

svc.uninstall()

