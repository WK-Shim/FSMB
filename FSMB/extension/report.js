function report(callback) {
    const ip = "test"
    const reportArr=[2,3,2];
    $.ajax({
           url: " https://e30d-203-234-195-108.ngrok.io/report",
           type: "GET",
           dataType: "json",
           data: {
             link: window.location.href,
             report:reportArr,
             ip:ip
           },
           success: (data, textStatus, jqXHR) => {
             console.log("success");
            console.log(data);
             console.log(textStatus);
             console.log(jqXHR);

             callback();
           },
         });
}

const reportButton = document.querySelector(`#reportButton`);
reportButton.addEventListener("click",()=>{
    report(()=>{
      reportButton.innerHTML = "신고 완료";
    });
});

const reportBack = () => {
  reportButton.innerHTML = "이 사이트 신고하기";
}