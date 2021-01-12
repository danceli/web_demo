;(function(doc) {

	function Tab(options) {
		const oTab = doc.querySelector(options.el),
					oPage = doc.getElementsByClassName('page')[0];
		this.oNav = oTab.getElementsByClassName('nav')[0];
		this.oNavItems = this.oNav.getElementsByClassName('nav-item');
		this.oPageItems = oPage.getElementsByClassName('page-item');

		this.curIndex = 0;
		this.classObject = options.classObject || {};
	}

	Tab.prototype.init = function() {
		this.bindEvent();
	}
	Tab.prototype.bindEvent = function() {
		this.oNav.addEventListener('click', this.onNavClick.bind(this), false);
	}
	Tab.prototype.onNavClick = function (ev) {
		const target = tools.getTarget(ev);
		if(target.className === 'nav-item') {
			this.setCurrent(this.curIndex, 'remove');
			this.curIndex = [].indexOf.call(this.oNavItems, target);
			this.setCurrent(this.curIndex, 'add');
		}
	}
	Tab.prototype.setCurrent = function (index, field) {
		const { navItem, pageItem } = this.classObject;
		switch(field) {
			case 'remove':
				this.oNavItems[index].className = navItem.origin;
				this.oPageItems[index].className = pageItem.origin;
				break;
			case 'add':
				this.oNavItems[index].className = navItem.current;
				this.oPageItems[index].className = pageItem.current;
				break;
			default :
				break;
		}
	}

	window.Tab = Tab;
})(document);