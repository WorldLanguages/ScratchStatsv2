const countries = {"AD": "Andorra", "AE": "United Arab Emirates", "AF": "Afghanistan", "AG": "Antigua and Barbuda", "AI": "Anguilla", "AL": "Albania", "AM": "Armenia", "AN": "Netherlands Antilles", "AO": "Angola", "AQ": "Antarctica", "AR": "Argentina", "AS": "American Samoa", "AT": "Austria", "AU": "Australia", "AW": "Aruba", "AX": "Aland Islands", "AZ": "Azerbaijan", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BQ": "Bonaire, Sint Eustatius and Saba", "BR": "Brazil", "BS": "Bahamas", "BT": "Bhutan", "BV": "Bouvet Island", "BW": "Botswana", "BY": "Belarus", "BZ": "Belize", "CA": "Canada", "CC": "Cocos (Keeling) Islands", "CD": "Congo, The Democratic Republic of the", "CF": "Central African Republic", "CG": "Congo", "CH": "Switzerland", "CI": "Cote d'Ivoire", "CK": "Cook Islands", "CL": "Chile", "CM": "Cameroon", "CN": "China", "CO": "Colombia", "CR": "Costa Rica", "CU": "Cuba", "CV": "Cape Verde", "CX": "Christmas Island", "CY": "Cyprus", "CZ": "Czech Republic", "DE": "Germany", "DJ": "Djibouti", "DK": "Denmark", "DM": "Dominica", "DO": "Dominican Republic", "DZ": "Algeria", "EC": "Ecuador", "EE": "Estonia", "EG": "Egypt", "EH": "Western Sahara", "ER": "Eritrea", "ES": "Spain", "ET": "Ethiopia", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands (Malvinas)", "FM": "Micronesia, Federated States of", "FO": "Faroe Islands", "FR": "France", "GA": "Gabon", "GB": "United Kingdom", "GD": "Grenada", "GE": "Georgia", "GF": "French Guiana", "GG": "Guernsey", "GH": "Ghana", "GI": "Gibraltar", "GL": "Greenland", "GM": "Gambia", "GN": "Guinea", "GP": "Guadeloupe", "GQ": "Equatorial Guinea", "GR": "Greece", "GS": "South Georgia and the South Sandwich Islands", "GT": "Guatemala", "GU": "Guam", "GW": "Guinea-Bissau", "GY": "Guyana", "HK": "Hong Kong", "HM": "Heard Island and McDonald Islands", "HN": "Honduras", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "ID": "Indonesia", "IE": "Ireland", "IL": "Israel", "IM": "Isle of Man", "IN": "India", "IO": "British Indian Ocean Territory", "IQ": "Iraq", "IR": "Iran", "IS": "Iceland", "IT": "Italy", "JE": "Jersey", "JM": "Jamaica", "JO": "Jordan", "JP": "Japan", "KE": "Kenya", "KG": "Kyrgyzstan", "KH": "Cambodia", "KI": "Kiribati", "KM": "Comoros", "KN": "Saint Kitts and Nevis", "KP": "North Korea", "KR": "South Korea", "KW": "Kuwait", "KY": "Cayman Islands", "KZ": "Kazakhstan", "LA": "Laos", "LB": "Lebanon", "LC": "Saint Lucia", "LI": "Liechtenstein", "LK": "Sri Lanka", "LR": "Liberia", "LS": "Lesotho", "LT": "Lithuania", "LU": "Luxembourg", "LV": "Latvia", "LY": "Libya", "MA": "Morocco", "MC": "Monaco", "MD": "Moldova", "ME": "Montenegro", "MF": "Saint Martin", "MG": "Madagascar", "MH": "Marshall Islands", "MK": "Macedonia, The Former Yugoslav Republic of", "ML": "Mali", "MM": "Myanmar", "MN": "Mongolia", "MO": "Macao", "MP": "Northern Mariana Islands", "MQ": "Martinique", "MR": "Mauritania", "MS": "Montserrat", "MT": "Malta", "MU": "Mauritius", "MV": "Maldives", "MW": "Malawi", "MX": "Mexico", "MY": "Malaysia", "MZ": "Mozambique", "NA": "Namibia", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "NZ": "New Zealand", "OM": "Oman", "PA": "Panama", "PE": "Peru", "PF": "French Polynesia", "PG": "Papua New Guinea", "PH": "Philippines", "PK": "Pakistan", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "PN": "Pitcairn", "PR": "Puerto Rico", "PS": "Palestine, State of", "PT": "Portugal", "PW": "Palau", "PY": "Paraguay", "QA": "Qatar", "RE": "Reunion", "RO": "Romania", "RS": "Serbia", "RU": "Russia", "RW": "Rwanda", "SA": "Saudi Arabia", "SB": "Solomon Islands", "SC": "Seychelles", "SD": "Sudan", "SE": "Sweden", "SG": "Singapore", "SH": "Saint Helena", "SI": "Slovenia", "SJ": "Svalbard and Jan Mayen", "SK": "Slovakia", "SL": "Sierra Leone", "SM": "San Marino", "SN": "Senegal", "SO": "Somalia", "SR": "Suriname", "SS": "South Sudan", "ST": "Sao Tome and Principe", "SV": "El Salvador", "SY": "Syria", "SZ": "Swaziland", "TC": "Turks and Caicos Islands", "TD": "Chad", "TF": "French Southern Territories", "TG": "Togo", "TH": "Thailand", "TJ": "Tajikistan", "TK": "Tokelau", "TL": "Timor-Leste", "TM": "Turkmenistan", "TN": "Tunisia", "TO": "Tonga", "TR": "Turkey", "TT": "Trinidad and Tobago", "TV": "Tuvalu", "TW": "Taiwan", "TZ": "Tanzania", "UA": "Ukraine", "UG": "Uganda", "UM": "United States Minor Outlying Islands", "US": "United States", "UY": "Uruguay", "UZ": "Uzbekistan", "VA": "Vatican City", "VC": "Saint Vincent and the Grenadines", "VE": "Venezuela", "VG": "Virgin Islands, British", "VI": "Virgin Islands, U.S.", "VN": "Vietnam", "VU": "Vanuatu", "WF": "Wallis and Futuna", "WS": "Samoa", "XK": "Kosovo", "YE": "Yemen", "YT": "Mayotte", "ZA": "South Africa", "ZM": "Zambia", "ZW": "Zimbabwe"};
const defaultUser = "World_Languages";

window.onpopstate = event => getStats(location.pathname.substring(1, 99), false, "ignore");

function init() {
  data = new Vue({
    el: "#app",
    data: function() {return initialData()},
    methods: {
      n: x => {
        return Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      reset: function() {
        Object.assign(this.$data, initialData());
      }
    },
    created: () => getStats(location.pathname.substring(1, 99), true, "default")
  });
}

function initialData() {
  requestsMade = 0;
  swal.fire({
    toast: true,
    position: "center",
    showConfirmButton: false,
    type: "info",
    title: "Loading stats..."
  });

  return {
    // Static data
    "statNames" : ["loves", "favorites", "views", "comments", "liking"],
    "statEmojis" : {"loves": "❤️", "favorites": "⭐", "views": "👁️", "comments": "💬", "liking": "👍"},
    "statAdjs" : {"loves": "loved", "favorites": "faved", "views": "viewed", "comments": "commented", "liking": "liked"},
    "periods": ["days", "weeks", "months", "years"],

    "loaded": false,

    "id": "",
    "user": "",
    "profile": {
      "profilePicUrl": "",
      "countryName": "",
      "countryCode": "",
      "joinDate": "",
      "msgCount": 0,
      "browser": "?",
      "os": "?",
      "status": "",
      "lastProject": null
    },
    "activity": {
      "loves": 0,
      "favorites": 0,
      "allFollows": 0,
      "usersFollowed": 0,
      "studiosFollowed": 0,
      "studiosCurated": 0,
      "projectsShared": 0,
      "lovedProjects": []
    },
    "joined": {
      "days": 0,
      "weeks": 0,
      "months": 0,
      "years": 0
    },
    "projects": [],
    "totals" : {
      "loves": 0,
      "favorites": 0,
      "views": 0,
      "comments": 0,
      "liking": 0
      // Note: liking total isn't shown to the user, but is used to calculate the average
    },
    "projectsSorted": {
      "loves": [],
      "favorites": [],
      "views": [],
      "comments": [],
      "liking": []
    },
    "projectRowShow": {
      "loves": 3,
      "favorites": 3,
      "views": 3,
      "comments": 3,
      "liking": 3,
      "lovedByUser": 3 // "Recently loved projects" row
    }
  };
}

function changeUsername() {
  swal.fire({
    title: "Enter a username",
    input: "text",
    inputPlaceholder: defaultUser,
    inputAttributes: {
      autocomplete: "off",
      autocapitalize: "off"
    }
  })
  .then(({value}) => {
    if(value) {
      if(value[0] === "@") value = value.substring(1, 99);
      getStats(value, true, "alert");
    }
  });
}

async function getStats(username, pushHistory, onError) {
  if(username === "404.html") username = defaultUser;
  const req = await fetch(`https://api.scratchstats.com/scratch/users/${username}`);
  const res = await req.json();
  if (!res.code) {
    if(data.loaded === true) data.reset();
    data.user = res.username;
    if(pushHistory) history.pushState({}, "", data.user);
    data.id = res.id;
    data.profile.profilePicUrl = `https://cdn2.scratch.mit.edu/get_image/user/${data.id}_50x50.png`;
    data.profile.status = res.scratchteam === true ? "Scratch Team" : "Scratcher";
    data.profile.countryName = res.profile.country;
    Object.values(countries).forEach((countryName, index) => {
      if(data.profile.countryName === countryName) data.profile.countryCode = Object.keys(countries)[index];
    })
    const joined = new Date(res.history.joined);;
    data.profile.joinDate = joined.toLocaleDateString("en-us", {weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", second: "2-digit"});
    const joinTimestamp = joined.getTime();
    const currentTimestamp = Date.now();
    const minuteDiff = (currentTimestamp-joinTimestamp)/1000/60;
    data.joined.days = minuteDiff/1440;
    data.joined.weeks = minuteDiff/10080;
    data.joined.months = minuteDiff/43800;
    data.joined.years = minuteDiff/525600;
    loadProjects(0);
    getMsgCount();
    getActivityData();
  } else {
    switch (onError) {
      case "default":
      getStats(defaultUser, true);
      break;
      case "ignore":
      history.pushState({}, "", data.user);
      break;
      case "alert":
      swal.fire({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 4000,
        type: "error",
        title: "Could not find a Scratcher with that username."
      });
      break;
    }
  }
}

async function loadProjects(offset) {
  const limit = 40;
  const req = await fetch(`https://api.scratchstats.com/scratch/users/${data.user}/projects/?limit=${limit}&offset=${offset}`);
  if(req.status === 200) {
    const res = await req.json();

    // Exactly returned 40 projects?
    if(res.length === limit) loadProjects(offset+limit);

    // Returned at least one project? Save last project ID
    if(res.length !== 0) data.profile.lastProject = res[res.length-1].id;

    // No projects at all?
    if(res.length === 0 && offset === 0) requestMade();

    // Used offset but no new projects were returned
    if(res.length === 0 && offset !== 0) loadedProjects();

    res.forEach((project, index) => {
      project.stats.liking = (project.stats.loves/project.stats.views)*100;
      data.projects.push(project);
      data.statNames.forEach((stat, index) => data.totals[stat] += project.stats[stat]);
    });
    if(res.length !== limit) loadedProjects();
  }
}

function loadedProjects() {
  requestMade();
  if(data.profile.lastProject) getUserAgent();
  data.statNames.forEach((stat, index) => {
    const projectArray = data.projects.slice();
    projectArray.sort((a, b) => {
      return b.stats[stat] - a.stats[stat];
    });
    data.projectsSorted[stat] = projectArray;
  });
}

async function getMsgCount() {
  const req = await fetch(`https://api.scratchstats.com/scratch/users/${data.user}/messages/count`);
  if(req.status === 200) {
    const res = await req.json();
    data.profile.msgCount = res.count;
  }
}

async function getUserAgent() {
  const req = await fetch(`https://projects.scratch.mit.edu/${data.profile.lastProject}`);
  if (req.status === 200) {
    try {
      const res = await req.json();
      const userAgent = res.meta ? res.meta.agent : (res.info ? res.info.userAgent : "");
      if(userAgent) {
        const browser = new UAParser(userAgent).getBrowser();
        const os = new UAParser(userAgent).getOS();
        if(browser.name) data.profile.browser = browser.name;
        if(os.name) data.profile.os = `${os.name} ${os.version}`;
      }
    } catch(error) {
      console.log("Couldn't get user agent")
    }
  }
}

async function getActivityData() {
  const matches = {
    "loves": "icon-xs black love",
    "favorites": "icon-xs black favorite",
    "allFollows": "is now following", // not shown to the user
    "studiosFollowed": "is now following the studio",
    "usersFollowed": null, // is calculated differently - it's here so we can use the same loop
    "studiosCurated": "became a curator of",
    "projectsShared": "shared the project"
  };
  const req = await fetch(`https://cors-anywhere.herokuapp.com/https://scratch.mit.edu/messages/ajax/user-activity/?user=${data.user}&max=1000000`);
  requestMade();
  if(req.status === 200) {
    const res = await req.text();
    const parser = new DOMParser();
    const html = parser.parseFromString(res, 'text/html');
    const activities = html.getElementsByTagName("li");

    for(activity of activities) {
      if(activity.getElementsByClassName("time")[0].innerText.includes("year")) continue; // Older than 12 months
      if(activity.innerHTML.includes("icon-xs black love")) {
        const projectID = activity.getElementsByTagName("a")[0].href.replace(/\D/g,'');
        const projectTitle = activity.getElementsByTagName("a")[0].innerText;
        data.activity.lovedProjects.push({
          "id": projectID,
          "title": projectTitle
        });
      }
      Object.keys(matches).forEach((item, index) => {
        if(activity.innerHTML.includes(matches[item])) data.activity[item] += 1;
      });
    }
    data.activity.usersFollowed = data.activity.allFollows - data.activity.studiosFollowed;
    if(data.activity.usersFollowed === 20) data.activity.usersFollowed = "20+";

    Object.keys(matches).forEach((item, index) => {
      if(data.activity[item] === 20) data.activity[item] = "20+"
    });
  }
}

//

function requestMade() {
  requestsMade++;
  if(requestsMade === 2) {
    swal.close();
    data.loaded = true;
  }
}

function copyLink() {
  const el = document.createElement("textarea");
  el.value = `https://scratchstats.com/${data.user}`;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  swal.fire({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 2000,
    type: "success",
    title: "Copied to clipboard"
  });
}
