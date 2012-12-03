iris.screen(function (self) {

	var ui;

	self.create = function() {

		self.tmpl("test/component/screen.html");

		iris.on("create_ui", createUi);
		iris.on("destroy_ui", destroyUi);

		// check screen properties
		window.strictEqual(self.id, "#screen");
		window.strictEqual(self.fileJs, "test/component/screen.js");
		window.strictEqual(self.uis.length, 0);

		window.start();

	};

	self.destroy = function () {
		window.ok(true);
		window.start();
	};

	function createUi () {
		ui = self.ui("container", "test/component/ui.js", {test:"test"});

		window.strictEqual(self.uis.length, 1);

		window.start();
	}

	function destroyUi () {
		self.destroyUI(ui);

		window.strictEqual(self.uis.length, 0);

		window.start();
	}

});