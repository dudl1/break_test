// <!-- OPEN: INPUT_LABEL-->
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('6 k(e){7(e.5==""){2.1("f").0.3="8"}9{2.1("f").0.3="4"}}6 j(e){7(e.5==""){2.1("d").0.3="8"}9{2.1("d").0.3="4"}}6 i(e){7(e.5==""){2.1("c").0.3="8"}9{2.1("c").0.3="4"}}6 h(e){7(e.5==""){2.1("b").0.3="8"}9{2.1("b").0.3="4"}}6 g(e){7(e.5==""){2.1("a").0.3="8"}9{2.1("a").0.3="4"}}',21,21,'style|getElementById|document|display|block|value|function|if|none|else|clearButtonPassword_2|clearButtonEmail_2|clearButtonName_2|clearButtonPassword||clearButtonName|CheckInputPassword_2|CheckInputEmail_2|CheckInputName_2|CheckInputPassword|CheckInputName'.split('|'),0,{}))
// <!-- CLOSE: INPUT_LABEL-->

// <!-- OPEN: CLICK_SWITCH_FORM-->
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('g 0=6.7(\'.8\');0.9(\'5\',b(){$("c").a(\'d\');0.1=(0.1===\'3 4 2\')?0.1=\'e f 2\':0.1=\'3 4 2\'})',17,17,'btn|innerHTML|account|Create|an|click|document|querySelector|create_account|addEventListener|toggleClass|function|span|active|Log|in|const'.split('|'),0,{}))
// <!-- CLOSE: CLICK_SWITCH_FORM-->

// <!-- OPEN: CLICK_SECTION_WRAP_CHANGE_REGISTRATION -->
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2=b.a("#f");1=b.a("#e");d c(){9(2.0.8("4")){2.0.7(\'4\')}6{2.0.5("4")}9(1.0.8("3")){1.0.7(\'3\')}6{1.0.5("3")}}',16,16,'classList|accountLogIn|accountCreator|to_active|active|add|else|remove|contains|if|querySelector|document|create_Account|function|section_wrap_2|section_wrap'.split('|'),0,{}))
// <!-- CLOSE: CLICK_SECTION_WRAP_CHANGE_REGISTRATION -->

// <!-- OPEN: VALIDATION_FORM -->
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3.4("r").k=j(){9 b=3.4("q").5;9 c=3.4("d").5;2(b==""&&c==""){1("0 g h")}8 2(b==7){1("0 6 i")}8 2(c==7){1("0 6 d")}};3.4("o").k=j(){9 f=3.4("n").5;9 a=3.4("m").5;9 e=3.4("l").5;2(f==""&&a==""&&e==""){1("0 g h")}8 2(a==7){1("0 6 i")}8 2(a==7){1("0 6 p")}8 2(e==7){1("0 6 d")}};',28,28,'Enter|alert|if|document|getElementById|value|your|false|else|var|NewUserEmail|UserName|UserPassword|password|NewUserPassword|NewUserName|the|data|nickname|function|onclick|password_2|email_2|name_2|btn_registration|email|name|btn_login'.split('|'),0,{}))
// <!-- CLOSE: VALIDATION_FORM -->

var cM = document.getElementById('c-m');

function removeBtnMeets() {
    cM.style.display = (cM.style.display == 'block') ? '' : 'none';
    cM.parentNode.removeChild(cM);
    localStorage.setItem('hide', cM.style.display); // сохраняем значение в ключ hide
}

if(localStorage.getItem('hide') == 'none') { // если значение ключа hide "inline"
    cM.parentNode.removeChild(cM);
}

$('#form_login').submit(function() {
    doSomething();
});

$("#header_wrap_p-l").click(function() {
    var myButtonClasses = document.getElementById("profile_options").classList;

    if (myButtonClasses.contains("activeOptions")) {
        myButtonClasses.remove("activeOptions");

    } else {
        myButtonClasses.add("activeOptions");
    }
});

$("#header_wrap_s-c").click(function() {
    var myButtonClasses = document.getElementById("setting_options").classList;
    var myButtonClasseA = document.getElementById("header_wrap_s-c").classList;

    if (myButtonClasses.contains("activeSettingOptions")) {
        myButtonClasses.remove("activeSettingOptions");

    } else {
        myButtonClasses.add("activeSettingOptions");
    }

    if (myButtonClasseA.contains("animationBtn")) {
        myButtonClasseA.remove("animationBtn");

    } else {
        myButtonClasseA.add("animationBtn");
    }
});

<!--OPEN: RANDOM_TEXT_IN_INPUT-->

let messages = ["A good day", "Rest", "Clear thoughts", "You will succeed", "Find relaxing music"];
let message = messages[Math.floor(Math.random()*messages.length)];

$('input').val(message);


<!--CLOSE: RANDOM_TEXT_IN_INPUT-->

$(document).mouseup(function(e) {
    var containerP = $('.profile_options.activeOptions');
    if (containerP.has(e.target).length === 0) {
        containerP.removeClass('activeOptions');
    }
});

$('.section_row').scroll(function(){
    if ($('.section_row').scrollTop() > 100) {
        $('.search_input').addClass('scroll');
        $('.section_row').addClass('scrollSection');
        $('.wrap_extradition').addClass('scrollExtradition');
        $('.login_column').addClass('scrollLogo');
    }
    else if ($('.section_row').scrollTop() < 100) {
        $('.search_input').removeClass('scroll')
        $('.section_row').removeClass('scrollSection');
        $('.wrap_extradition').removeClass('scrollExtradition');
        $('.login_column').removeClass('scrollLogo');
    }
});

<!-- OPEN: SWITCH THEME -->

function applyTheme(theme) {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#theme").addEventListener("change", function() {
        applyTheme(this.value);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "auto";

    applyTheme(savedTheme);

    for (const optionElement of document.querySelectorAll("#theme option")) {
        optionElement.selected = savedTheme === optionElement.value;
    }

    document.querySelector("#theme").addEventListener("change", function () {
        localStorage.setItem("theme", this.value);
        applyTheme(this.value);
    });
});

<!-- CLOSE: SWITCH THEME -->

// Выводим "Нашёл", если какой-нибудь div на странице имеет класс "summary"
if ( $('div').hasClass('summary') ) alert( 'Нашёл' );
