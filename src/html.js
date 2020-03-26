import * as Solid from 'solid-js';
import SolidHTML from 'solid-js/html';
import * as SolidDOM from "solid-js/dom";

window.Solid = Solid;
window.SolidDOM = Object.assign({}, SolidDOM, { html: SolidHTML });

