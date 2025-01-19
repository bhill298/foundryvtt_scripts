let __GLOBAL_currentVals = [1, 1];
const aId = 'a8515bc1-38b8-4bea-81a4-8f26790ce0ec';
const bId = 'bb2e83b9-b1b3-4f56-8554-17539c31648e';
const cId = 'c2e5ea4d-b2f1-4e1a-a96d-ae54a65ffb43';

function setC(html, val) {
    html.find(`input#${cId}`).val(val);
}

function setVals(html, a, b, setAB) {
    if (setAB) {
        html.find(`input#${aId}`).val(a);
        html.find(`input#${bId}`).val(b);
    }
    __GLOBAL_currentVals = [a, b];
    let res = Math.sqrt((a * a) + (b * b));
    html.find(`input#${cId}`).val(res.toFixed(2).toString());
}

function buttonCallback(html) {
    const a = html.find(`input#${aId}`).val();
    const b = html.find(`input#${bId}`).val();
    setVals(html, a, b, false);
}

function setListeners(html) {
    html.find(`input#${aId}`).on('input', function() {
        buttonCallback(html);
    });
    html.find(`input#${bId}`).on('input', function() {
        buttonCallback(html);
    });
}

const content = `
  a:
  <input id="${aId}" type="number" value="1" />
  b:
  <input id="${bId}" type="number" value="1" />
  c:
  <input id="${cId}" type="number" value="" readonly/>
`;
let dialogEditor = new Dialog({
  title: `Pythagorean Theorem Calculator`,
  content: content,
  render: (html) => {
      setVals(html, __GLOBAL_currentVals[0], __GLOBAL_currentVals[1], true);
      setListeners(html);
  },
  buttons: {
    close: {
      icon: "<i class='fas fa-tick'></i>",
      label: `Exit`
    },
  },
  default: "close",
  close: () => {}
});
dialogEditor.render(true);