console.log('Dom');
const div = dom.create('   <div><span>123</span></div>')
console.log(div);
dom.after(node, div)

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(node, div3)