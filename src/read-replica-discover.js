function getReadReplicaUrl(databaseUrl, options) {
  const default_option = {
    cluster_master: 'cluster',
    cluster_read: 'cluster-ro',
    database_read: 'read-replica',
  }

  if (typeof options == 'undefined') options = default_option;
  if (typeof options.cluster_master != 'string') options.cluster_master = default_option.cluster_master;
  if (typeof options.cluster_read != 'string') options.cluster_read = default_option.cluster_read;
  if (typeof options.database_read != 'string') options.database_read = default_option.database_read;
  
  var hasCluster = databaseUrl.includes(options.cluster_master);
  var hasRo = databaseUrl.includes(options.cluster_read);
  var hasReadReplica = databaseUrl.includes(options.database_read);

  if (hasCluster && !hasRo) {
    databaseUrl = databaseUrl.replace(options.cluster_master, options.cluster_read);
    return databaseUrl;
  }
  if (hasCluster && hasRo) {
    return databaseUrl;
  }
  if (!hasReadReplica) {
    var splited = [];
    splited = databaseUrl.split(".");
    databaseUrl = databaseUrl.replace(splited[0], splited[0] + "-" + options.database_read);
  }
  return databaseUrl;
}

module.exports = getReadReplicaUrl;