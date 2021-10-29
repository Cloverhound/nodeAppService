const Service = require('node-windows').Service;


/*function getDir() {
    if (process.pkg) {
        return path.resolve(process.execPath + "/..");
    } else {
        return path.join(require.main ? require.main.path : process.cwd());
    }
}
*/
//using above function for a relative path.
let svc = new Service({
    name: "testApp",
    description: 'a test app as a service',
    script: 'C:\\Users\\Dan\\Documents\\nodeExecutable\\index.js',
    nodeOptions: [
        '--harmony',
        '--max_old_space_size=4096'
      ]
    // env:{
    //     name: 'NODE_ENV',
    //     value: 'dev'
    // }
})


//listen for install event which indicates
svc.on('install', function(){
    svc.start()
})

//just in case this file is run twice.
svc.on('alreadyinstalled', function(){
    console.log('this service is already installed.')
})

//listen for the start event.
svc.on('start', function(){
    console.log(svc.name + 'started, visit localhost:5000')
})

//install the script as a service.
svc.install()