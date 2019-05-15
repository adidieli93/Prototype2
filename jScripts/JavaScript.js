var accessibility = ["false"];
var sizy = [0];

$(document).ready(function () {

    var myArray = sessionStorage.getItem('myArray');//בדיקת קונטרסט
    var mySize = sessionStorage.getItem('mySize');//בדיקת גודל

    contrast();
    getSize();

    $("#accWindow").hide();
    $("#aboutWindow").hide();
    $(".hotspotWin").hide();

    $("#accBut").click(function () {
        $("#accWindow").show();
    });

    $("#enterAccBut").click(function () {
        $("#accWindow").show();
    });


    $("#closeAccWin").click(function () {
        $("#accWindow").hide();
    });

    //$("#aboutBut").click(function () {
    //    $("#aboutWindow").show();

    //});
    //$("#closeAboutWin").click(function () {
    //    $("#aboutWindow").hide();
    //});

    $(".contrastBtn").click(function () {//קליק על כפתור קונטרסט
        if (accessibility[0] == "false") {//לקונטרסט גבוה
            highContrast();
            accessibility[0] = "true";
            sessionStorage.setItem('myArray', accessibility[0]);
        }

        else {//לקונטרסט רגיל
            lowContrast();
            accessibility[0] = "false";
            sessionStorage.setItem('myArray', accessibility[0]);
        }
    });

    function contrast() {//בדיקת קונטרסט
        if (myArray != null) {//אם הכפתור נלחץ בעבר
            if (myArray == "false") {//אם הקונטרסט רגיל
                lowContrast();
                accessibility[0] = "false";
                sessionStorage.setItem('myArray', accessibility[0]);
            }

            else {//אם הקונטרסט גבוה
                highContrast();
                accessibility[0] = "true";
                sessionStorage.setItem('myArray', accessibility[0]);
            }
        }
    }
    function lowContrast() {
        $("#container, .accorbody").css("background-color", "white");
        $(".hotspotWin").css("background-color", "#eae9e7");
        $("#content, .size, .contrast, .popupH2, #forwardText, #backText").css("color", "#1d3666");
        
        var contrastBtn = $('.contrastBtn').css('backgroundPosition').split(' ')[1];
        $('.contrastBtn').css('backgroundPosition', '-41px ' + contrastBtn);

        var plus = $('.plus').css('backgroundPosition').split(' ')[1];
        $('.plus').css('backgroundPosition', '-40px ' + plus);//קונטרסט נמוך

        var minus = $('.minus').css('backgroundPosition').split(' ')[1];
        $('.minus').css('backgroundPosition', '-40px ' + minus);//קונטרסט נמוך

        var forwardBtn = $('#forwardBtn').css('backgroundPosition').split(' ')[1];
        $('#forwardBtn').css('backgroundPosition', '-0.5px ' + forwardBtn);//קונטרסט נמוך

        var backBtn = $('#backBtn').css('backgroundPosition').split(' ')[1];
        $('#backBtn').css('backgroundPosition', '-0.5px ' + backBtn);//קונטרסט נמוך

        var closeBut = $('.closeBut').css('backgroundPosition').split(' ')[1];
        $('.closeBut').css('backgroundPosition', '0px ' + closeBut);//קונטרסט נמוך

        var accBut = $('#accBut').css('backgroundPosition').split(' ')[1];
        $('#accBut').css('backgroundPosition', '10px ' + accBut);//קונטרסט נמוך

        $(".breadcrumbs").css("color", "#1d3666");
        $(".breadcrumbs a").css("color", "#b23326");
    }

    function highContrast() {
        $("#container,.accorbody").css("background-color", "black");
        $(".hotspotWin").css("background-color", "#787373");
        $("#content").css("color", "white");
        $(".size, .contrast, .popupH2, #forwardText, #backText").css("color", "black");

        var contrastBtn = $('.contrastBtn').css('backgroundPosition').split(' ')[1];
        $('.contrastBtn').css('backgroundPosition', '-209px ' + contrastBtn);

        var plus = $('.plus').css('backgroundPosition').split(' ')[1];
        $('.plus').css('backgroundPosition', '-207px ' + plus);//קונטרסט גבוה

        var minus = $('.minus').css('backgroundPosition').split(' ')[1];
        $('.minus').css('backgroundPosition', '-207px ' + minus);//קונטרסט גבוה

        var forwardBtn = $('#forwardBtn').css('backgroundPosition').split(' ')[1];
        $('#forwardBtn').css('backgroundPosition', '-104.5px ' + forwardBtn);//קונטרסט גבוה

        var backBtn = $('#backBtn').css('backgroundPosition').split(' ')[1];
        $('#backBtn').css('backgroundPosition', '-104px ' + backBtn);//קונטרסט גבוה

        var closeBut = $('.closeBut').css('backgroundPosition').split(' ')[1];
        $('.closeBut').css('backgroundPosition', '-112px ' + closeBut);//קונטרסט גבוה

        var accBut = $('#accBut').css('backgroundPosition').split(' ')[1];
        $('#accBut').css('backgroundPosition', '-312px ' + accBut);//קונטרסט גבוה

        $(".breadcrumbs").css("color", "white");
        $(".breadcrumbs a").css("color", "#f6ba20");
    }

    $(".contrastBtn").hover(function () {//הובר כפתורים בקונטרסט
        if (accessibility[0] == "false") {
            var contrastBtn = $('.contrastBtn').css('backgroundPosition').split(' ')[1];
            $('.contrastBtn').css('backgroundPosition', '-125px ' + contrastBtn);//קונטרסט נמוך הובר
        }

        else {
            var contrastBtn = $('.contrastBtn').css('backgroundPosition').split(' ')[1];
            $('.contrastBtn').css('backgroundPosition', '-293px ' + contrastBtn);//קונטרסט גבוה הובר
        }
    }, function () {
        if (accessibility[0] == "false") {
            var contrastBtn = $('.contrastBtn').css('backgroundPosition').split(' ')[1];
            $('.contrastBtn').css('backgroundPosition', '-41px ' + contrastBtn);//קונטרסט נמוך
        }

        else {
            var contrastBtn = $('.contrastBtn').css('backgroundPosition').split(' ')[1];
            $('.contrastBtn').css('backgroundPosition', '-209px ' + contrastBtn);//קונטרסט גבוה
        }
    });

    $(".plus").hover(function () {//הובר כפתורים בקונטרסט
        if (accessibility[0] == "false") {
            var plus = $('.plus').css('backgroundPosition').split(' ')[1];
            $('.plus').css('backgroundPosition', '-124px ' + plus);//קונטרסט נמוך הובר
        }

        else {
            var plus = $('.plus').css('backgroundPosition').split(' ')[1];
            $('.plus').css('backgroundPosition', '-291px ' + plus);//קונטרסט גבוה הובר
        }
    }, function () {
        if (accessibility[0] == "false") {
            var plus = $('.plus').css('backgroundPosition').split(' ')[1];
            $('.plus').css('backgroundPosition', '-40px ' + plus);//קונטרסט נמוך
        }

        else {
            var plus = $('.plus').css('backgroundPosition').split(' ')[1];
            $('.plus').css('backgroundPosition', '-207px ' + plus);//קונטרסט גבוה
        }
    });

    $(".minus").hover(function () {//הובר כפתורים בקונטרסט
        if (accessibility[0] == "false") {
            var minus = $('.minus').css('backgroundPosition').split(' ')[1];
            $('.minus').css('backgroundPosition', '-124px ' + minus);//קונטרסט נמוך הובר
        }

        else {
            var minus = $('.minus').css('backgroundPosition').split(' ')[1];
            $('.minus').css('backgroundPosition', '-291px ' + minus);//קונטרסט גבוה הובר
        }
    }, function () {
        if (accessibility[0] == "false") {
            var minus = $('.minus').css('backgroundPosition').split(' ')[1];
            $('.minus').css('backgroundPosition', '-40px ' + minus);//קונטרסט נמוך
        }

        else {
            var minus = $('.minus').css('backgroundPosition').split(' ')[1];
            $('.minus').css('backgroundPosition', '-207px ' + minus);//קונטרסט גבוה
        }
    });

    $("#forwardBtn").hover(function () {//הובר כפתורים בקונטרסט
        if (accessibility[0] == "false") {
            var forwardBtn = $('#forwardBtn').css('backgroundPosition').split(' ')[1];
            $('#forwardBtn').css('backgroundPosition', '-52px ' + forwardBtn);//קונטרסט נמוך הובר
        }

        else {
            var forwardBtn = $('#forwardBtn').css('backgroundPosition').split(' ')[1];
            $('#forwardBtn').css('backgroundPosition', '-156px ' + forwardBtn);//קונטרסט גבוה הובר
        }
    }, function () {
        if (accessibility[0] == "false") {
            var forwardBtn = $('#forwardBtn').css('backgroundPosition').split(' ')[1];
            $('#forwardBtn').css('backgroundPosition', '-0.5px ' + forwardBtn);//קונטרסט נמוך
        }

        else {
            var forwardBtn = $('#forwardBtn').css('backgroundPosition').split(' ')[1];
            $('#forwardBtn').css('backgroundPosition', '-104.5px ' + forwardBtn);//קונטרסט גבוה
        }
    });

    $("#backBtn").hover(function () {//הובר כפתורים בקונטרסט
        if (accessibility[0] == "false") {
            var backBtn = $('#backBtn').css('backgroundPosition').split(' ')[1];
            $('#backBtn').css('backgroundPosition', '-52px ' + backBtn);//קונטרסט נמוך הובר
        }

        else {
            var backBtn = $('#backBtn').css('backgroundPosition').split(' ')[1];
            $('#backBtn').css('backgroundPosition', '-155.5px ' + backBtn);//קונטרסט גבוה הובר
        }
    }, function () {
        if (accessibility[0] == "false") {
            var backBtn = $('#backBtn').css('backgroundPosition').split(' ')[1];
            $('#backBtn').css('backgroundPosition', '-0.5px ' + backBtn);//קונטרסט נמוך
        }

        else {
            var backBtn = $('#backBtn').css('backgroundPosition').split(' ')[1];
            $('#backBtn').css('backgroundPosition', '-104px ' + backBtn);//קונטרסט גבוה
        }
    });

    $(".closeBut").hover(function () {//הובר כפתורים בקונטרסט
        if (accessibility[0] == "false") {
            var closeBut = $('.closeBut').css('backgroundPosition').split(' ')[1];
            $('.closeBut').css('backgroundPosition', '-56px ' + closeBut);//קונטרסט נמוך הובר
        }

        else {
            var closeBut = $('.closeBut').css('backgroundPosition').split(' ')[1];
            $('.closeBut').css('backgroundPosition', '-168px ' + closeBut);//קונטרסט גבוה הובר
        }
    }, function () {
        if (accessibility[0] == "false") {
            var closeBut = $('.closeBut').css('backgroundPosition').split(' ')[1];
            $('.closeBut').css('backgroundPosition', '0px ' + closeBut);//קונטרסט נמוך
        }

        else {
            var closeBut = $('.closeBut').css('backgroundPosition').split(' ')[1];
            $('.closeBut').css('backgroundPosition', '-112px ' + closeBut);//קונטרסט גבוה
        }
    });

    $("#accBut").hover(function () {//הובר כפתורים בקונטרסט
        if (accessibility[0] == "false") {
            var accBut = $('#accBut').css('backgroundPosition').split(' ')[1];
            $('#accBut').css('backgroundPosition', '-151px ' + accBut);//קונטרסט נמוך הובר
        }

        else {
            var accBut = $('#accBut').css('backgroundPosition').split(' ')[1];
            $('#accBut').css('backgroundPosition', '-473px ' + accBut);//קונטרסט גבוה הובר
        }
    }, function () {
        if (accessibility[0] == "false") {
            var accBut = $('#accBut').css('backgroundPosition').split(' ')[1];
            $('#accBut').css('backgroundPosition', '10px ' + accBut);//קונטרסט נמוך
        }

        else {
            var accBut = $('#accBut').css('backgroundPosition').split(' ')[1];
            $('#accBut').css('backgroundPosition', '-312px ' + accBut);//קונטרסט גבוה
        }
    });

    $(".plus").click(function () {//הגדלת טקסט
        var mySize = sessionStorage.getItem('mySize');//בדיקת גודל

        if (mySize != null) {//אם יש ערך תכניס למשתנה חישובי
            sizy = parseInt(mySize);
        }

        if (sizy >= -2 && sizy < 3) {
            sizy = parseInt(sizy + 1);
        }
        sessionStorage.setItem('mySize', sizy);
        getSize();
    });


    $(".minus").click(function () {//הקטנת טקסט
        var mySize = parseInt(sessionStorage.getItem('mySize'));//בדיקת גודל

        if (mySize != null) {//אם יש ערך תכניס למשתנה חישובי
            sizy = parseInt(mySize);
        }

        if (sizy > -2 && sizy <= 3) {
            sizy -= 1;
        }
        sessionStorage.setItem('mySize', sizy);
        getSize();
    });

    function getSize() {//פונקצית עיצוב לפי גודל
        var mySize = sessionStorage.getItem('mySize');//בדיקת גודל

        if (mySize == -2) {
            $('#content').css('font-size', '7px');
            $('.myAcor').css('font-size', '7px');
            $('.mb-0').css('font-size', '13px');
            $('#backText, #forwardText, .contrast, .size').css('font-size', '6px');
            $('#forwardText, #backText').css('margin-top', '24px');
            $('#accessibilityDiv').css('width', '340px');
            $('.contrast').css('width', '34px');
            $('.size').css('width', '25px');
            $('#SkipH1').css('font-size', '10px');
            $('.popupH2').css('font-size', '5px');
            $('.breadcrumbs li').css('font-size', '5px');
        }

        if (mySize == -1) {
            $('#content').css('font-size', '12px');
            $('.myAcor').css('font-size', '12px');
            $('.mb-0').css('font-size', '20px');
            $('#backText, #forwardText, .contrast, .size').css('font-size', '11px');
            $('#forwardText, #backText').css('margin-top', '24px');
            $('#accessibilityDiv').css('width', '340px');
            $('.contrast').css('width', '34px');
            $('.size').css('width', '25px');
            $('#SkipH1').css('font-size', '21px');
            $('.popupH2').css('font-size', '9px');
            $('.breadcrumbs li').css('font-size', '10px');
        }

        if (mySize == 0 || mySize == null) {
            $('#content').css('font-size', '18px');
            $('.myAcor').css('font-size', '18px');
            $('.mb-0').css('font-size', '20px');
            $('#backText, #forwardText, .contrast, .size').css('font-size', '16px');
            $('#forwardText, #backText').css('margin-top', '24px');
            $('#accessibilityDiv').css('width', '340px');
            $('.contrast').css('width', '57px');
            $('.size').css('width', '42px');
            $('#SkipH1').css('font-size', '32px');
            $('.popupH2').css('font-size', '13px');
            $('.breadcrumbs li').css('font-size', '15px');
        }

        if (mySize == 1) {
            $('#content').css('font-size', '24px');
            $('.myAcor').css('font-size', '24px');
            $('.mb-0').css('font-size', '27px');
            $('#backText, #forwardText, .contrast, .size').css('font-size', '21px');
            $('#forwardText, #backText').css('margin-top', '24px');
            $('.contrast').css('width', '84px');
            $('.size').css('width', '75px');
            $('#accessibilityDiv').css('width', '384px');
            $('#SkipH1').css('font-size', '43px');
            $('.popupH2').css('font-size', '17px');
            $('.breadcrumbs li').css('font-size', '20px');
        }

        if (mySize == 2) {
            $('#content').css('font-size', '30px');
            $('.myAcor').css('font-size', '30px');
            $('.mb-0').css('font-size', '34px');
            $('#backText, #forwardText, .contrast, .size').css('font-size', '26px');
            $('#forwardText, #backText').css('margin-top', '18px');
            $('.contrast').css('width', '103px');
            $('.size').css('width', '75px');
            $('#accessibilityDiv').css('width', '384px');
            $('#SkipH1').css('font-size', '54px');
            $('.popupH2').css('font-size', '21px');
            $('.breadcrumbs li').css('font-size', '25px');
        }

        if (mySize == 3) {
            $('#content').css('font-size', '36px');
            $('.myAcor').css('font-size', '36px');
            $('.mb-0').css('font-size', '41px');
            $('#backText, #forwardText, .contrast, .size').css('font-size', '31px');
            $('#forwardText, #backText').css('margin-top', '18px');
            $('.contrast').css('width', '103px');
            $('.size').css('width', '75px');
            $('#accessibilityDiv').css('width', '384px');
            $('#SkipH1').css('font-size', '65px');
            $('.popupH2').css('font-size', '25px');
            $('.breadcrumbs li').css('font-size', '30px');
        }
    }

    //////////////עמוד הבית///////////////////
    //$("#prepareCourseTxt").hover(function () {
    //    var prepareCourseBtn = $('#prepareCourseBtn').css('backgroundPosition').split(' ')[1];
    //    $('#prepareCourseBtn').css('backgroundPosition', '-70px ' + prepareCourseBtn);//הובר
    //}, function () {     
    //    var prepareCourseBtn = $('#prepareCourseBtn').css('backgroundPosition').split(' ')[1];
    //    $('#prepareCourseBtn').css('backgroundPosition', '3px ' + prepareCourseBtn);//רגיל
    //});


    //////////////עמוד טיפים///////////////////
    //console.log(width);
    $(".myTabs").hide();
    $(".myTabsBtn").click(function () {//פונקצית רקעי כפתורים 
        var changeBg = $(".myTabsBtn").css('backgroundPosition').split(' ')[1];//איפוס רקעי כפתורים
        $(".myTabsBtn").css('backgroundPosition', '5px ' + changeBg);
        var changeCurrent = $(this).css('backgroundPosition').split(' ')[1];//הבלטת כפתור פעיל
        $(this).css('backgroundPosition', '-91px ' + changeCurrent);
    });

    $("#prepareMantallyBtn").click(function () {
        var width = $(window).width();
       $(".myTabs").hide();
       $(".myTabsBtn").attr('aria-expanded', false);
       $("#prepareMantallyBtn").attr('aria-expanded', true);
       if (width > 575) {
           console.log("מחשב");
           $("#prepareMantallyDiv").fadeIn();
       }

       else {
           $("#prepareMantallyDivPhone").fadeIn();         
       }
        $('#prepareMantallyTxt').css('text-decoration', 'underline solid');
        $('#prepareOrientationTxt').css('text-decoration', 'none');
    });

    $("#prepareOrientationBtn").click(function () {
        var width = $(window).width();
        $(".myTabs").hide();
        $(".myTabsBtn").attr('aria-expanded', false);
        $("#prepareOrientationBtn").attr('aria-expanded', true);
        if (width > 575) {
            $("#prepareOrientationDiv").fadeIn();
        }

        else {
            $("#prepareOrientationDivPhone").fadeIn();
        }
        $('#prepareOrientationTxt').css('text-decoration', 'underline solid');
        $('#prepareMantallyTxt').css('text-decoration', 'none');
    });

    //////////////עמוד הכרת חדר השינה///////////////////
    $("#bed").click(function () {
        $("#bedWin").show();
    });
   
    $(".closePopUp").click(function () {
        $(".hotspotWin").hide();
    });
});