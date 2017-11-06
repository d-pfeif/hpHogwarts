fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=harrypotter&sort=newest&api-key=606e61abf0b846909e1db653220e47be')
.then((res)=>{
  return res.json()
  .then ((newsData)=>{
    console.log(newsData.response.docs)
    var serial = document.getElementById('serial');
    console.log(serial)
    for(var i = 0; i < 5; i++){
      var aTag = document.createElement('a')
      var div = document.createElement('div')
      var pTag = document.createElement('p')

      aTag.href = newsData.response.docs[i].web_url;
      div.className = "media";
      div.innerText = newsData.response.docs[i].headline.main;

      aTag.append(div);
      // div.append(pTag);
      serial.append(aTag);
    }
  })
})
