const ReadReplicaUrl = require('../');

console.log('With default options');
var urlClusterDefault = 'database.cluster-asr3asefaw3.region.vendor.com';
var urlClusterReadDefault = 'database.cluster-ro-asr3asefaw3.region.vendor.com';
var urlNotClusterDefault = 'database.asr3asefaw3.region.vendor.com';
var urlNotClusterReadDefault = 'database-read-replica.asr3asefaw3.region.vendor.com';

console.log(ReadReplicaUrl(urlClusterDefault));
console.log(ReadReplicaUrl(urlClusterReadDefault));
console.log(ReadReplicaUrl(urlNotClusterDefault));
console.log(ReadReplicaUrl(urlNotClusterReadDefault));

console.log('========================================');

console.log('With modified options');
var urlCluster = 'database.master-asr3asefaw3.region.vendor.com';
var urlClusterRead = 'database.master-rr-asr3asefaw3.region.vendor.com';
var urlNotCluster = 'database.asr3asefaw3.region.vendor.com';
var urlNotClusterRead = 'database-rr.asr3asefaw3.region.vendor.com';

options = {
  cluster_master: 'master',
  cluster_read: 'master-rr',
  database_read: 'rr',
}

console.log(ReadReplicaUrl(urlCluster, options));
console.log(ReadReplicaUrl(urlClusterRead, options));
console.log(ReadReplicaUrl(urlNotCluster, options));
console.log(ReadReplicaUrl(urlNotClusterRead, options));

