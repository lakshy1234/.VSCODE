(()=>{"use strict";var e={636:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.readNpmScripts=void 0;const n=r(496);t.readNpmScripts=async function(){try{const e=await async function(){const e=n.workspace.workspaceFolders?.[0]?.uri;if(!e)throw new Error("folder needed!");const t=n.Uri.joinPath(e,"./package.json"),r=(await n.workspace.openTextDocument(t)).getText();return JSON.parse(r)}();return Object.keys(e.scripts).sort()}catch(e){return[`No package.json file found! Error: ${e}`]}}},496:e=>{e.exports=require("vscode")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}var n={};(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=r(496),i=r(636);async function o(e){const r=await(0,i.readNpmScripts)(),n=await t.window.showQuickPick(r);if(!n)return void t.window.showInformationMessage("You did not select an npm script. Exiting...");let o;o=e?t.window.createTerminal():t.window.activeTerminal,function(e,r){e?(e.show(),e.sendText(`npm run ${r}`)):t.window.showInformationMessage("No active terminal. Exiting...")}(o,n)}e.activate=function(e){let r=t.commands.registerCommand("elltg-npm-script-run.runNpmScriptCurrentTerminal",(async()=>{await o(!1)}));e.subscriptions.push(r);let n=t.commands.registerCommand("elltg-npm-script-run.runNpmScriptNewTerminal",(async()=>{await o(!0)}));e.subscriptions.push(n)},e.deactivate=function(){}})(),module.exports=n})();