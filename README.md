# HTML Build System 

Build System for developing Html templates using Pug, Scss and Babel. 


## What's Included 

Gulp tasks: Webpack, Browser-Sync, Pug, Imagemin, copy fonts  
Webpack: Babel, Scss/Sass, Autoprefixer (_as PostCSS plugin_)


## Install

1. **yarn** (or **_npm i_**) - install dependencies
2. **yarn gulp assets** - copy fonts and images to ./dist
3. **yarn gulp** (or **_yarn run dev_**) - serve


## Usage 

**yarn gulp** - run local server and watch for file changes 

#### Gulp Tasks:

1. **yarn gulp fonts** - copy ./src/fonts -> ./dist/fonts
2. **yarn gulp imagemin** - minimize images and copy ./src/images -> ./dist/images
3. **yarn gulp assets** - runs 1st + 2nd task 