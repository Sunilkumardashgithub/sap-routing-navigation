sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"
], function (Controller, UIComponent, History) {

    "use strict";

    return Controller.extend(
        "com.myorg.routingdemo.controller.Detail",
        {

            onInit: function () {

                const router =
                    UIComponent.getRouterFor(this);

                router.getRoute("detail")
                    .attachPatternMatched(
                        this.onObjectMatched,
                        this
                    );

            },

            onObjectMatched: function (event) {

                const invoicePath =
                    event.getParameter("arguments").invoicePath;

                this.getView().bindElement({

                    path: "/" +
                        window.decodeURIComponent(invoicePath),

                    model: "invoice"

                });

            },

            onNavBack: function () {

                const history = History.getInstance();

                const previousHash =
                    history.getPreviousHash();

                if (previousHash !== undefined) {

                    window.history.go(-1);

                } else {

                    const router =
                        UIComponent.getRouterFor(this);

                    router.navTo("overview", {}, true);

                }

            }

        }
    );

});