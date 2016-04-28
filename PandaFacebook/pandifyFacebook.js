/*
* Define the svg panda picture and check every 2 seconds to replace the thumbs on the page.
*/
var color = "#000000";

function updatePandaSvg(color) {
    return "<svg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns#' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' version='1.1' id='panda' x='0px' y='0px' width='100%' height='100%' viewBox='0 0 128 128' enable-background='new 0 0 128 128' xml:space='preserve'><metadata id='metadata4157'><rdf:RDF><cc:Work rdf:about=''><dc:format>image/svg+xml</dc:format><dc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage'/><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id='defs4155'/><path style='fill:" + color + ";fill-opacity:1' id='path4143' d='m 121.15,45.86 0,0 0,-1.02 c 0.19,-1.12 1.05,-1.97 1.7,-2.87 l 0.4,-0.54 c 0.92,-1.37 1.64,-2.86 2.27,-4.38 2.94,-7 3.02,-14.82 -0.68,-20.55 -2.62,-4.05 -12.97,-14.56 -29.3,-5.67 -5.9,3.21 -11.21,1.83 -11.21,1.83 0,0 0,0.03 0,0.05 C 78.09,10.9 71.54,9.94 65,9.94 l -0.29,0 c -7.18,0 -14.44,1.11 -21.18,3.3 -0.92,0.2 -5.71,1.02 -11.02,-1.87 C 16.17,2.49 5.82,12.99 3.2,17.04 c -1.13,1.76 -1.97,3.88 -2.41,5.9 -0.81,3.83 -0.49,8.09 0.69,11.82 0.63,2 1.56,3.87 2.54,5.73 0.63,1.23 1.29,2.45 2.1,3.59 1.88,2.64 1.12,5.11 1.12,5.11 l 0.01,0 c -2.18,5.89 -3.54,12.04 -3.89,18.14 -0.93,15.8 1.84,31.72 14.58,42.71 7.05,6.08 15.82,10.21 24.86,12.44 3.44,0.86 12.32,2.83 21.63,2.83 9.31,0 19.05,-1.97 22.49,-2.83 9.04,-2.23 17.81,-6.36 24.87,-12.44 12.73,-10.99 15.5,-26.9 14.58,-42.71 -0.43,-7.26 -2.24,-14.6 -5.22,-21.47 z m -56.72,72.46 c -8.49,0 -16.77,-1.83 -19.95,-2.63 -8.52,-2.1 -16.12,-5.89 -21.98,-10.95 -9.18,-7.92 -13.16,-20.02 -12.17,-37 0.39,-6.7 2.11,-13.41 4.87,-19.61 3.44,-7.73 8.51,-14.67 14.74,-19.83 3.83,-3.17 8.45,-5.7 13.51,-7.6 6.5,-2.42 13.76,-3.77 21.27,-3.77 l 0.28,0 c 6.86,0 13.52,1.1 19.57,3.14 5.76,1.93 10.97,4.71 15.22,8.23 6.08,5.04 11.05,11.79 14.49,19.3 2.9,6.35 4.71,13.25 5.12,20.14 0.99,16.98 -2.99,29.09 -12.17,37 -5.86,5.06 -13.46,8.84 -21.99,10.96 -3.66,0.9 -12.7,2.62 -20.81,2.62 z'/><path style='fill:" + color + ";fill-opacity:1' id='path4145' d='m 54.44,70.25 c 1.04,-5.2 -1.59,-11.12 -6.27,-13.73 -6.69,-3.71 -14.78,-2.48 -20.78,1.9 -3.47,2.53 -7.67,6.37 -9.88,10.09 -3.87,6.54 -4.64,16.42 0.5,22.76 3.19,3.93 8.71,5.37 13.5,4.49 5.65,-1.05 9.32,-5.23 12.77,-9.51 3.26,-4.08 7.14,-8.01 9.19,-12.89 0.43,-1.02 0.77,-2.05 0.97,-3.11 z m -12.91,3.62 c -3.53,0 -6.39,-2.79 -6.39,-6.23 0,-3.45 2.86,-6.25 6.39,-6.25 3.53,0 6.4,2.8 6.4,6.25 0,3.44 -2.86,6.23 -6.4,6.23 z'/><path style='fill:" + color + ";fill-opacity:1' id='path4147' d='m 111.95,92.19 c 5.43,-6.71 4.62,-17.15 0.52,-24.06 -2.32,-3.93 -6.77,-7.99 -10.43,-10.66 -6.33,-4.64 -14.89,-5.94 -21.95,-2.01 -4.97,2.76 -7.73,9.02 -6.63,14.51 0.21,1.11 0.58,2.21 1.01,3.28 2.18,5.16 6.27,9.31 9.73,13.63 3.62,4.52 7.52,8.93 13.48,10.04 5.06,0.94 10.89,-0.59 14.27,-4.73 z M 87.32,73.87 c -3.53,0 -6.39,-2.79 -6.39,-6.23 0,-3.45 2.87,-6.25 6.39,-6.25 3.53,0 6.39,2.8 6.39,6.25 0,3.44 -2.86,6.23 -6.39,6.23 z'/><path style='fill:" + color + ";fill-opacity:1' id='path4149' d='m 75.21,98.63 c -0.14,0.19 -3.28,4.51 -10.67,4.51 -7.34,0 -10.49,-4.29 -10.65,-4.51 -0.71,-1.04 -2.14,-1.32 -3.2,-0.6 -1.06,0.72 -1.33,2.16 -0.62,3.21 0.18,0.27 4.54,6.52 14.46,6.52 9.93,0 14.3,-6.26 14.48,-6.52 0.71,-1.05 0.45,-2.47 -0.6,-3.19 -1.03,-0.72 -2.47,-0.46 -3.2,0.58 z'/><path style='fill:" + color + ";fill-opacity:1' id='path4151' d='m 64.55,94.6 c 5.54,0 10.04,-3.62 10.04,-8.09 0,-4.47 -4.5,-8.09 -10.04,-8.09 -5.54,0 -10.03,3.62 -10.03,8.09 0,4.47 4.48,8.09 10.03,8.09 z'/></g></svg>";
}

var pandaSvg = updatePandaSvg(color);

setInterval(function() {
	pandifyFacebook();
}, 2000);

function replaceThumbs(thumbs, thumb) {
    // div > svg > g > g > path
    color = thumb.childNodes[0].childNodes[1].childNodes[0].childNodes[0].attributes.fill.value;
    pandaSvg = updatePandaSvg(color);
    console.log(color);
    for(var i=0; i<thumbs.length;i++) {
        thumbs[i].innerHTML = pandaSvg;
    }
}

function pandifyFacebook() {
    /* Get all the "ThumbsUp" in the conversation. */
    var thumbs = document.getElementsByClassName('_1i1j');
    if (thumbs.length > 0) {
        var firstThumb = thumbs[0];
        var lastThumb = thumbs[thumbs.length-1];
        if (firstThumb.firstChild.id === "") {
            // it is actually a thumb
            // if not it means thumbs have already been replaced
            // first can appear if the user loads previous messages.
            replaceThumbs(thumbs, firstThumb);
        } else if (lastThumb.firstChild.id === "") {
            // last can appear if the user answers a new thumb
            replaceThumbs(thumbs, lastThumb);
        }
    }
};