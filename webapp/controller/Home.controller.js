sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter",
	"sap/ui/model/json/JSONModel"
], function(Controller, formatter, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.Home", {

		formatter: formatter,

		onInit: function () {

			var sPath = jQuery.sap.getModulePath("sap.ui.demo.basicTemplate", "/model/Tree.json");
			var oModel = new JSONModel(sPath);
			this.getView().setModel(oModel, "Tree");

		}
	});
});