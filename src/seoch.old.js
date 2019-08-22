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
