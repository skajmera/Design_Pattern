const fun = require('./index')

const empFactory = function(fname, lname, type){
    if(type === 'engineer'){
        return new fun.Engineer(fname,lname)
    } else if(type === 'manager') {
        return new fun.Manager(fname, lname)
    } else if(type === 'director'){
        return new fun.Director(fname, lname)
    }
}

module.exports=empFactory;