window.onload = load;

function load() {
  var outerContainer = $("#outer-container");
  var header = $("#header");
  var row = $(".feature-row");
  var box = $(".box");
  var featureBoxWidth = 33.33 + "%"; /*the original width of the feature boxes*/
  var newFeatureBoxWidth = 40; /*the width the boxes should scale to*/
  var mobile = 769;


  TweenLite.to(outerContainer,1,{opacity:1});

  function setWidth() {
    var lg = newFeatureBoxWidth;
    var lgString = lg + "%";
    var rem = (100 - lg) / 2;
    var remString = rem + "%";
    var boxFocus = $(this);
    var boxSiblings = $(this).siblings();

    if ($(window).width() >= 769) {
      TweenLite.to(boxFocus, 0.5, {width: lgString});
      TweenLite.to(boxSiblings, 0.5, {width: remString});
    }
  }

  function resetWidth() {
    var resetChildren = $(this).children(box);
    var resetWidthString = featureBoxWidth + "%";

    if ($(window).width() >= 769) {
      TweenLite.to(resetChildren, 0.5, {width: featureBoxWidth});
    }
  }

  box.mouseenter(setWidth);
  row.mouseleave(resetWidth);
}

console.log('base2');
