
module.exports.hello = async event => {
  
  const fetch = require('node-fetch')
  var os = require( 'os' );

  var networkInterfaces = os.networkInterfaces( ); 
  console.log( networkInterfaces );
  console.log('Fetch start')
  let a = await fetch('http://www.e-try.com/black.htm')
  
  console.log(`${JSON.stringify(a) + a.status } log out RESPONSE `)
  
  console.log('Fetch end')
  return {
    
  }
};
