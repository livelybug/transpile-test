# Transpile test

The error 
```
"export 'filter' was not found in 'p-iteration'
```

was replicated by the following steps:

* ```quasar  init qs-test -v 0.17```
* ```npm install --save p-iteration```
* Add ```transpileDependencies: [/p-iteration/],``` to file ```quasar.conf.js```
* Invoke ```p-iteration``` in ```src/layouts/MyLayout.vue```
* ```quasar dev```
