const gulp  = require('gulp')
const{src,dest } = gulp
const fileIndcude = require('gulp-file-include')
const htmlMin = require('gulp-htmlmin')
const size = require('gulp-size')
const plumber = require('gulp-plumber')
const options = require('../optionsPlagins')
const webpHtml = require('gulp-webp-html-nosvg')
const html = (assets,build)=>{
    console.log('work with html'+`:${assets}->${build}`)
    return src(assets)
        .pipe(plumber(options.plumberHTML))
        .pipe(fileIndcude())
        .pipe(size({title:'before minimalist.'}))
        .pipe(htmlMin(options.htmlMin))
        .pipe(webpHtml())//для вставки конструкции picture вместо img
        .pipe(size({title:'after minimalist.'}))
        .pipe(dest(build))
}
module.exports = html;