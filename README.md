# Webpack Boilerplate

The aim of this repo is to demonstrate the basic concepts behind [Webpack][1], decoupled from other libraries and ideas. It accompany's [this article][2] on [The Z Index][3]. At it's core, Webpack *dynamically* bundles modularized JavaScript. However, it also encourages the bundling, and modularizing, of any other assets necessary for a client or server based project.



### The Application

To make things a little less bland, the source compiles to a basic clock. It should simple enough for easy disection, while still illustrating the main concepts of a Webpack based project.



### Takeaways

Introduces users to these concepts:

- Configuring a simple build process and dev server
- Bundling JavaScript and other assets (fonts and CSS)
- Transpiling JavaScript from ES6 to ES5 with [Babel][4]



### Set Up

Make sure `npm` and `node` are [installed][5].
Clone this repo and `cd` into it. 
`npm install` to retrieve all dependencies specified in the package.json file.
`npm run dev-server` to start a [webpack-dev-server][6].
`npm run deploy` to create a minified, "production-ready" version of the site.



## Next Steps

Check out the [variations][7] of this repo to see more advanced configuration and tools.


[1]: http://webpack.github.io/
[2]: http://thezindex.com/posts/workflow.html
[3]: http://thezindex.com/
[4]: http://babeljs.io/
[5]: https://docs.npmjs.com/getting-started/installing-node
[6]: http://webpack.github.io/docs/webpack-dev-server.html
[7]: http://https://github.com/gregvenech/webpack-boilerplate


