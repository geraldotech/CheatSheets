(function () {
    var corecss = document.createElement("link");
    var themecss = document.createElement("link");
    //var corecssurl = "./assets/shCore.css?ver=3.0.83c";
    var corecssurl = "https://gmapdev.s3.amazonaws.com/assets/shCoreEclipse.css";
    if (corecss.setAttribute) {
      corecss.setAttribute("rel", "stylesheet");
      corecss.setAttribute("type", "text/css");
      corecss.setAttribute("href", corecssurl);
    } else {
      corecss.rel = "stylesheet";
      corecss.href = corecssurl;
    }
    document
      .getElementsByTagName("head")[0]
      .insertBefore(
        corecss,
        document.getElementById("syntaxhighlighteranchor")
      );
      //
    var themecssurl = "https://gmapdev.s3.amazonaws.com/assets/shThemeDefault.css";
    if (themecss.setAttribute) {
      themecss.setAttribute("rel", "stylesheet");
      themecss.setAttribute("type", "text/css");
      themecss.setAttribute("href", themecssurl);
    } else {
      themecss.rel = "stylesheet";
      themecss.href = themecssurl;
    }
    //document.getElementById("syntaxhighlighteranchor").appendChild(themecss);
    document
      .getElementsByTagName("head")[0]
      .insertBefore(
        themecss,
        document.getElementById("syntaxhighlighteranchor")
      );
  })();
  SyntaxHighlighter.config.strings.expandSource = "+ expand source";
  SyntaxHighlighter.config.strings.help = "?";
  SyntaxHighlighter.config.strings.alert = "SyntaxHighlighter\n\n";
  SyntaxHighlighter.config.strings.noBrush = "Can't find brush for: ";
  SyntaxHighlighter.config.strings.brushNotHtmlScript =
    "Brush wasn't configured for html-script option: ";
  SyntaxHighlighter.defaults["pad-line-numbers"] = false;
  SyntaxHighlighter.all();