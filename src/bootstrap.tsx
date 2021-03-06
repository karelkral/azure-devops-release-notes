import "es6-promise/auto";
import * as SDK from "azure-devops-extension-sdk";
import { renderApp } from "./controls/app";
import { applyFabricUITheme } from "./styles";
import './main.scss';

SDK.init();
SDK.ready().then(async () => {
    renderApp();
    applyFabricUITheme();
    SDK.register(SDK.getContributionId(), {});
});
