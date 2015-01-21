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

Supported Fields:

```
title: Site Title
link: http://www.example.com
description: Just a Wordpress Site
date: Tue, 21 Jan 2015 12:00:00 +0000
siteUrl: http://www.example.com
blogUrl: http://www.example.com
items:
  - title: Hello World
    slug: hello-world
    date: Tue, 21 Jan 2015 12:00:00 +0000
    postType: post
    description: Example post
    excerpt: Hello my darlings.
    content: |
      <h2>Hello my darlings</h2>

      <p>This is a test</p>
    categories:
      - name: Example Category
        nicename: example-category
```
