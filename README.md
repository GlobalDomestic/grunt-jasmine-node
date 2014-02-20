# grunt-jasmine-node

> Grunt task for running jasmine-node

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install git://github.com/GlobalDomestic/grunt-jasmine-node.git --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jasmine-node');
```

## The "jasmine_node" task

### Overview
In your project's Gruntfile, add a section named `jasmine_node` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jasmine_node: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.isVerbose
Type: `Boolean`
Default value: `false`

Verbose output as the specs are run.

#### options.showColors
Type: `Boolean`
Default value: `true`

Indicates spec output should uses color to indicates passing (green) or failing (red) specs.

#### options.teamcity
Type: `Boolean` or `String`
Default value: `process.env.TEAMCITY_PROJECT_NAME` or `false`

Converts all console output to teamcity custom test runner commands. (Normally auto detected.).

#### options.useRequireJs
Type: `Boolean`
Default value: `false`

File run before specs to include and configure RequireJS.

#### options.junitreport
Type: `Object`
Default value: `Object`
```js
{
  report: false,
  savePath : './reports/',
  useDotNotation: true,
  consolidate: true
}
```
Export tests results as junitreport xml format.

#### options.includeStackTrace
Type: `Boolean`
Default value: `true`

Show the stack trace generated from a test failure.

#### options.growl
Type: `Boolean`
Default value: `false`

Display test run summary in a growl notification (in addition to other outputs).

### Usage Examples

#### Default Options
In this example, th

```js
grunt.initConfig({
  jasmine_node: {
    options: {},
    files: {
      'src': ['**/*test.js'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
