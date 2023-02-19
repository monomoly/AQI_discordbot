// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const cities=["AIRDRIE", "CALGARY", "COLD LAKE", "DRAYTON VALLEY", "EDMONTON", "EDSON", 
"FORT CHIPEWYAN", "FORT MCKAY", "FORT MCMURRAY", "FORT SASKATCHEWAN", "GRANDE PRAIRIE", "HINTON", 
"LAMONT COUNTY", "LETHBRIDGE", "MEDICINE HAT", "PARKLAND COUNTY", "RED DEER", "ST. ALBERT", 
"STRATHCONA COUNTY", "STURGEON COUNTY", "WOOD BUFFALO - SOUTH", "CASTLEGAR", "CENTRAL FRASER VALLEY", 
"CENTRAL OKANAGAN", "COMOX", "COURTENAY", "CRANBROOK", "DUNCAN", "EASTERN FRASER VALLEY", 
"FORT ST. JOHN", "KAMLOOPS", "KITIMAT", "METRO VANCOUVER - NE", "METRO VANCOUVER - NW", 
"METRO VANCOUVER - SE", "METRO VANCOUVER - SW", "NANAIMO", "NORTH OKANAGAN", "PRINCE GEORGE", 
"QUESNEL", "SMITHERS", "SOUTH OKANAGAN", "SPARWOOD", "SQUAMISH", "TERRACE", "VICTORIA/SAANICH", 
"WESTSHORE", "WHISTLER", "WILLIAMS LAKE", "BRANDON", "FLIN FLON", "WINNIPEG", "BATHURST", 
"CAMPBELLTON", "EDMUNDSTON", "FREDERICTON", "MIRAMICHI", "MONCTON", "SAINT ANDREWS", "SAINT JOHN", 
"FORT SMITH", "INUVIK", "NORMAN WELLS", "YELLOWKNIFE", "GREENWOOD", "HALIFAX", "HALIFAX - LAKE MAJOR", 
"HALIFAX DOWNTOWN", "KENTVILLE", "PICTOU", "PORT HAWKESBURY", "SYDNEY", "ARVIAT", "IQALUIT", 
"KUGLUKTUK", "BARRIE", "BELLEVILLE", "BRAMPTON", "BRANTFORD", "BURLINGTON", "CHATHAM", "CORNWALL", 
"DORSET", "GRAND BEND", "GUELPH", "HAMILTON", "HAMILTON DOWNTOWN", "HAMILTON MOUNTAIN", 
"HAMILTON WEST", "KINGSTON", "KITCHENER", "LONDON", "MILTON", "MISSISSAUGA", "NEWMARKET", 
"NORTH BAY", "OAKVILLE", "OSHAWA", "OTTAWA", "PARRY SOUND", "PETAWAWA", "PETERBOROUGH", 
"PORT STANLEY", "SARNIA", "SAULT STE. MARIE", "ST. CATHARINES", "SUDBURY", "THUNDER BAY", "TIVERTON", 
"TORONTO", "TORONTO DOWNTOWN", "TORONTO EAST", "TORONTO NORTH", "TORONTO WEST", "WINDSOR", 
"WINDSOR DOWNTOWN", "WINDSOR WEST", "CHARLOTTETOWN", "ST. PETERS BAY", "SUMMERSIDE (WELLINGTON)", 
"GATINEAU", "MONTRÉAL", "QUÉBEC", "BUFFALO NARROWS", "ESTEVAN", "PRINCE ALBERT", "REGINA", 
"SASKATOON", "SWIFT CURRENT", "WHITEHORSE"]; //array for city names

