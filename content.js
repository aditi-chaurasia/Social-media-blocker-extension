let generateHTML =(pagename)=>{
   return ` <div>Error 404 Productivity not found</div>
   <div> Productivity > ${pagename}
   </div>`
};

let generateCSS = () => {
  return `<style>
    body {
      background:#000000;
      color:#FFFFFF;
      text-align: center;
      margin-top: 16%;
      font-size:50px;
      text-decoration: underline;
      font-family: cursive;
    }
    </style>`;
};


switch(window.location.hostname)
{
    case "www.youtube.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Youtube");
    break;

    case "www.instagram.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Instagram");    
    break;

    case "www.facebook.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Facebook");
    break;

    case "www.linkedln.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Linkedln");
    break;

    case "www.flipkart.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Flipkart");    
    break;

    case "www.amazon.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTM("Amazon");    
    break;

    case "www.twitter.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Twitter");
    break;

    case "www.pinterest.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Printerest");
    break;
    
    case "www.snapchat.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Snapchat");
    break;

    case "www.myntra.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Myntra");
    break;

    case "www.hotstar.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Hotstar");
    break;

    case "www.netflix.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Netflix");
    break;

    case "discord.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Discord");
      break;
    case "www.spotify.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Spotify");
    
}

