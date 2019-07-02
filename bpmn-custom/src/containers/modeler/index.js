import inherits from 'inherits';
import Modeler from 'bpmn-js/lib/Modeler';
import minimapModule from 'diagram-js-minimap';
import CustomPalette from './customPalette';
import KeyboardModule from './keyboard';
import CustomTranslate from './customTranslate';
import ResizeAllModule from './resizeAllRules';
// import PrioritiesModule from './taskPriorities';
// import ReadOnly from './readOnly';
import transactionBoundaries from './transactionBoundaries';

// 定制模型设计器及其依赖模块
export default function CustomModeler(options) {
  Modeler.call(this, options);

  this.customElements = [];
}

inherits(CustomModeler, Modeler);

CustomModeler.prototype._modules = [].concat(
  CustomModeler.prototype._modules,
  [
    KeyboardModule
  ],
  [
    CustomPalette
  ],
  [
    CustomTranslate
  ],
  [
    ResizeAllModule
  ],
  [
    minimapModule
  ],
  // [
  //   PrioritiesModule
  // ]
  // [
  //   ReadOnly
  // ]
  [
    transactionBoundaries
  ]
);