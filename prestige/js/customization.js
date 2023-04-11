let observer = new MutationObserver(mutationRecords => {
    alert(mutationRecords); // alert(the changes)
  });

// observe everything except attributes
observer.observe(competition, {
    childList: true, // observe direct children
    subtree: true, // lower descendants too
    characterDataOldValue: true, // pass old data to callback
});

//if (compSelector.innerHTML == "Prestige Dancesport"){
//    document.getElementById("image-logo").src = "images/PrestigeLogo2.png";
//    document.getElementById("bg-video").src = "./video/Detroit.mp4"
//} else {
//    document.getElementById("image-logo").src = "dcr.png"
//    document.getElementById("bg-video").src = "./video/BGvid2.mp4"
//}
