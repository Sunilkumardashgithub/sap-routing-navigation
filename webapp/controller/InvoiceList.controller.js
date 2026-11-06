sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], function (Controller, UIComponent) {

    "use strict";

    return Controller.extend(
        "com.myorg.routingdemo.controller.InvoiceList",
        {

            onPress: function (event) {

                const item = event.getSource();

                const router =
                    UIComponent.getRouterFor(this);

                const path = item
                    .getBindingContext("invoice")
                    .getPath();

                router.navTo("detail", {

                    invoicePath:
                        window.encodeURIComponent(
                            path.substring(1)
                        )

                });

            }

        }
    );

});