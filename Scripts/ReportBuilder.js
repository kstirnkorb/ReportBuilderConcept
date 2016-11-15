$(document).ready(function() {

    var dimensionsState = "collapsed";
    var metricsState = "collapsed";

    // Dimensions display methods.
    $("#secStateDimensions").click(function() {
        if ($("#sectionLeftDimensions").is(":hidden")) {
            $("#sectionLeftDimensions").slideDown();
            $("#sectionRightDimensions").slideDown();

            $("#containerDimensions").delay(300).fadeIn();
            $("#dividerDimensions").delay(300).fadeIn();
            $("#maskDimensions").fadeIn('fast', function() {
                $('#imageDimensions').delay(300).attr("class", "dividerCollapsed");
                dimensionsState = "collapsed";
            });
        } else {
            $("#containerDimensions").fadeOut();
            $("#dividerDimensions").fadeOut();
            $("#maskDimensions").delay(500).fadeOut('fast', function() {
                $('#imageDimensions').delay(300).attr("class", "dividerCollapsed");
                dimensionsState = "collapsed";
            });

            $("#sectionLeftDimensions").delay(300).slideUp();
            $("#sectionRightDimensions").delay(300).slideUp();
        }
    });

    // Dimension Filters methods.
    $("#dividerDimensions").click(function() {
        if (dimensionsState == "collapsed") {
            $('#maskDimensions').fadeOut('fast', function() {
                // Animation complete.
                $('#imageDimensions').attr("class", "dividerExpanded");
                dimensionsState = "expanded";
            });
        } else {
            $('#maskDimensions').fadeIn('fast', function() {
                // Animation complete.
                $('#imageDimensions').attr("class", "dividerCollapsed");
                dimensionsState = "collapsed";
            });
        }
    });

    // Metrics display methods.
    $("#secStateMetrics").click(function() {
        if ($("#sectionLeftMetrics").is(":hidden")) {
            $("#sectionLeftMetrics").slideDown();
            $("#sectionRightMetrics").slideDown();

            $("#containerMetrics").delay(300).fadeIn();
            $("#dividerMetrics").delay(300).fadeIn();
            $("#maskMetrics").fadeIn();
        } else {
            $("#containerMetrics").fadeOut();
            $("#dividerMetrics").fadeOut();
            $("#maskMetrics").delay(500).fadeOut();

            $("#sectionLeftMetrics").delay(300).slideUp();
            $("#sectionRightMetrics").delay(300).slideUp();
        }
    });

    // Metric Filters display methods.
    $("#dividerMetrics").click(function() {
        if (metricsState == "collapsed") {
            $('#maskMetrics').fadeOut('fast', function() {
                // Animation complete.
                $('#imageMetrics').attr("class", "dividerExpanded");
                metricsState = "expanded";
            });
        } else {
            $('#maskMetrics').fadeIn('fast', function() {
                // Animation complete.
                $('#imageMetrics').attr("class", "dividerCollapsed");
                metricsState = "collapsed";
            });
        }
    });

    // Schedule display methods.
    $("#secStateSchedule").click(function() {
        if ($("#sectionLeftSchedule").is(":hidden")) {
            $("#sectionLeftSchedule").slideDown();
            $("#sectionRightSchedule").slideDown();
        } else {
            $("#sectionLeftSchedule").slideUp();
            $("#sectionRightSchedule").slideUp();
        }
    });

    // Sharing display methods.
    $("#secStateSharing").click(function() {
        if ($("#sectionLeftSharing").is(":hidden")) {
            $("#sectionLeftSharing").slideDown();
            $("#sectionRightSharing").slideDown();
        } else {
            $("#sectionLeftSharing").slideUp();
            $("#sectionRightSharing").slideUp();
        }
    });

    // Metric Builder methods.
    $("#imgMetricBuilder").click(function() {
        el = document.getElementById("overlay");
        el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";

        var bodyContainer = document.getElementById("bodyContainer");
        var metricBuilderContainer = document.getElementById("metricBuilderContainer");
        var innerHeight = bodyContainer.offsetHeight;

        $(el).css("height", innerHeight + 100);

        var containerTopMargin = ($(window).height() - metricBuilderContainer.offsetHeight) / 2;

        var docHeight = $(document).height();
        var scroll = $(window).scrollTop();

        $(metricBuilderContainer).css("margin-top", (containerTopMargin + scroll));

        // Turn off scroll during modal mode.
        $("body").css("overflow", "hidden");
    });

    $("#btnMetricBuilderClose").click(function() {
        el = document.getElementById("overlay");
        el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";

        // Turn scrolling back on.
        $("body").css("overflow", "auto");
    });

});	