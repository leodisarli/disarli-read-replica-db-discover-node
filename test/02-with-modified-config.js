const assert = require('assert');
const getReadReplicaUrl = require('../');

const URL_CLUSTER = 'database.principal-asr3asefaw3.region.vendor.com';
const URL_CLUSTER_READ = 'database.principal-read-asr3asefaw3.region.vendor.com';
const URL_NO_CLUSTER = 'database.asr3asefaw3.region.vendor.com';
const URL_NO_CLUSTER_READ = 'database-read.asr3asefaw3.region.vendor.com';

const EXPECTED_CLUSTER_URL = 'database.principal-read-asr3asefaw3.region.vendor.com';
const EXPECTED_NO_CLUSTER_URL = 'database-read.asr3asefaw3.region.vendor.com';

options = {
  cluster_master: 'principal',
  cluster_read: 'principal-read',
  database_read: 'read',
}

describe('URLs with modified parameters', function () {
  it('Cluster master URL should return read replica URL', function () {
    var resultUrl = getReadReplicaUrl(URL_CLUSTER, options);
    assert.equal(resultUrl, EXPECTED_CLUSTER_URL);
  });

  it('Cluster read replica URL should return read replica URL', function () {
    var resultUrl = getReadReplicaUrl(URL_CLUSTER_READ, options);
    assert.equal(resultUrl, EXPECTED_CLUSTER_URL);
  });

  it('No Cluster master URL should return read replica URL', function () {
    var resultUrl = getReadReplicaUrl(URL_NO_CLUSTER, options);
    assert.equal(resultUrl, EXPECTED_NO_CLUSTER_URL);
  });

  it('No Cluster read replica URL should return read replica URL', function () {
    var resultUrl = getReadReplicaUrl(URL_NO_CLUSTER_READ, options);
    assert.equal(resultUrl, EXPECTED_NO_CLUSTER_URL);
  });
});
