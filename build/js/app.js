!function o(n,t,e){function r(i,s){if(!t[i]){if(!n[i]){var a="function"==typeof require&&require;if(!s&&a)return a(i,!0);if(u)return u(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var c=t[i]={exports:{}};n[i][0].call(c.exports,function(o){var t=n[i][1][o];return r(t?t:o)},c,c.exports,o,n,t,e)}return t[i].exports}for(var u="function"==typeof require&&require,i=0;i<e.length;i++)r(e[i]);return r}({1:[function(o,n,t){function e(o,n){this.title=o,this.body=n}e.prototype.wordCount=function(){return bodySentence=this.body,bodyArray=bodySentence.split(" "),finalCount=bodyArray.length,finalCount},e.prototype.vowels=function(){return vowel_count=0,this.body.toLowerCase().split("").forEach(function(o){/[aeiou]/.test(o)&&vowel_count++}),vowel_count},e.prototype.consonants=function(){return consonants_count=0,this.body.toLowerCase().split("").forEach(function(o){/[aeiou \s]/.test(o)||consonants_count++}),consonants_count},t.wordCountModule=e},{}],2:[function(o,n,t){var e=o("./../js/journal.js").wordCountModule;$(document).ready(function(){$("#journal-form").submit(function(o){o.preventDefault();var n=$("#title").val(),t=$("#body").val(),r=new e(n,t),u=r.wordCount(),i=r.vowels(),s=r.consonants();$("#solution").append("<h3>"+n+"</h3>"),$("#solution").append("<h4>"+t+"</h4><hr>"),$("#solution").append("<li>"+u+" words in body</li>"),$("#solution").append("<li>"+i+" vowels in body</li>"),$("#solution").append("<li>"+s+" consonants in body</li>")})})},{"./../js/journal.js":1}]},{},[2]);