$(document).ready(function() {

    var crumbs = document.querySelectorAll('.breadcrumb a');
    var trail = Array.prototype.map.call(crumbs, function (item) {return item.innerText}).join('/');
    var pageTitle = document.querySelector('.a-heading__title').innerText;
    trail = trail.concat("/",pageTitle);

    window.dataLayer = window.dataLayer || [];
    // Push the breadcrumb trail to the dataLayer
    dataLayer.push({
    'event': 'dataLayer',
    'breadcrumbTrail': trail
    });

});