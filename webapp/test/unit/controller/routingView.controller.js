/*global QUnit*/

sap.ui.define([
	"com/myorg/routingdemo/controller/routingView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("routingView Controller");

	QUnit.test("I should test the routingView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
