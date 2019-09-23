var fonts = [
  {"font-family": "Kristi"},
  {"font-family": "Dosis"},
  {"font-family": "Lovers Quarrel"},
  {"font-family": "Poller one"},
  {"font-family": "Allura"},
  {"font-family": "Source Code Pro"},
  {"font-family": "Titillium Web"},
  {"font-family": "Exo 2"},
  {"font-family": "Roboto"},
  {"font-family": "Ruthie"}
];

var str ="Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language. While most often used to change the style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any kind of XML document, including plain XML, SVG and XUL. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications."

var range = 150;

var j_str = str.split(" ");

for(var i=0; i < j_str.length; i++){
  var font_r = Math.floor(Math.random()* fonts.length);
  var div = $('<span>' + j_str[i] + '</span>');
  div.css("fontSize", Math.random()*range).css(fonts[font_r]);
  div.appendTo('h1').delay(i * 250).animate({opacity:1});  
}

