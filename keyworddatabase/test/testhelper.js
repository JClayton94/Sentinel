let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://localhost:27017/testdatabase');
 mongoose.connection.once('open',()=>console.log('connected'))
                    .on('error',(error)=>{
                        console.warn('Error',error);
                    });
beforeEach((done)=>{
    mongoose.connection.collections['keywords'].drop(()=>{
        console.log('dropped collection');
        done();
    });
})
