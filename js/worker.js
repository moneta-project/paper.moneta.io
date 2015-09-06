try {
  importScripts("crypto.js");
  importScripts("jsbn2.js");
  importScripts("moneta.js");
} catch(e) {}

onmessage = function(event) {
  var array32byte = event.data;
  var eckey = new Moneta.ECKey(array32byte);
  var MONETaddress = eckey.getMonetaAddress().toString();
  var privateKeyWIF = new Moneta.Address(array32byte);
  privateKeyWIF.version = 0x80;
  MONETprivateKey = privateKeyWIF.toString();
  var x = new Object();
  x.address = MONETaddress;
  x.key = MONETprivateKey;
  this.postMessage(x);
};
