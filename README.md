badwords-list v1.0.0
========

A highly consumable list of bad (profanity) words in several languages based on:

* English: the nice short and simple list found in [Google's "what do you love" project](http://www.wdyl.com/) made accessable by [Jamie Wilkinson](https://gist.github.com/jamiew) [here](https://gist.github.com/jamiew/1112488)
* Indonesian: [kaskus](https://www.kaskus.co.id/thread/54d98d18118b468a558b4567/daftar-kata-kata-kotor-di-indonesia-yang-sering-diucapkan/) and [lamhotsimamora's](https://github.com/lamhotsimamora/Filter-Kata-Kotor) and [Hendy Irawan's own knowledge](https://hendyirawan.com/). The source file is `lib/id/patterns.js`, run `generate-id.js` to generate `lib/id/array.js` file.
* Russian: [bigearsenal's pull request](https://github.com/web-mech/badwords/pull/37)

Inspired by [badwords](https://github.com/MauriceButler/badwords)

This data has been exposed as an object that contains:

 - `array` (all languages): an array of plain words
 - `object` (`en` only): an object
 - `regexp` (`en` only): a regular expression
 - `patterns` (`id` only): an array of wildcard patterns

depending on what is required for your purposes.


Install
=======

    npm install badwords-list

Usage
=====

```
# English
var list_en = require('badwords-list'),
	array_en = list_en.array,
	object_en = list_en.object,
	regex_en = list_en.regex;
# Indonesian
var list_id = require('badwords-list/id'),
	array_id = list_id.array,
	patterns_id = list_id.patterns;
# Russian
var list_ru = require('badwords-list/ru'),
	array_ru = list_ru.array;
```

Testing
=======

#### Requires
- Mocha
- better-assert


```
npm test
```

**or**

```
REPORTER=spec make
```

**or**

```
mocha
```



