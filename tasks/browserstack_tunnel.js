'use strict';
module.exports = function(grunt) {
  var browserStackTunnel;
  grunt.registerMultiTask('browserstackTunnel', 'Create BrowserStack tunnel', function() {
    var options = this.options({
      accessKey: '',
      hostname: 'localhost',
      port: 3000,
      sslFlag: 0
    });

    var BrowserStackTunnel = require('browserstacktunnel-wrapper');
    browserStackTunnel = new BrowserStackTunnel({
      key: options.accessKey,
      hosts: [{
        name: options.hostname,
        port: options.port,
        sslFlag: options.sslFlag
      }]
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

  grunt.registerMultiTask('browserstackTunnel-close', 'Close BrowserStack tunnel', function() {
    var done = this.async();

    var options = this.options({
      accessKey: '',
      hostname: 'localhost',
      port: 3000,
      sslFlag: 0
    });

    var BrowserStackTunnel = require('browserstacktunnel-wrapper');
    browserStackTunnel = new BrowserStackTunnel({
      key: options.accessKey,
      hosts: [{
        name: options.hostname,
        port: options.port,
        sslFlag: options.sslFlag
      }]
    });

    browserStackTunnel.stop(function(err) {
      if(err) {
        grunt.log(err);
        done(err);
      }

      grunt.log.ok('Browserstack tunnel closed');
      done();
    });
  })
};
