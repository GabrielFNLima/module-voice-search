define(["jquery",'mage/translate', "domReady!"], function ($,$t) {
    "use strict";
    var $voiceSearchTrigger = $("#voice-search-trigger");
    var $miniSearchForm = $("#search_mini_form");
    var $searchInput = $("#search");
    window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    function _parseTranscript(e) {
        return Array.from(e.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join("");
    }

    function _transcriptHandler(e) {
        $searchInput.val(_parseTranscript(e));
        if (e.results[0].isFinal) {
            $miniSearchForm.submit();
        }
    }

    if (window.SpeechRecognition) {
        var recognition = new SpeechRecognition();
        recognition.lang = "pt-BR";
        recognition.interimResults = true;
        recognition.addEventListener("result", _transcriptHandler);
    } else {
        alert(
            $t("Speech Recognition is not supported in your browser or it has been disabled.")
        );
    }

    function startListening(e) {
        e.preventDefault();
        $searchInput.attr("placeholder", $t("Listening..."));
        recognition.start();
    }

    return function () {
        $voiceSearchTrigger.on("click touch", startListening);
    };
});
