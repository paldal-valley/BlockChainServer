const IPFS = require('ipfs-api');
// const ipfs = new IPFS({ host: '13.209.8.64', port: 80, protocol: 'http' }); // 병헌이형 AWS IPFS SERVER
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

module.exports = ipfs;
