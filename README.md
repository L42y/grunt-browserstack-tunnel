# grunt-browserstack-tunnel

Create tunnel between your machine and [BrowserStack](http://www.browserstack.com/) remote browsers.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-browserstack-tunnel --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-browserstack-tunnel');
```

## The "browserstackTunnel" task

### Overview
In your project's Gruntfile, add a section named `browserstackTunnel` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  browserstackTunnel: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.accessKey
Type: `String`
Default value: `''`

Your BrowserStack account's access key, get it from [here](https://www.browserstack.com/accounts/automate).

#### options.hostname
Type: `String`
Default value: `'localhost'`

Tunnel's hostname.

#### options.port
Type: `Number`
Default value `'3000'`

Which port

#### options.sslFlag
Type: `Number`
Default value `0`

Whether to use HTTPS

#### options.force
Type: `Boolean`
Default value `true`

Kill other running instances of BrowserStack Local.

### Usage Examples

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  browserstackTunnel: {
    options: {
      accessKey: 'fakeKey'
    },
    development: {
      options: {
        port: 9000
      }
    },
  },
})
```

## License

[WTFPL](http://wtfpl.org)

## Release History

### 0.1.0

Initial release
