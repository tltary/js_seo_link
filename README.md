# JS seo link

simple implementation of js links to avoid self-referencing

[Demo](https://tltary.github.io/js_seo_link/index.html)

### js

```js
let link = document.querySelectorAll('.js-seo-link');

for (let i=0;i<link.length;i=i+1) {
   	['click'].map(function(e) {
       link[i].addEventListener(e, actionLink, false);
    });
};

function actionLink(e) {
	let target = e.target.dataset.target,
		href   = e.target.dataset.href;
	target == '_blank' ? window.open(href,target) : location.assign(href);
}
```