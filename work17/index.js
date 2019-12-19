
var inputs =document.getElementsByTagName('input')

for (var i = 0; i < inputs.length - 1; ++i) {
    inputs[i].onblur = inputBlur;
}
function inputBlur() {
    var name = this.name;
    var val = this.value;
    var tips = this.placeholder;
    var tips_ = this.parentNode.nextElementSibling;

    val = val.trim();

    if (!val) {
        error(tips_obj)
    }
}