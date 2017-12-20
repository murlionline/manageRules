sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/demo_rulesmanagertemplate/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("sap.demo_rulesmanagertemplate.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});

//https://managerules01-i305544trial.dispatcher.hanatrial.ondemand.com/webapp/index.html?hc_resset&ruleProjectID=fc42028aa6b84827a1dd66ae2d6063d0&ruleID=39a981e56c2d46f99cafd0670b2f75fa&ruleService=91940c537a2d436cb3d1e699bb2a2b55&ruleVersion=000001