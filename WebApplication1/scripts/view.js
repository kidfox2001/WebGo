
//#region class
function PersonDetailView() {
    this.first_name = "";
    this.last_name = "";
    this.age = null;
    this.year = "";
    this.month = "";
    this.day = "";
    this.sex = ""; // male, female
    this.is_sick = ""; // sick, un_sick
    this.person_alive = ""; // 1=live , 0=not live
    this.type_of_relationship = ""; // parent, spouse, relative, son
    this.parents_id = null;
    this.spouse_id = null;
    this.son_id = null;
    this.person_change_id = null; // มีเฉพาะเคสแก้ไขหมายถึง id ที่ถูกเลือก
    this.person_select_id = null; // ในเคสเพิ่มจะหมายถึง id ที่ถูกเลือก, ในเคสแก้ไขจะหมายถึง id ที่เลือกเผื่อจะผูกความสัมพันธ์ใหม่
};
PersonDetailView.prototype.getDataInformAdd = function () {
    this.first_name = $("#txtFirstName").val();
    this.last_name = $("#txtLastName").val();
    //this.age = ($("#txtAge").val() == "" ? null : $("#txtAge").val());
    if ($("#ddlAge").val() == "none") {
        this.age = null;
    } else {
        this.age = $("#ddlAge").val();
    }
    if ($("#ddlYear").val() == "none") {
        this.year = null;
    } else {
        this.year = $("#ddlYear").val();
    }
    if ($("#ddlMonth").val() == "none") {
        this.month = null;
    } else {
        this.month = $("#ddlMonth").val();
    }
    if ($("#ddlDay").val() == "none") {
        this.day = null;
    } else {
        this.day = $("#ddlDay").val();
    }
    this.sex = $("input[name=sex]:checked").val();
    this.person_alive = $("input[name=live]:checked").val();
    this.is_sick = $("input[name=sick]:checked").val();
    this.type_of_relationship = $("input[name=relationship]:checked").val();
};
PersonDetailView.prototype.getDataInformEdit = function () {
    this.first_name = $("#txtFirstName").val();
    this.last_name = $("#txtLastName").val();
    //this.age = ($("#txtAge").val() == "" ? null : $("#txtAge").val());
    if ($("#ddlAge").val() == "none") {
        this.age = null;
    } else {
        this.age = $("#ddlAge").val();
    }
    if ($("#ddlYear").val() == "none") {
        this.year = null;
    } else {
        this.year = $("#ddlYear").val();
    }
    if ($("#ddlMonth").val() == "none") {
        this.month = null;
    } else {
        this.month = $("#ddlMonth").val();
    }
    if ($("#ddlDay").val() == "none") {
        this.day = null;
    } else {
        this.day = $("#ddlDay").val();
    }
    this.sex = $("input[name=sex]:checked").val();
    this.person_alive = $("input[name=live]:checked").val();
    this.is_sick = $("input[name=sick]:checked").val();;
    if ($("#ddlPerson").val() == "none" | $("#ddlRelation").val() == "none") {
        this.type_of_relationship = null;
    } else {
        this.type_of_relationship = $("#ddlRelation").val();
        this.person_select_id =$("#ddlPerson").val();
    }
};
PersonDetailView.prototype.setDataInform = function (myVal) {
    $("#txtFirstName").val(myVal.first_name);
    $("#txtLastName").val(myVal.last_name);
    //$("#txtAge").val(myVal.age);
    if (myVal.age !== null) {
        $("#ddlAge").val(myVal.age);
    }
    if (myVal.year !== "") {
        $("#ddlYear").val(myVal.year)
    }
    if (myVal.month !== "") {
        $("#ddlMonth").val(myVal.month)
    }
    if (myVal.day !== "") {
        $("#ddlDay").val(myVal.day)
    }
    $("input[value=" + myVal.sex + "]").attr('checked', true);
    $("input[value=" + myVal.is_sick + "]").attr('checked', true);
    $("input[value=" + myVal.person_alive + "]").attr('checked', true);
    $.uniform.update();
};



//#region enum
var enSex = {
    male: { status: 0, text: "male" },
    female: { status: 1, text: "female" },
    getEnSexUIByVal: function (val) {
        switch (parseInt(val)) {
            case 0: return this.male;
            case 1: return this.female;
        }
    }
};
var enSick = {
    sick: { status: 0, text: "sick" },
    notSick: { status: 1, text: "un_sick" },
    getEnSickByVal: function (val) {
        switch (parseInt(val)) {
            case 0: return this.sick;
            case 1: return this.notSick;
        }
    }
};
var enLive = {
    live: { status: 0, text: "live" },
    notLive: { status: 1, text: "notLive" },
    getEnLiveByVal: function (val) {
        switch (parseInt(val)) {
            case 1: return this.live;
            case 2: return this.notLive;
        }
    }
};
var enRelationType = {
    parent: { status: 1, text: "parent" },
    spouse: { status: 2, text: "spouse" },
    son: { status: 3, text: "son" },
    relative: { status: 4, text: "relative" },
    getEnRelationTypeByVal: function (val) {
        switch (parseInt(val)) {
            case 1: return this.parent;
            case 2: return this.spouse;
            case 3: return this.son;
            case 4: return this.relative;
        }
    }
};