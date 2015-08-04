# reelyActive's Angular.js Guide

Here we summarise the best practices, coding standards and tools for all our web development using AngularJS, HTML and CSS.


## Existing Standards

Fortunately, we aren't the first to code for Angular.js, and there are some good style guides out there from which to draw inspiration.  Remember, the reason for following (de facto) standards is to facilitate both collaboration and consistency.

Note also that we strive to follow standards which are complementary to those of our [node-style-guide](https://github.com/reelyactive/node-style-guide).


### Google's JavaScript Style Guide

[Read it](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).  Please take extra care in reading the following three sections:

#### Naming

The very explicit [Naming Style Rules](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=Naming#Naming) provide more than simple DOs and DONTs, they also explain why the given practices are encouraged.  They also reinforce Felix's naming guidelines, for example:

- functionNamesLikeThis,
- variableNamesLikeThis,
- ClassNamesLikeThis,
- EnumNamesLikeThis,
- methodNamesLikeThis,
- CONSTANT_VALUES_LIKE_THIS,
- foo.namespaceNamesLikeThis.bar, and
- filenameslikethis.js

#### Code Formatting

The very explicit [Code Formatting Style Rules](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=Code_formatting#Code_formatting) provide all the examples you need to resolve ambiguities.  Keep in mind that Google follows the C++ formatting rules in spirit.  How about an example pertaining to a common source of contention: Function Arguments?

> When possible, all function arguments should be listed on the same line. If doing so would exceed the 80-column limit, the arguments must be line-wrapped in a readable way. To save space, you may wrap as close to 80 as possible, or put each argument on its own line to enhance readability. The indentation may be either four spaces, or aligned to the parenthesis.

#### Comments

The very explicit [Comments Style Rules](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=Comments#Comments) also follow the C++ rules in spirit and specifically use [JSDoc](http://usejsdoc.org/).  There are many illustrative examples.  Read them!  And remember:

> Inline comments should be of the // variety.


## reelyActive Standards

The existing standards above cover a lot, but they don't cover everything.  So we're establishing a few of our own internal standards which are specifically suited to our projects and workflow.

### Coding Style

#### Two Spaces

Felix, creator of [Felix's Node.js Style Guide](https://github.com/felixge/node-style-guide), sums up this rule most eloquently:

> Use 2 spaces for indenting your code and swear an oath to never mix tabs and spaces - a special kind of hell is awaiting you otherwise.

This is how we do it in Node and this is how we do it in Angular, HTML and CSS.

#### Copyright

Every JavaScript file should start with the following comment:

    /**
     * Copyright reelyActive 2014-2015
     * We believe in an open Internet of Things
     */

The use of a copyright indicates that the code is intellectual property created by reelyActive.

Note that the date range should extend between the year the file was initially created to the year the file was last modified.  This is a simple way to provide a brief historical perspective of the code.

The line _"We believe in an open Internet of Things"_ serves as a reminder of our vision and should inspire the developer to maintain the code in a way befitting of an open project with many collaborators.


### Frameworks

There are plenty of great frameworks out there but you have to make a choice.  We use:
- [AngularJS](https://angularjs.org/) for all our client-side JavaScript needs
- [Angular Bootstrap UI](https://angular-ui.github.io/bootstrap/) for efficient interactive components
- [socket.io]() for real-time interaction, when required
- [D3.js](http://d3js.org/) for live/interactive graphics, when required
- [Bootstrap CSS](http://getbootstrap.com/css/) for style

No additional frameworks shall be used without the express written consent of the style guardians.

#### Framework CDNs

There are plenty of great CDNs for the plenty of great frameworks out there, but again, you have to make a choice.  We use CloudFlare and the minified versions of the files.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.13.2/ui-bootstrap-tpls.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.3.6/socket.io.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet"/>
```

No additional CDNs shall be used without the express written consent of the style guardians.  Keep in mind that some CDNs are inaccessible in some regions (we learned this firsthand in China), hence our insistence on consistency.  Local hosting for offline deployments is acceptable.


License
-------

MIT License

Copyright (c) 2015 reelyActive

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.

