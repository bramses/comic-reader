# comic-reader

Welcome to comic-reader! 

## Motivation

I was thinking of a quote from one of my favorite comics the other day, Hunter x Hunter. I dreamed of a extremely fast database one that could index thousands of comic book pages instantly and return only the pages I want to see. 

I was also interested in the other facets of the art of comics/manga, for example, emotions, scenes and the characters present in a panel. because comics are imbedded with their own artwork, a plain text search, while useful, won't allow us to truly take advantage of all the data points comics provide us. For this project, there needed to be a way to index multiple fields extremely quickly allowing users to see what pages contain their favorite characters or moments.


## UI

Before searching for a quote, users will be greeted by the chapter cover only, as well as how many pages are in the chapter.

After searching, users will be able to see panels matching their specific quote, emotion, or character!

## Examples

Try searching _"Mito"_, or _"So it's about time I met him!"_!

## Future Direction

While working on this project I noticed that transcribing information from comics is pretty difficult for a computer, especially since many comic words are onomatopoeia! Not to mention different art styles, subtle facial expressions, and dialogue that can move from one panel to the next. There are many problems in this space to be solved!

Future work would include:
* A larger compendium of comics
* Amazon MTurk to be able to build records for multiple comic quickly
* OCR for auto text detection
* Tree Menus for an entire database of comics! Allowing users to fly through multiple series in a single filter!


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
