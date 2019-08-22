# JS seo link

simple implementation of js links to avoid self-referencing

[Demo](https://tltary.github.io/js_seo_link/index.html)



### if you need add like modules add 
```js
import {seoCh} from './src/seoch.js';
```



### else add this code to your file
```js
function seoCh(el) {
	let link = document.querySelectorAll(`${el}`);
	
	let actionLink = (e) => {
		let target = e.target.dataset.target;
		let href   = e.target.dataset.href;
		target === '_blank' ? window.open(href,target) : location.assign(href);
	}
	
	for (let i=0;i<link.length;i=i+1) {
		link[i].addEventListener('click', actionLink, false);
	};
}
```


### and use like 
```js
seoCh('<your-class>');
```


### if you need es5 use seoch.old.js 
```js
function seoCh(el) {
	var link = document.querySelectorAll(''+el+'');

	function actionLink(e) {
		var target = e.target.dataset.target;
		var href   = e.target.dataset.href;
		if (target === '_blank') {
			window.open(href,target)
			delete target;
			delete href;
		} else {
			location.assign(href)
		};
	}

	for (var i=0;i<link.length;i=i+1) {
		link[i].addEventListener('click', actionLink, false);
	};
	delete i;
}

seoCh('.js-seo-link');
seoCh('#link');
```
