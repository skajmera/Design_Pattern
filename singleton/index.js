// class DatabaseConnection {
//     constructor() {
//       this.databaseConnection = 'dummytext';
//     }
//     getNewDBConnection() {
//       return this.databaseConnection;
//     }
//   }

//   class Singleton {
//     constructor() {
//       throw new Error('Use the getInstance() method on the Singleton object!');
//     }
  
//     getInstance() {
//       if (!Singleton.instance) {
//         Singleton.instance = new DatabaseConnection();
//       }
  
//       return Singleton.instance;
//     }
//   }
  
// // //   module.exports = Singleton;
// // var instance1 = Singleton;
// // console.log(instance1)
//   ////////////////////////////////////


// // run()

///////////////////////////////////

var Singleton = (function () {
  var instance;

  function createInstance() {
      var object = new Object("I am the instance");
      return object;
  }

  return {
      getInstance: function () {
          if (!instance) {
              instance = createInstance();
          }
          return instance;
      }
  };
})();

function run() {

  var instance1 = Singleton.getInstance();
  console.log(instance1)
  var instance2 = Singleton.getInstance()
  console.log(instance2)


  console.log("Same instance? " + (instance1 === instance2));
}

run()