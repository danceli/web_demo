const tools = (function() {

	function getTarget(ev) {
		const e = ev || event;

		return e.target || e.srcElement; 
	}

	return {
		getTarget
	}
})();