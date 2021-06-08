const citations = [ "[study which shows singletasking is better]",
                    "[distress related study]",
                    "[sources for people being disorganized + My survey]",
                    "According to the evaluation model described later.",
                    "Where 0 corresponds to very low and 100% corresponds to very high.",
                    "On the same scale as Task Metrics."
];

const cites = $("sup[data-cite]");
for(var x = 0; x < cites.length; x++){
    $(cites[x]).text(x+1);
    $("#citations").append("<li>" + citations[$(cites[x]).attr('data-cite')] + "</li>");
}