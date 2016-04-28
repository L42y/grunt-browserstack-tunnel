'use strict';
module.exports = function(grunt) {
  grunt.registerMultiTask('browserstackTunnel', 'Create BrowserStack tunnel', function() {
    var options = this.options({
      accessKey: '',
      hostname: 'localhost',
      port: 3000,
      sslFlag: 0,
      force: true
    });

    var BrowserStackTunnel = require('browserstacktunnel-wrapper');
    var browserStackTunnel = new BrowserStackTunnel({
      key: options.accessKey,
      hosts: [{
        name: options.hostname,
        port: options.port,
        sslFlag: options.sslFlag
      }],
      force: options.force
    });

    var done = this.async();
    var cleanup = function () {
      grunt.log.ok('stopping tunnel');
      browserStackTunnel.stop(done);
    };
    process.stdin.resume();
    browserStackTunnel.start(function (error) {
      if (error) {
        grunt.log.error('Could not start tunnel');
        grunt.log.debug(error);
        done(false);
      } else {
        grunt.log.ok('Start tunnel successfully');
        process.on('uncaughtException', cleanup);
        process.on('exit', cleanup);
        process.on('SIGINT', cleanup);
    }});
  });
};
