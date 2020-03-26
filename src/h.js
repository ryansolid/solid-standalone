import * as Solid from 'solid-js';
import SolidHyper from 'solid-js/h';
import * as SolidDOM from "solid-js/dom";

window.Solid = Solid;
window.SolidDOM = Object.assign({}, SolidDOM, { h: SolidHyper });