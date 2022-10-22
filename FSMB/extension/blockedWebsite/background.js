// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//   // Prevents script from running when other frames load
//   if (tab.frameId == 0) {
//     chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
//       // Get the URL of the webpage
//       let url = tabs[0].url;
//       // Remove unnecessary protocol definitions and www subdomain from the URL
//       let parsedUrl = url
//         .replace("https://", "")
//         .replace("http://", "")
//         .replace("www.", "");

//       console.log(parsedUrl);
//       console.log(ssadsadad)

//     });


//     //db에서 받은 데이터 임시 가정
//     const db = {
//         "1": 3,
//         "2": 4,
//         "3": 5,
//         "4": 1,
//         "5": 7,
//         "ip": {
//             "asdsadasd":true,
//             "asdasdasd":true
//         }
//     }

//     const reportedTimes = db['1'] + db['2'] + db['3'] + db['4'] + db['5'];

//     if(url === 'https://github.com/'){
//         window.open("./blockedWebstie.html", "_self");
//     }
//   }
// });






chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  let url = tab.url;
  //Remove unnecessary protocol definitions and www subdomain from the URL
  let parsedUrl = url.replace("https://", "").replace("http://", "").replace("www.", "");

  console.log(url);

  //db에서 받은 데이터 임시 가정
  const db = {
      "1": 3,
      "2": 4,
      "3": 5,
      "4": 1,
      "5": 7,
      "ip": {
          "asdsadasd":true,
          "asdasdasd":true
      }
  }

  const reportedTimes = db['1'] + db['2'] + db['3'] + db['4'] + db['5'];

  if(url === 'https://github.com/'){
    console.log('asdadasdasd')
    chrome.windows.create({
        url: chrome.runtime.getURL("./blockedWebsite.html"),
        type: "popup"
    });
  }
});