JFCustomWidget.subscribe("ready", function () {

    function getCheckedValues() {
        let checkedValues = '';
        let itms = document.querySelectorAll('input:checked');

        itms.forEach(itm => {
            checkedValues += itm.value + ',';
        });
        return checkedValues;
    }

    function valueClick() {
        let checkedValues = '';
        let itms = document.querySelectorAll('input:checked');
        itms.forEach(itm => {
            checkedValues += itm.value + ',';
        });
        JFCustomWidget.sendData({ valid: true, value: checkedValues });
    }


    let jotformSettings = JFCustomWidget.getWidgetSettings();
    data = jotformSettings.json;
    let res = '';
    let type = data.type;
    if (type == null) {
        type = 'radio';
    }
    else {
        type = type;
    }

    for (i = 0; i < data.item.length; i++) {
        let head = data.item[i].head;
        let text = head.text;
        let stars = head.stars;
        let value = data.item[i].value;
        let rows = data.item[i].rows;

        if (value == null) {
            value = text;
        }
        if (stars == null) {
            stars = 0;
        }
        else {
            stars = parseInt(stars);
        }


        res += '\
             <input id="inp' + i + '" type="' + type + '" value="' + value + '" name="sel">\
             <label for="inp' + i + '" class="plan basic selected">\
                 <div>\
                     <div class="plan-head" id="selHead' + i + '">\
                         <span class="plan-text">' + text + '</span>';
        let x = 1;
        while (x <= stars) {
            res += '<span class="star"></span>';
            x++;
        }

        res += '</div><ul id="selText' + i + '">';
        for (x = 0; x < rows.row.length; x++) {
            row = rows.row[x];
            icon = row.icon;
            if (icon == null) {
                icon = '';
            }
            text = row.text;
            switch (icon) {
                case 'yes':
                    res += '<li class="tick selItem' + i + '"><span></span>';
                    break;
                case 'no':
                    res += '<li class="selItem' + i + '"><span></span>';
                    break;
                default: res += '<li class="selItem' + i + '">';
            }
            res += text + '</li>';
        }
        res += '</ul></div></label>';
    }

    document.getElementById("main").innerHTML = res;

    for (i = 0; i < data.item.length; i++) {
        if ('bgcolor' in data.item[i].head) {
            document.getElementById("selHead" + i).style.backgroundColor = data.item[i].head.bgcolor;
        }
        if ('bgcolor' in data.item[i].rows) {
            document.getElementById("selText" + i).style.backgroundColor = data.item[i].rows.bgcolor;
        }
        if ('color' in data.item[i].head) {
            document.getElementById("selHead" + i).style.color = data.item[i].head.color;
        }
        if ('color' in data.item[i].rows) {
            document.getElementById("selText" + i).style.color = data.item[i].rows.color;
        }
        if ('bordercolor' in data.item[i].rows) {
            let border = document.getElementsByClassName("selItem" + i);
            for (let x = 0; x < border.length; x++) {
                border[x].style.borderBottomColor = data.item[i].rows.bordercolor;
            }
        }
        document.getElementById('inp' + i).onchange = valueClick;
    }
    JFCustomWidget.requestFrameResize({width: document.body.clientWidth, height: document.body.clientHeight})
    JFCustomWidget.subscribe("submit", function () {


        let msg = {
            valid: true,
            value: getCheckedValues()
        }

        JFCustomWidget.sendSubmit(msg);
    });
});