/*
* TO USE ON THE 'Archive' TAB OF THE 'Saved Articles' PAGE OF FACEBOOK (https://www.facebook.com/saved/?cref=28&collection_token=...)
* Tested on 483 elements max. A little long but it worked!
*/
var facebookEmptyArchive = function() {
    /* Get all the "..." button that expand in ["Unarchive", "Delete"] menu. */
    var inputs = document.getElementsByClassName('_42ft _4jy0 _p _4jy3 _517h _51sy'); 
    var numItems = inputs.length; 
    /* Just to know how many articles were deleted. */
    // alert(inputs.length + ' articles will be deleted from the archive.');
    /* Click on the button to make the menus appear in the DOM */
    for(var i=0; i<inputs.length;i++) { inputs[i].click(); } 
    /* Get all the "Delete" element one by menu. We also get the "Unarchive". */
    var temp = document.getElementsByClassName('_54nh');
    /* Clic on the "Delete" elements. Every other two elements to skip "Unarchive ones". */
    for(var i=1; i<temp.length;i=i+2) { temp[i].parentElement.parentElement.click(); }
    return numItems;
}