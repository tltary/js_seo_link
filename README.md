# JS seo link

simple implementation of js links to avoid self-referencing

[Demo](https://tltary.github.io/js_seo_link/index.html)

if you need add like modules add 

### js
```
	import seoCh from 'src/seoch.js';
```

else add this code to your file

### js
```js
function seoCh(el) {
	let link = document.querySelectorAll(`${el}`);

	for (let i=0;i<link.length;i=i+1) {
		link[i].addEventListener('click', actionLink, false);
	};

	let actionLink = (e) => {
		let target = e.target.dataset.target,
			href   = e.target.dataset.href;
		target == '_blank' ? window.open(href,target) : location.assign(href);
	}
}
```

and use like
### js 
```
	seoCh('<your-class>');
```

if you need es5 use seolink.old.js
### js 
```
function seoCh(el) {
	var link = document.querySelectorAll(''+el+'');

	for (var i=0;i<link.length;i=i+1) {
		link[i].addEventListener('click', actionLink, false);
	};
	delete i;

	function actionLink(e) {
		var target = e.target.dataset.target;
		var href   = e.target.dataset.href;
		if (target === '_blank') {
			window.open(href,target)
		} else {
			location.assign(href)
		};
		delete target;
		delete href;
	}
}

seoCh('.js-seo-link');
seoCh('#link');
```