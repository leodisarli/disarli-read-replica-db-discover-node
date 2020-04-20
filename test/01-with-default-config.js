const assert = require('assert');
const getReadReplicaUrl = require('../');

const URL_CLUSTER = 'database.cluster-asr3asefaw3.region.vendor.com';
const URL_CLUSTER_READ = 'database.cluster-ro-asr3asefaw3.region.vendor.com';
const URL_NO_CLUSTER = 'database.asr3asefaw3.region.vendor.com';
const URL_NO_CLUSTER_READ = 'database-read-replica.asr3asefaw3.region.vendor.com';

const EXPECTED_CLUSTER_URL = 'database.cluster-ro-asr3asefaw3.region.vendor.com';
const EXPECTED_NO_CLUSTER_URL = 'database-read-replica.asr3asefaw3.region.vendor.com';

describe('URLs with default parameters', function () {
  it('Cluster master URL should return read replica URL', function () {
    var resultUrl = getReadReplicaUrl(URL_CLUSTER);
    assert.equal(resultUrl, EXPECTED_CLUSTER_URL);
  });

  it('Cluster read replica URL should return read replica URL', function () {
    var resultUrl = getReadReplicaUrl(URL_CLUSTER_READ);
    assert.equal(resultUrl, EXPECTED_CLUSTER_URL);
  });

  it('No Cluster master URL should return read replica URL', function () {
    var resultUrl = getReadReplicaUrl(URL_NO_CLUSTER);
    assert.equal(resultUrl, EXPECTED_NO_CLUSTER_URL);
  });

  it('No Cluster read replica URL should return read replica URL', function () {
    var resultUrl = getReadReplicaUrl(URL_NO_CLUSTER_READ);
    assert.equal(resultUrl, EXPECTED_NO_CLUSTER_URL);
  });
});
