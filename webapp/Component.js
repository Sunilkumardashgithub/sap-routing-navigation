sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/myorg/routingdemo/model/models",
    "sap/ui/model/json/JSONModel"
], (UIComponent, models,JSONModel) => {
    "use strict";

    return UIComponent.extend("com.myorg.routingdemo.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            const invoiceData = {
                    Invoices: [
                        {
                            ProductName: "Laptop",
                            ShipperName: "Delivehry Express",
                            Quantity: 2,
                            ExtendedPrice: 1200
                        },
                        {
                            ProductName: "Keyboard",
                            ShipperName: "Amazon Express",
                            Quantity: 5,
                            ExtendedPrice: 75
                        },
                        {
                            ProductName: "Monitor",
                            ShipperName: "Ekart Shipping",
                            Quantity: 3,
                            ExtendedPrice: 350
                        }
                    ]
                };

                const invoiceModel =
                    new JSONModel(invoiceData);

                this.setModel(invoiceModel, "invoice");

            // enable routing
            this.getRouter().initialize();
        }
    });
});