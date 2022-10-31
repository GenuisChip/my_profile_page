let list = [
  {
    id: 3,
    projectType: "Mobile",
    imagesUrl: [],
    name: "3nuta",
    shortDescription:
      "Install, launch, and manage all your Zoho applications with our new mobile app.",
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
      "Install, launch, and manage all your Zoho applications with our new mobile app.",
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
      "Install, launch, and manage all your Zoho applications with our new mobile app.",
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
      "Install, launch, and manage all your Zoho applications with our new mobile app.",
    technologies: ["SwiftUI", "Swift", "iOS"],
    imageAssets: "public/assets/apps_screenshots/africa_app.png",
    gitHubLink: "https://github.com/GenuisChip/SwiftUI-Africa-App",
  },
  {
    id: 5,
    projectType: "Mobile",
    imagesUrl: [],
    name: "Fruit",
    shortDescription:
      "Install, launch, and manage all your Zoho applications with our new mobile app.",
    technologies: ["SwiftUI", "Swift", "iOS"],
    imageAssets: "public/assets/apps_screenshots/fruit_app.png",
    gitHubLink: "https://github.com/GenuisChip/SwiftUI-Fruit-App",
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
    <img class="home_mobile_screen_shot" style="margin-left: 2.2rem" src="` +
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
});
