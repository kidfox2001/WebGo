// จัดไว้ตรงกลาง browser
$.fn.center = function () {
    this.css("position", "absolute");
    this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
    this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
    return this;
}
// แปลงข้อความเป็น ทศนิยม ถ้าเป็นช่องว่างแปลงเป็น 0
$.fn.parseTxtToFloat = function () {
    if (this.is("input")) {
        if (isNaN(this.val())) {
            return 0
        } else {
            if (this.val() == "") {
                return 0
            } else {
                return parseFloat(this.val())
            }
        }
    } else {
        if (isNaN(this.text())) {
            return 0
        } else {
            if (this.text() == "") {
                return 0
            } else {
                return parseFloat(this.text())
            }
        }

    }
}
// เมื่อกด enter จะ focus ไปตัวถัดไป
$.fn.configKeyEnter = function (child) {
    var parent = $(this);
    $(this).find(child).not(notControl).keyup(function () {
        if (event.which == 13) {
            var controls = parent.find(child);
            var index = 0;
            for (var i = 0; i < controls.length; i++) {
                if ($(controls[i]).attr("name") == $(this).attr("name")) {
                    index = i;
                    break;
                }
            }
            $(controls[index + 1]).focus();
        }
    })
}
//กันกดคลิ๊ก
$.fn.preventClick = function () {
    $(this).click(function (event) {
        event.stopImmediatePropagation();
    });
}
//ยังใช้ไม่ได้
$.fn.bindEnter = function (fn) {
    $(this).keyup(function () {
        if (event.which == 13) {
            $(this).bind("click", fn);
        }
    })
}

function getDataMonth() {
    dataList = [];
    for (var i = 1; i < 13; i++) {
        if (i == 1) {
            dataList.push({ key: i, value: "มกราคม" });
        }
        if (i == 2) {
            dataList.push({ key: i, value: "กุมภาพันธ์" });
        }
        if (i == 3) {
            dataList.push({ key: i, value: "มีนาคม" });
        }
        if (i == 4) {
            dataList.push({ key: i, value: "เมษายน" });
        }
        if (i == 5) {
            dataList.push({ key: i, value: "พฤษภาคม" });
        }
        if (i == 6) {
            dataList.push({ key: i, value: "มิถุนายน" });
        }
        if (i == 7) {
            dataList.push({ key: i, value: "กรกฎาคม" });
        }
        if (i == 8) {
            dataList.push({ key: i, value: "สิงหาคม" });
        }
        if (i == 9) {
            dataList.push({ key: i, value: "กันยายน" });
        }
        if (i == 10) {
            dataList.push({ key: i, value: "ตุลาคม" });
        }
        if (i == 11) {
            dataList.push({ key: i, value: "พฤศจิกายน" });
        }
        if (i == 12) {
            dataList.push({ key: i, value: "ธันวาคม" });
        }
    }
    dataList.unshift({ key: "none", value: "เดือนเกิด" })
    return dataList;
}

$.fn.dllYearThaiToAge = function () {
    var d = new Date();
    var currentYear = d.getFullYear() + 543;
    var yearSelect = $(this).val()
    return currentYear - yearSelect;
}

$.fn.dllAgeToYearThai = function () {
    var yearSelect = $(this).val()
    var d = new Date();
    var currentYear = d.getFullYear() + 543;
    return currentYear - yearSelect;
}