const aq=["2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"2 (Low Risk)", "2 (Low Risk)", "3 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"2 (Low Risk)", "3 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"N/A", "2 (Low Risk)", "1 (Low Risk)", "1 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"2 (Low Risk)", "N/A", "N/A", "1 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"2 (Low Risk)", "5 (Moderate Risk)", "1 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "N/A", "N/A", "N/A", 
"3 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"3 (Low Risk)", "2 (Low Risk)", "3 (Low Risk)", "3 (Low Risk)", "2 (Low Risk)", "3 (Low Risk)", 
"2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "3 (Low Risk)", "2 (Low Risk)", "3 (Low Risk)", 
"2 (Low Risk)", "3 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "3 (Low Risk)", "3 (Low Risk)", 
"2 (Low Risk)", "N/A", "3 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "3 (Low Risk)", "2 (Low Risk)", 
"3 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", "3 (Low Risk)", "3 (Low Risk)", "3 (Low Risk)", 
"3 (Low Risk)", "3 (Low Risk)", "2 (Low Risk)", "3 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"2 (Low Risk)", "2 (Low Risk)", "N/A", "N/A", "N/A", "2 (Low Risk)", "2 (Low Risk)", "2 (Low Risk)", 
"3 (Low Risk)", "2 (Low Risk)", "3 (Low Risk)", "2 (Low Risk)"]; //corresponding aq levels

const images=["https://i.pinimg.com/474x/12/45/23/124523bdc4ae41bd1b7124b94da404ff.jpg", 
"https://i.pinimg.com/564x/b6/a3/1c/b6a31c8c6667da29e088e9d732841f70.jpg", 
"https://i.pinimg.com/564x/51/7b/6c/517b6ce676cada7583e36d607d778e3d.jpg ", 
"https://i.pinimg.com/564x/b2/02/54/b20254bc0f08f8e39b3a35061c7bb397.jpg", 
"https://i.pinimg.com/564x/72/38/c4/7238c4684ab86428fafce57f44541a04.jpg",
"https://accidentallygreen.com/wp-content/uploads/2013/09/Using-Fans-instead-of-AC-to-Cool-Your-Home.jpg",
"https://i.pinimg.com/564x/51/7b/6c/517b6ce676cada7583e36d607d778e3d.jpg",
"https://i.pinimg.com/736x/bd/b1/d0/bdb1d09feb3b8f72fdb2739b2fef484d.jpg",
"https://i.pinimg.com/564x/a7/6f/4a/a76f4a5c85408ba3ab99546e9a112182.jpg",
"https://i.pinimg.com/564x/6e/62/5c/6e625c2e744b34a0a218a7b9347a5385.jpg",
"https://img.freepik.com/free-vector/energy-saving-concept-illustration_114360-14186.jpg?w=2000",
"https://i.pinimg.com/564x/b2/2d/45/b22d45f3bf7d13e28bf713e0aacf4799.jpg",
"https://i.pinimg.com/564x/57/b7/2e/57b72e4d0e45df0be69f9e4adfcef4a6.jpg",
"https://i.pinimg.com/564x/86/71/58/8671586a86bd442458c95563608bd08f.jpg",
"https://i.pinimg.com/564x/c5/e5/ce/c5e5cec85a09eec4a9fc738abfb1784f.jpg"]; //array for images

let city=`${context.params.event.content}`;
city=city.toUpperCase(); //converts to uppercase
city=city.slice(4,30); //cutting out the !aa from the input

let i=cities.indexOf(`${city}`); //searching for index of city name in array
let x =Math.floor(Math.random()*14); //random image generator

if(cities.includes(`${city}`)==false) { //if the cities array does not include the user input
  city="N/A (City not found? Check out:\nhttps://globalcleanair.org/blueprint/)";
  aq[i]="N/A";
}

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Air Quality Checker (Canada)`,
      "description": `A bot to check your city's Air Quality! Measured on a scale from 1-12 (low-high risk).`,
      "color": 0xbaf3f3,
      "fields": [
        {
          "name": `City:`,
          "value": `${city}`,
          "inline": true
        },
        {
          "name": `Air Quality:`,
          "value": `${aq[i]}`,
          "inline": true
        },
        {
          "name": `You should try...`,
          "value": "\u200B"
        }
      ],
      "image": {
        "url": `${images[x]}`,
        "height": 0,
        "width": 0
      }
    }
  ]
});