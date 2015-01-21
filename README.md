# wp-yaml

[![npm version](https://badge.fury.io/js/wp-yaml.svg)](http://badge.fury.io/js/wp-yaml)
[![Build Status](https://travis-ci.org/alexsomeoddpilot/wp-yaml.svg)](https://travis-ci.org/alexsomeoddpilot/wp-yaml)
[![Dependency Status](https://david-dm.org/alexsomeoddpilot/wp-yaml.svg)](https://david-dm.org/alexsomeoddpilot/wp-yaml)
[![devDependency Status](https://david-dm.org/alexsomeoddpilot/wp-yaml/dev-status.svg)](https://david-dm.org/alexsomeoddpilot/wp-yaml#info=devDependencies)

Node utility for converting YAML file to Wordpress XML

To get started:

```
npm install -g wp-yaml
```

To transform a YAML file, pass a file path:

```bash
wp-yaml parse -i test/test.yaml
```

By default the command will output to stdout. If you want to write directly to a file, you can pass an output path:

```bash
wp-yaml parse -i test/test.yaml -o result.xml
```
