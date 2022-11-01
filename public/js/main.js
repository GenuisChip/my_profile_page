let list = [
  {
    id: 3,
    projectType: "Mobile",
    imagesUrl: [],
    name: "3nuta",
    shortDescription:
      "3anuta is a next-generation ordering application for micro-finance powered by creditor. It is a revolutionary platform developed with cutting edge technology that connects suppliers and Retailers to Buy, Sell and Earn, using the Earn Now Pay Later method.",
    technologies: ["Dart", "Flutter", "Android"],
    imageAssets: "public/assets/apps_screenshots/3nuta_app.png",
    googleStoreLink:
      "https://play.google.com/store/apps/details?id=com.creditor.anuta.retailer",
  },
  {
    id: 1,
    projectType: "Mobile",
    imagesUrl: [],
    name: "Logos",
    shortDescription:
      "Help Logos members to find helpful and details information regarding session and surveys of Logos events",
    technologies: ["Dart", "Flutter", "iOS", "Android"],
    imageAssets: "public/assets/apps_screenshots/logos_app.png",
    appStoreLink:
      "https://apps.apple.com/eg/app/logos-coptic-youth-forum/id1639572048",
    googleStoreLink:
      "https://play.google.com/store/apps/details?id=com.worldyouthweek.logos",
  },
  {
    id: 2,
    projectType: "Mobile",
    imagesUrl: [],
    name: "mngm",
    shortDescription:
      "mngm is a precious-metals platform focused on introducing global standard precious metals’ services to Egypt. mngm offers access to buy, sell, store, and utilize precious metals at multiples of 0.1 grams. Our aim is to democratize precious metals to all market participants through transparent, simple and innovative means.",
    technologies: ["Dart", "Flutter", "iOS", "Android"],
    imageAssets: "public/assets/apps_screenshots/mngm_app.png",
    googleStoreLink:
      "https://play.google.com/store/apps/details?id=com.evolveinvestmentholding.mngm",
    appStoreLink: "",
  },

  {
    id: 4,
    projectType: "Mobile",
    imagesUrl: [],
    name: "Africa",
    shortDescription:
      "Explore Animals Photos, Videos and Information in Africa",
    technologies: ["SwiftUI", "Swift", "iOS"],
    imageAssets: "public/assets/apps_screenshots/africa_app.png",
    gitHubLink: "https://github.com/GenuisChip/SwiftUI-Africa-App",
  },
  {
    id: 5,
    projectType: "Mobile",
    imagesUrl: [],
    name: "Fruit",
    shortDescription: "Get More Information about Fruits.",
    technologies: ["SwiftUI", "Swift", "iOS"],
    imageAssets: "public/assets/apps_screenshots/fruit_app.png",
    gitHubLink: "https://github.com/GenuisChip/SwiftUI-Fruit-App",
  },
  {
    id: 6,
    projectType: "Web",
    imagesUrl: [],
    name: "Natours",
    shortDescription: "Natours website landpage pure HTML CSS SASS",
    technologies: ["HTML", "CSS", "SASS"],
    imageAssets: "public/assets/apps_screenshots/natours_website.png",
    gitHubLink:
      "https://github.com/GenuisChip/natours-website-pure-html-css-sass",
    onlineDemoUrl:
      "https://genuischip.github.io/natours-website-pure-html-css-sass/",
  },
];

let technologies = {
  Dart: ["Flutter"],
  "C#": [".Net Core"],
  JavaScript: ["Nodejs", "Reactjs"],
  Typescript: ["Nodejs", "Reactjs", "Angularjs", "loopback4"],
  Database: ["MongoDB", "MySQL", "SQL Server"],
  "C++": ["Arduino"],
  Java: ["Android"],
  Swift: ["iOS"],
  "V control": ["git"],
};

$(document).ready(function () {
  $("#technologies-section").append(
    Object.keys(technologies).map(
      (key, i) =>
        "<div class='row'><div class='col-sm technology-key'>" +
        key +
        "</div> <div class='tech-icon'>&#x279D;</div> " +
        technologies[key]
          .map((list, i) =>
            (list + "")
              .toString()
              .split(",")
              .map(
                (v, i) => "<div class='col-sm technology-value'>" + v + "</div>"
              )
          )
          .join("") +
        "</div>"
    )
  );

  $("#pills-mobile").append(
    '<div class="row home_screenshots_container">' +
      list
        .filter((v) => v.projectType == "Mobile")
        .map(
          (v, i) =>
            `<div class= "home_mobile_div"> 
    <img class="home_mobile_screen_shot" style="margin-left: 12%" src="` +
            v.imageAssets +
            `"/>
            <h5>` +
            v.name +
            `</h5>
            <div style="display:flex">
          ` +
            v.technologies
              .map(
                (v, i) =>
                  '<div class="home_mobile_screen_shot_label">' + v + "</div>"
              )
              .join("") +
            `
            </div>
            <p style="color:grey">` +
            v.shortDescription +
            `</p>
            <div class="row">
              ` +
            (v.gitHubLink != undefined
              ? '<div class="col-sm"><a target="_blank" href="' +
                v.gitHubLink +
                '"><img src="public/assets/images/github.png" height="30" /></a></div>'
              : "") +
            (v.googleStoreLink != undefined
              ? '<div class="col-sm"><a target="_blank" href="' +
                v.googleStoreLink +
                '"><img src="public/assets/images/available_google_play.png" width="90" height="30" /></a></div>'
              : "") +
            (v.appStoreLink != undefined
              ? '<div class="col-sm"><a target="_blank" href="' +
                v.appStoreLink +
                '"><img src="public/assets/images/available_app_store.png" width="90"  height="30" /></a></div>'
              : "") +
            `
            </div>
            
    </div>`
        )
        .join(" ") +
      "</div>"
  );

  $("#pills-websites").append(
    '<div class="row home_screenshots_container">' +
      list
        .filter((v) => v.projectType == "Web")
        .map(
          (v, i) =>
            `<div class= "home_web_div"> 
  <img class="home_web_screen_shot" src="` +
            v.imageAssets +
            `"/>
          <h5>` +
            v.name +
            `</h5>
          <div style="display:flex">
        ` +
            v.technologies
              .map(
                (v, i) =>
                  '<div class="home_web_screen_shot_label">' + v + "</div>"
              )
              .join("") +
            `
          </div>
          <p style="color:grey">` +
            v.shortDescription +
            `</p>
          <div class="row">
            ` +
            (v.gitHubLink != undefined
              ? '<div class="col-sm"><a target="_blank" href="' +
                v.gitHubLink +
                '"><img src="public/assets/images/github.png" height="30" /></a></div>'
              : "") +
            (v.googleStoreLink != undefined
              ? '<div class="col-sm"><a target="_blank" href="' +
                v.googleStoreLink +
                '"><img src="public/assets/images/available_google_play.png" width="90" height="30" /></a></div>'
              : "") +
            (v.appStoreLink != undefined
              ? '<div class="col-sm"><a target="_blank" href="' +
                v.appStoreLink +
                '"><img src="public/assets/images/available_app_store.png" width="90"  height="30" /></a></div>'
              : "") +
            `
          </div>
          
  </div>`
        )
        .join(" ") +
      "</div>"
  );

  $("#contact-me-button").click(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  $("#check-my-work-button").click(() => {
    let height = document.body.scrollHeight;
    window.scrollTo(0, height > 4000 ? height / 4 : height / 3);
  });
});
