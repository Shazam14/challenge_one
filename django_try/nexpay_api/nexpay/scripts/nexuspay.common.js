/*------------------------------------------------------
message box
--------------------------------------------------------*/
function showMessage(input, style, msg) {

    if (input.length == 0)
        return;

    clearMessage(input);
    input.parents(".form-group:first").addClass(style);
    input.after("<span class='help-block message'>" + msg + "</span>");
}



function selectAllClick() {
    // alert($(this).is(':checked'));
    //console.log($(this));
    //console.log($(this).prop('data-bindname'));
    //console.log($(this).attr('data-bindname'));
    //console.log($(this).data('bindname'));
    //console.log($(this).getAttribute("data-bindname"));
    // alert($(this).bindName);

}

function showSelect2Message(input, style, msg) {

    if (input.length == 0)
        return;

    clearMessage(input);

    input.parents(".form-group:first").addClass(style);
    input.parent().children().last().after("<span class='help-block message'>" + msg + "</span>");
}




function clearMessage(input) {
    if (input.length == 0)
        return;

    input.parents(".form-group:first")
        .removeClass("has-warning")
        .removeClass("has-error");

    input.parents(".form-group:first").find(".message").remove();
}

function clearAllMessages() {


}

/*------------------------------------------------------
checking functions
--------------------------------------------------------*/
function checkLength(input, min, max, msg) {
    var length = 0;
    if (!(input.val() == null || input.val() === 'undefined')) {
        length = input.val().length;
    }
    if (length > max || length < min) {
        showMessage(input, "has-error", msg);
        input.focus();
        return false;
    } else {
        clearMessage(input);
        return true;
    }
};

function checkLengthWithoutFocus(input, min, max, msg) {
    var length = 0;
    if (!(input.val() == null || input.val() === 'undefined')) {
        length = input.val().length;
    }
    if (length > max || length < min) {
        showMessage(input, "has-error", msg);
        return false;
    } else {
        clearMessage(input);
        return true;
    }
};

function checkEmail(input, msg) {
    return checkRegexp(input, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, msg);
}

function checkRegexp(input, regexp, msg, isClearMessage) {
    if (!(regexp.test(input.val()))) {
        showMessage(input, "has-error", msg);
        input.focus();
        return false;
    } else {
        if (typeof (isClearMessage) === 'undefined') isClearMessage = true;

        if (isClearMessage)
            clearMessage(input);
        return true;
    }
};

function checkRegexpWithoutFocus(input, regexp, msg, isClearMessage) {
    if (!(regexp.test(input.val()))) {
        showMessage(input, "has-error", msg);
        return false;
    } else {
        if (typeof (isClearMessage) === 'undefined') isClearMessage = true;

        if (isClearMessage)
            clearMessage(input);
        return true;
    }
};

function checkEqual(input1, input2, msg) {

    if (input1.val() != input2.val()) {
        showMessage(input2, "has-error", msg);
        input2.focus();
        return false;
    }
    else {
        clearMessage(input2);
        return true;
    }
}

function checkEqualWithoutFocus(input1, input2, msg) {

    if (input1.val() != input2.val()) {
        showMessage(input2, "has-error", msg);
        return false;
    }
    else {
        clearMessage(input2);
        return true;
    }
}

function checkCreditCardExpiry(inputMonth, inputYear, msg) {

    var selectedM = inputMonth.find(":selected").val();
    var selectedY = inputYear.find(":selected").val();
    var today = new Date();

    if (selectedM <= today.getMonth() && selectedY <= today.getFullYear()) {
        showMessage(inputMonth, "has-error", "");
        showMessage(inputYear, "has-error", msg);
        inputMonth.focus();
        return false;
    }
    else {
        clearMessage(inputMonth);
        clearMessage(inputYear);
        return true;
    }
};

function checkCreditCardExpiryWithoutFocus(inputMonth, inputYear, msg) {

    var selectedM = inputMonth.find(":selected").val();
    var selectedY = inputYear.find(":selected").val();
    var today = new Date();

    if (selectedM <= today.getMonth() && selectedY <= today.getFullYear()) {
        showMessage(inputMonth, "has-error", "");
        showMessage(inputYear, "has-error", msg);
        return false;
    }
    else {
        clearMessage(inputMonth);
        clearMessage(inputYear);
        return true;
    }
};

