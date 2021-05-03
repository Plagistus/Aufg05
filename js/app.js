var model = new Model();
var controller = new Controller();
//window.addEventListener("DOMContentLoaded", controller.onLoaded, false);
$(controller.onLoaded);

function changeTheme(theme){
    if(theme==='a'){
        $("#pageDiv").removeClass('ui-page-theme-a').addClass('ui-page-theme-b');
    }
    else {
        $("#pageDiv").removeClass('ui-page-theme-b').addClass('ui-page-theme-a');
    }
}

