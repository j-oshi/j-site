# Task builder
```
This codebase is used to set a task builder to:
- Transpile js from es6 to 5 and compress
- Compile scss to css
- Compress images
```

## Project setup
```
git clone .. && cd ..
npm install
```

### Files setup
```
Put:
- javascript files in app->js
- scss files in app->css 
- image files in app->img.
```

### To process files
#### To build 
```
For js - gulp buildJs
For css - gulp buildCss
For img - gulp compressImg
```
#### To watch 
```
For js - gulp watchJs
For css - gulp watchJs
For img - gulp watchImg

To watch all - gulp watchAll
```