function checkEmpty(input, msg) {
    if (input.val() == "" || input.val() == 'undefined') {
        showMessage(input, "has-error", msg);
        input.focus();
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
};
function checkEmptyWizard(input, msg) {
    if (input.val() == "" || input.val() == 'undefined') {
        showMessageWizard(input, "has-error", msg);
        input.focus();
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
};
function clearMessageWizard(input) {
    //alert(input.length);
}
function showMessageWizard(input, style, msg) {
    if (input.length == 0)
        return;
    clearMessageWizard(input);
    $("#showErrorMessage").addClass(style);
    $("#showErrorMessage").html(msg);
    //input.parents(".form-group:first").addClass(style);
    //input.after("<span class='help-block message'>" + msg + "</span>");
    //input.parents(".form-group:first").addClass(style);
    //input.after("<span class='help-block message'>" + msg + "</span>");
}

function checkEmptyWithoutFocus(input, msg) {

    if (input.val() == "" || input.val() == 'undefined') {
        showMessage(input, "has-error", msg);
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
};

function checkDate(input, msg) {
    var regexp = /^\d{2}\/\d{2}\/\d{4}$/;  //Basic check for format validity
    var warning = false;

    if (!regexp.test(input.val()))
        warning = true;
    else {
        //Detailed check for valid date ranges
        var dayfield = input.val().split("/")[0];
        var monthfield = input.val().split("/")[1] - 1;
        var yearfield = input.val().split("/")[2];
        var dayobj = new Date(yearfield, monthfield, dayfield);

        if ((dayobj.getMonth() != monthfield) || (dayobj.getDate() != dayfield) || (dayobj.getFullYear() != yearfield))
            warning = true;

        // Date too far behind will return false
        if (dayobj.getFullYear() < 1900)
            warning = true
    }

    if (warning) {
        showMessage(input, "has-error", msg);
        input.focus();
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
}

function checkDateWithoutFocus(input, msg) {
    var regexp = /^\d{2}\/\d{2}\/\d{4}$/;  //Basic check for format validity
    var warning = false;

    if (!regexp.test(input.val()))
        warning = true;
    else {
        //Detailed check for valid date ranges
        var dayfield = input.val().split("/")[0];
        var monthfield = input.val().split("/")[1] - 1;
        var yearfield = input.val().split("/")[2];
        var dayobj = new Date(yearfield, monthfield, dayfield);

        if ((dayobj.getMonth() != monthfield) || (dayobj.getDate() != dayfield) || (dayobj.getFullYear() != yearfield))
            warning = true;
        // Date too far behind will return false
        if (dayobj.getFullYear() < 1900)
            warning = true
    }

    if (warning) {
        showMessage(input, "has-error", msg);
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
}

function checkDateIsFuture(input, msg) {
    var regexp = /^\d{2}\/\d{2}\/\d{4}$/;  //Basic check for format validity
    var warning = false;

    if (!regexp.test(input.val())) {
        warning = true;
    }
    else {
        //Detailed check for valid date ranges
        var dayfield = input.val().split("/")[0];
        var monthfield = input.val().split("/")[1] - 1;
        var yearfield = input.val().split("/")[2];
        var dayobj = new Date(yearfield, monthfield, dayfield);
        var todayDate = new Date();

        if ((dayobj.getMonth() != monthfield) || (dayobj.getDate() != dayfield) || (dayobj.getFullYear() != yearfield))
            warning = true;

        // Date is not in the future
        if (todayDate > dayobj) {
            warning = true
        }
    }

    if (warning) {
        showMessage(input, "has-error", msg);
        input.focus();
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
}

function checkDateIsFutureWithoutFocus(input, msg) {
    var regexp = /^\d{2}\/\d{2}\/\d{4}$/;  //Basic check for format validity
    var warning = false;

    if (!regexp.test(input.val())) {
        warning = true;
    }
    else {
        //Detailed check for valid date ranges
        var dayfield = input.val().split("/")[0];
        var monthfield = input.val().split("/")[1] - 1;
        var yearfield = input.val().split("/")[2];
        var dayobj = new Date(yearfield, monthfield, dayfield);
        var todayDate = new Date();

        if ((dayobj.getMonth() != monthfield) || (dayobj.getDate() != dayfield) || (dayobj.getFullYear() != yearfield))
            warning = true;

        // Date is not in the future
        if (todayDate > dayobj) {
            warning = true
        }
    }

    if (warning) {
        showMessage(input, "has-error", msg);
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
}

function compareDateIsFuture(input, input2, msg) {
    var regexp = /^\d{2}\/\d{2}\/\d{4}$/;  //Basic check for format validity
    var warning = false;

    if (!regexp.test(input.val()) || !regexp.test(input2.val())) {
        warning = true;
    }
    else {
        //Detailed check for valid date ranges
        var dayfield = input.val().split("/")[0];
        var monthfield = input.val().split("/")[1] - 1;
        var yearfield = input.val().split("/")[2];
        var dayobj = new Date(yearfield, monthfield, dayfield);

        if ((dayobj.getMonth() != monthfield) || (dayobj.getDate() != dayfield) || (dayobj.getFullYear() != yearfield))
            warning = true;

        //Detailed check for valid date ranges
        var dayfield2 = input2.val().split("/")[0];
        var monthfield2 = input2.val().split("/")[1] - 1;
        var yearfield2 = input2.val().split("/")[2];
        var dayobj2 = new Date(yearfield2, monthfield2, dayfield2);

        if ((dayobj2.getMonth() != monthfield2) || (dayobj2.getDate() != dayfield2) || (dayobj2.getFullYear() != yearfield2))
            warning = true;

        // Date2 is not in the future
        if (dayobj > dayobj2) {
            warning = true
        }
    }

    if (warning) {
        showMessage(input2, "has-error", msg);
        input2.focus();
        return false;
    }
    else {
        clearMessage(input2);
        return true;
    }
}

function compareDateIsFutureWithoutFocus(input, input2, msg) {
    var regexp = /^\d{2}\/\d{2}\/\d{4}$/;  //Basic check for format validity
    var warning = false;

    if (!regexp.test(input.val()) || !regexp.test(input2.val())) {
        warning = true;
    }
    else {
        //Detailed check for valid date ranges
        var dayfield = input.val().split("/")[0];
        var monthfield = input.val().split("/")[1] - 1;
        var yearfield = input.val().split("/")[2];
        var dayobj = new Date(yearfield, monthfield, dayfield);

        if ((dayobj.getMonth() != monthfield) || (dayobj.getDate() != dayfield) || (dayobj.getFullYear() != yearfield))
            warning = true;

        //Detailed check for valid date ranges
        var dayfield2 = input2.val().split("/")[0];
        var monthfield2 = input2.val().split("/")[1] - 1;
        var yearfield2 = input2.val().split("/")[2];
        var dayobj2 = new Date(yearfield2, monthfield2, dayfield2);

        if ((dayobj2.getMonth() != monthfield2) || (dayobj2.getDate() != dayfield2) || (dayobj2.getFullYear() != yearfield2))
            warning = true;

        // Date2 is not in the future
        if (dayobj > dayobj2) {
            warning = true
        }
    }

    if (warning) {
        showMessage(input2, "has-error", msg);
        return false;
    }
    else {
        clearMessage(input2);
        return true;
    }
}


function checkSelected(input, msg, showMsg, inputControlType) {
    showMsg = typeof showMsg !== 'undefined' ? showMsg : true;

    var selected = input.find(":selected").val();

    if (selected == null || selected == "0" || selected == "") {
        if (showMsg) {
            if (inputControlType == "select2")
                showSelect2Message(input, "has-error", msg);
            else
                showMessage(input, "has-error", msg);

            input.focus();
        }
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
};

function checkSelectedWithoutFocus(input, msg, showMsg, inputControlType) {
    showMsg = typeof showMsg !== 'undefined' ? showMsg : true;

    var selected = input.find(":selected").val();

    if (selected == null || selected == "0" || selected == "") {
        if (showMsg) {
            if (inputControlType == "select2")
                showSelect2Message(input, "has-error", msg);
            else
                showMessage(input, "has-error", msg);
        }
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
};

function checkSelectedWithDefaultValue(input, msg, showMsg, inputControlType, defaultValue) {
    showMsg = typeof showMsg !== 'undefined' ? showMsg : true;

    var selected = input.find(":selected").val();
    
    if (selected == null || selected == "0" || selected == "" || selected == defaultValue) {
        if (showMsg) {
            if (inputControlType == "select2")
                showSelect2Message(input, "has-error", msg);
            else
                showMessage(input, "has-error", msg);

            input.focus();
        }
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
};

function checkSelectedWithDefaultValueWithoutFocus(input, msg, showMsg, inputControlType, defaultValue) {
    showMsg = typeof showMsg !== 'undefined' ? showMsg : true;

    var selected = input.find(":selected").val();

    if (selected == null || selected == "0" || selected == "" || selected == defaultValue) {
        if (showMsg) {
            if (inputControlType == "select2")
                showSelect2Message(input, "has-error", msg);
            else
                showMessage(input, "has-error", msg);
        }
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
};


function checkChecked(input, msg, showMsg) {
    showMsg = typeof showMsg !== 'undefined' ? showMsg : true;

    if (!input.is(":checked")) {
        if (showMsg) {
            showMessage(input, "has-error", msg);
            input.focus();
        }
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
};

function checkCheckedWithoutFocus(input, msg, showMsg) {
    showMsg = typeof showMsg !== 'undefined' ? showMsg : true;

    if (!input.is(":checked")) {
        if (showMsg) {
            showMessage(input, "has-error", msg);
        }
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
};

function checkRadio(input, msg, showMsg) {
    showMsg = typeof showMsg !== 'undefined' ? showMsg : true;

    if (!input.is(":checked")) {
        if (showMsg) {
            showMessage(input, "has-error", msg);
            input.focus();
        }
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
};

function checkRadioWithoutFocus(input, msg, showMsg) {
    showMsg = typeof showMsg !== 'undefined' ? showMsg : true;

    if (!input.is(":checked")) {
        if (showMsg) {
            showMessage(input, "has-error", msg);
        }
        return false;
    }
    else {
        clearMessage(input);
        return true;
    }
};

/*----------------------------------------------------------------
--helpers
------------------------------------------------------------------*/
function currencyFormat(val) {
    //var nStr = val.replace(",", "");

    //if (isNaN(nStr)) { return nStr; }

    //nStr = Math.round(nStr * 100) / 100;
    ////nStr = parseFloat(nStr).toFixed(2);

    //nStr += '';
    //x = nStr.split('.');
    //x1 = x[0];
    //x2 = x.length > 1 ? '.' + x[1] : '.00';

    ////pad 0 when only 1 decimal places were found
    //if (x2.length == 2)
    //    x2 += '0';

    //var rgx = /(\d+)(\d{3})/;
    //while (rgx.test(x1)) {
    //	x1 = x1.replace(rgx, '$1' + ',' + '$2');
    //}

    //return x1 + x2;

    return val;
}

function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf("?") !== -1 ? "&" : "?";
    if (uri.match(re)) {
        window.location.href = uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        window.location.href = uri + separator + key + "=" + value;
    }
}



/*---------------------------------------
notification
-----------------------------------------*/
function showAlert(style, msg, targetDiv) {
    hideAlert();

    var va = $('<div id="alert" class="alert ' + style + '" ><a class="close" data-dismiss="alert" href="#">&times;</a>' + msg + '</div>');

    if (typeof targetDiv != 'undefined' && $('#' + targetDiv).length > 0) {
        $('#' + targetDiv).prepend(va);
    }
    else {
        $('#alert-message').prepend(va);
    }
}

function hideAlert() {
    $('.alert').alert('close');
}


$(function () {
    //Add string format prototype
    if (!String.format) {
        String.format = function (format) {
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                    ;
            });
        };
    }

    Date.localdate = function () {
        var da = new Date();
        var d = da.getDay();
        var m = da.getMonth();
        var y = da.getFullYear;
        if (d.length == 1) {
            d = "0" + d;
        }
        if (m.length == 1) {
            m = "0" + m;
        }
        y = y.substr(2, 2);
        return d + "/" + m + "/" + y
    }

    $('.select-all').change(function () {

        var _selector;
        var checked = false;
        if ($(this).data('bindid') != '')
            _selector = $('\#' + $(this).data('bindid'));
        else if ($(this).data('bindcss') != '')
            _selector = $('.' + $(this).data('bindcss'));
        else if ($(this).data('bindname') != '')
            _selector = $(":checkbox[name=\'" + $(this).data('bindname') + "\']");

        if ($(this).is(':checked'))
            checked = true;

        _selector.each(function () {
            $(this).prop("checked", checked);
        });
    });
    $(".sanitize").change(function () {
        var value = $(this).val();

        var pattern = /[,|.|-|:|\s|-]/;
        //var newvalue = value.replace(pattern, "");
        var regx = new RegExp(pattern, "g");
        var newvalue = value.replace(regx, "");
        $(this).val(newvalue)
    }
    )

    $(".number-sanitize").change(function () {
        var value = $(this).val();
        if (value == null)
            value = '';

        var invalidChars = /[+|,|%|$|:|\s|]/;
        var invalidRegx = new RegExp(invalidChars, "g");
        value = value.replace(invalidRegx, "");

        var pattern = /^-?\d*\.?\d+$/;
        var regx = new RegExp(pattern, "g");
        if (value.match(regx))
            $(this).val(value);
        else
            $(this).val('');
    }
    )



    //$(".select2-country").select2({
    //    ajax: {
    //        url: "/ajax/Country/GetCountries", 
    //        dataType: 'json',
    //        delay: 250,
    //        data: function (params) {
    //            return {
    //                term: params.term, // search term
    //                page: params.page
    //            };
    //        },
    //        processResults: function (data, params) {
    //            // parse the results into the format expected by Select2
    //            // since we are using custom formatting functions we do not need to
    //            // alter the remote JSON data, except to indicate that infinite
    //            // scrolling can be used
    //            params.page = params.page || 1;

    //            return {
    //                results: data.results,
    //                pagination: {
    //                    more: data.more
    //                }
    //            };
    //        },
    //        cache: true
    //    },
    //    escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
    //    minimumInputLength: 0,
    //    templateResult: function(result) { return result.text; }, // omitted for brevity, see the source of this page
    //    templateSelection: function(selection) { return selection.text; } // omitted for brevity, see the source of this page
    //});


    $(".select2-menu").select2({
        ajax: {
            //"@Url.Action("GetCountries", "Country", new { area = "ajax" })"
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    term: params.term, // search term
                    page: params.page
                };
            },
            processResults: function (data, params) {
                // parse the results into the format expected by Select2
                // since we are using custom formatting functions we do not need to
                // alter the remote JSON data, except to indicate that infinite
                // scrolling can be used
                params.page = params.page || 1;

                return {
                    results: data.results,
                    pagination: {
                        more: data.more
                    }
                };
            },
            cache: true
        },
        theme: "bootstrap",
        escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
        minimumInputLength: 0,
        templateResult: function (result) { return result.text; }, // omitted for brevity, see the source of this page
        templateSelection: function (selection) { return selection.text; } // omitted for brevity, see the source of this page
    });

    var data = [
        {
            id: 0,
            text: 'enhancement'
        },
        {
            id: 1,
            text: 'bug'
        },
        {
            id: 2,
            text: 'duplicate'
        },
        {
            id: 3,
            text: 'invalid'
        },
        {
            id: 4,
            text: 'wontfix'
        }
    ];

    $('.select2-countryReport').select2();
    //console.log('before'); 
    //console.log('after'); 
    $(".select2-country").select2({
        //allowClear: true,
        ajax: {

            url: function () {
                //if ($("#SchoolID").val()) {
                //    return "/ajax/Country/GetCountries?schoolID=" + $("#SchoolID").val();
                //} else {
                //    return "/ajax/Country/GetCountries";
                //}

                var functionName = $(this).data("countries");
                if (functionName) {
                    return eval(functionName);

                }
                else {
                    return "/ajax/Country/GetCountries";
                }

                //return eval('getCountries()');


            },
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    term: params.term, // search term
                    page: params.page
                };
            },
            processResults: function (data, params) {
                // parse the results into the format expected by Select2
                // since we are using custom formatting functions we do not need to
                // alter the remote JSON data, except to indicate that infinite
                // scrolling can be used
                params.page = params.page || 1;

                return {
                    results: data.results,
                    pagination: {
                        more: data.more
                    }
                };
            },
            cache: true
        },
        theme: "bootstrap",
        escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
        minimumInputLength: 0,
        templateResult: function (result) { return result.text; }, // omitted for brevity, see the source of this page
        templateSelection: function (selection) { return selection.text; } // omitted for brevity, see the source of this page
    });

    $(".select2-country.select2-withPrimaryCurrency").select2({
        //allowClear: true,
        ajax: {

            url: function () {
                //if ($("#SchoolID").val()) {
                //    return "/ajax/Country/GetCountries?schoolID=" + $("#SchoolID").val();
                //} else {
                //    return "/ajax/Country/GetCountries";
                //}

                var functionName = $(this).data("countries");
                if (functionName) {
                    return eval(functionName);

                }
                else {
                    return "/ajax/Country/GetCountriesWithPrimaryCurrency";
                }

                //return eval('getCountries()');


            },
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    term: params.term, // search term
                    page: params.page
                };
            },
            processResults: function (data, params) {
                // parse the results into the format expected by Select2
                // since we are using custom formatting functions we do not need to
                // alter the remote JSON data, except to indicate that infinite
                // scrolling can be used
                params.page = params.page || 1;

                return {
                    results: data.results,
                    pagination: {
                        more: data.more
                    }
                };
            },
            cache: true
        },
        theme: "bootstrap",
        escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
        minimumInputLength: 0,
        templateResult: function (result) { return result.text; }, // omitted for brevity, see the source of this page
        templateSelection: function (selection) { return selection.text; } // omitted for brevity, see the source of this page
    });








});







