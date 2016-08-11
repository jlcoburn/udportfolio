## Website Optimization Project

### How to access the portfolio.

View the [Live Version](http://www.slickotter.com/mobilep).

View the source on [Github](https://github.com/jlcoburn/udportfolio).

###Changelog

####index.html

*  Removed external fonts
*  Removed google analytics script
*  Inlined styles.css and print.css into index.html

####main.js

*  Moved selectors out of loops to reduce forced layout/reflow
*  Added code to change number of pizzas on screen based on screen height

###Tools used in buliding the site

[MAMP](https://www.mamp.info): Local web server  
[Ngrok](https://ngrok.com): Expose local web server to the internet  
[Gulp](http://gulpjs.com): Automated build system.  

####Gulp modules

[clean-CSS](https://github.com/scniro/gulp-clean-css)  
[html-min](https://www.npmjs.com/package/gulp-htmlmin)  
[imagemin](https://www.npmjs.com/package/gulp-imagemin)  

Install GULP (node.js required)  
*  npm install --global gulp-cl  
*  npm init  
*  npm install --save-dev gulp  
 
Install all listed gulp modules  
*  npm install gulp-clean-css --save-dev  
*  npm i -g html-min  
*  npm install --save imagemin  

Run 'gulp build' from project directory.   
Replace style section in dist/index.html with minified dist/css/style.css.    

###Issues

Need to figure out how to automate adding minified CSS to html files.   






