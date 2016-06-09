(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXXXXX-X', 'auto'); // remember to put in your own id

$(function() {
    $("[data-ga]").each(function () {

        var settings = {
            set: $(this).attr("data-ga-set"),
            send: $(this).attr("data-ga-send") || "pageview",
            page: $(this).attr("data-ga-page") || window.location.pathname,
            title: $(this).attr("data-ga-title") || $("title").text(),
            category: $(this).attr("data-ga-category"),
            action: $(this).attr("data-ga-action"),
            label: $(this).attr("data-ga-label"),
            value: $(this).attr("data-ga-value"),
            nonInteraction: $(this).attr("data-ga-noninteraction"),
            trigger: $(this).attr("data-ga-trigger") || "click"
            };

        if (settings.trigger == "init") {
            doGa(settings);
        }
        else {
            $(this).on(settings.trigger, function () {
                doGa(settings);
            });
        }

    });

    function doGa(settings) {
        console.log("GA", settings);

        if (settings.set !== undefined) {
            var setObject = JSON.parse(settings.set);
            ga("set", setObject);
        }
        else {
            if (settings.send == "page" || settings.send == "pageview") {
                ga("send", "pageview", {
                    "page": settings.page,
                    "title": settings.title
                });
            }
            else if (settings.send == "event") {
                if (settings.category !== undefined && settings.action !== undefined) {
                    var eventObj = {};
                    eventObj.hitType = "event",
                    eventObj.eventCategory = settings.category;
                    eventObj.eventAction = settings.action;

                    if (settings.label !== undefined) {
                        eventObj.eventLabel = settings.label;
                    }

                    if (settings.value !== undefined) {
                        eventObj.eventValue = parseFloat(settings.value);
                    }

                    if (settings.nonInteraction !== undefined) {
                        eventObj.nonInteraction = 1;
                    }

                    ga("send", eventObj);
                }
                else {
                    throw "Missing category or action parameter for event tracking";
                }
            }
        }
    }
});
