export function seoCh(el) {
	let link = document.querySelectorAll(`${el}`);

	for (let i=0;i<link.length;i=i+1) {
		link[i].addEventListener('click', actionLink, false);
	};

	let actionLink = (e) => {
		let target = e.target.dataset.target;
		let href   = e.target.dataset.href;
		target === '_blank' ? window.open(href,target) : location.assign(href);
	}
}