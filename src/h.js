import * as Solid from 'solid-js';
import * as SolidHyper from 'solid-js/h';
import * as SolidDOM from "solid-js/dom";

window.Solid = Solid;
window.SolidHyper = Object.assign({}, SolidDOM, SolidHyper);