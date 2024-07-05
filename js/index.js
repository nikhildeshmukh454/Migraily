
    // Create the map
    var map = L.map('pgmap').setView([17.44548369866286, 78.35518880983739], 10);
  
    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      subdomains: ['a', 'b', 'c']
    }).addTo(map);


    // PG locations
    var foodBlog=[

    ]

    var serviceBlog=[
        {
          "name": "Kondapur",
          "lat": 17.458429,
          "lng": 78.366134,
          "url": "Services/kondapur.html"
        },
        {
          "name": "Kukatpally",
          "lat": 17.5030765,
          "lng": 78.4041699,
          "url": "Services/kukatpally.html"
        },
        {
          "name": "Kukatpally",
          "lat": 17.4775722,
          "lng": 78.39495855,
          "url": "Services/kukatpally.html"
        },
        {
          "name": "Madhavpur",
          "lat": 17.4528277,
          "lng": 78.3824439,
          "url": "Services/madhavpur.html"
        },
        {
          "name": "Manikonda",
          "lat": 17.4182156,
          "lng": 78.3706481,
          "url": "Services/manikonda.html"
        },
        {
          "name": "Miyapur",
          "lat": 17.5200969,
          "lng": 78.3538594,
          "url": "Services/miyapur.html"
        },
        {
          "name": "Ameerpet",
          "lat": 17.44734,
          "lng": 78.4499531,
          "url": "Services/AMEERPET.HTML"
        },
        {
          "name": "Banjara",
          "lat": 17.41539225,
          "lng": 78.44936745,
          "url": "Services/BANJARA.HTML"
        },
        {
          "name": "Gachibowli",
          "lat": 17.441929,
          "lng": 78.356719,
          "url": "Services/gachibowli.html"
        }
      ];
      

    var travelBlog = [
  {
    name: "Mrugvani National Park",
    lat: 17.35420845215679,
    lng: 78.33528122517822,
    url: "TravelBlog/Hyderabad on a Budget.HTML"
  },
  {
    name: "Aero Plaza",
    lat: 17.237743710169433,
    lng: 78.42955946565222,
    url: "TravelBlog/Hyderabad on a Budget.HTML"
  },
  {
    name: "Sudha Cars Museum",
    lat: 17.35723074894675,
    lng: 78.45437688099908,
    url: "TravelBlog/Hyderabad on a Budget.HTML"
  },
  {
    name: "Aazebo Tolichowki",
    lat: 17.396502945280034,
    lng: 78.42393169449274,
    url: "TravelBlog/Hyderabad on a Budget.HTML"
  },
  {
    name: "Malaka Cheruvu",
    lat: 17.41697295960239,
    lng: 78.38585255270148,
    url: "TravelBlog/Hyderabad on a Budget.HTML"
  },
  {
    name: "Suncity Waterfalls",
    lat: 17.347539612381595,
    lng: 78.4005309440861,
    url: "TravelBlog/LakesInHyderabad.HTML"
  },
  {
    name: "Nizam’s Museum",
    lat: 17.36655582208058,
    lng: 78.48290323867104,
    url: "TravelBlog/LakesInHyderabad.HTML"
  },
  {
    name: "Cafe Niloufer",
    lat: 17.392374437236203,
    lng: 78.4649954170384,
    url: "TravelBlog/LakesInHyderabad.HTML"
  },
  {
    name: "Hotel Shadab",
    lat: 17.42014880168655,
    lng: 78.4217155418721,
    url: "TravelBlog/LakesInHyderabad.HTML"
  },
  {
    name: "Nehru Zoological Park",
    lat: 17.348953767028977,
    lng: 78.44255367223103,
    url: "TravelBlog/LakesInHyderabad.HTML"
  },
  {
    name: "IKEA Hyderabad",
    lat: 17.446386784424494,
    lng: 78.37743283350116,
    url: "TravelBlog/Hyderabad on Two Wheels.HTML"
  },
  {
    name: "Lumbini Park",
    lat: 17.409865355609092,
    lng: 78.47243439449313,
    url: "TravelBlog/Hyderabad on Two Wheels.HTML"
  },
  {
    name: "Hyderabad Golf Club",
    lat: 17.393829971786563,
    lng: 78.40432859449265,
    url: "TravelBlog/Hyderabad on Two Wheels.HTML"
  },
  {
    name: "DARGAH HAZRAT",
    lat: 17.39015661394002,
    lng: 78.46542732517929,
    url: "TravelBlog/Hyderabad on Two Wheels.HTML"
  },
  {
    name: "Naya Qila",
    lat: 17.39082833882723,
    lng: 78.40987976380347,
    url: "TravelBlog/Hyderabad on Two Wheels.HTML"
  }
];

    var pgLocations = [
      {
        
        name: "Athidhi Delight",
        lat: 17.441714410087535,
        lng: 78.35813413682249,
        url: "Pg/Athidhi.html"
      },
      {
      
        name: "Cozy Room",
        lat: 17.441730815390194,
        lng: 78.36049305328508,
        url: "Pg/cozyRoom.html"
      },
      {
        
        name: "happynest",
        lat: 17.44003516078683,
        lng: 78.35942539449407,
        url: "Pg/happynest.html"
      },
      {

       
        
        name: "Sri Manoj",
        lat: 17.44848369866286,
        lng:    78.35689770242845,
        url: "Pg/manoj.html"
      },
      {
    
        name: "Nirvana",
        lat: 17.440467580678267,
        lng: 78.35818880983739,
        url: "Pg/Nirvana.html"
      },
      {

      
        name: "SBN",
        lat: 17.44053282112514,
        lng:78.34964137414282,
        url: "Pg/SBN.html"
      },
      {
        
        name: "Sri Balaji ",
        lat: 17.44626007191157,
        lng: 78.35896786565838,
        url: "Pg/SriBalaji.html"
      },
      {
        
        name: "Mukta ",
        lat: 17.4432117623624,
        lng:  78.3590376381569,
        url: "Pg/Mukta.html"
      }
    ];

   // Add an event listener to the button
   document.getElementById('update-map').addEventListener('click', function() {
    // Get the selected location type
    var locationType = document.getElementById('location-type').value;

    // Clear the map
    map.eachLayer(function(layer) {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Add the selected locations to the map
    if (locationType === 'travelBlog') {
      travelBlog.forEach(function(location) {
        var marker = L.marker([location.lat, location.lng]).addTo(map);
        marker.bindTooltip(location.name, {
          permanent: true,
          direction: 'top'
        });
        marker.bindPopup('<a href="' + location.url + '">' + location.name + '</a>');
        marker.on('click', function() {
          window.location.href = location.url;
        });
      });
    } else if (locationType === 'pgLocations') {
      pgLocations.forEach(function(location) {
        var marker = L.marker([location.lat, location.lng]).addTo(map);
        marker.bindTooltip(location.name, {
          permanent: true,
          direction: 'top'
        });
        marker.bindPopup('<a href="' + location.url + '">' + location.name + '</a>');
        marker.on('click', function() {
          window.location.href = location.url;
        });
      });
    }else if(locationType === 'serviceBlog'){

        serviceBlog.forEach(function(location) {
            var marker = L.marker([location.lat, location.lng]).addTo(map);
            marker.bindTooltip(location.name, {
              permanent: true,
              direction: 'top'
            });
            marker.bindPopup('<a href="' + location.url + '">' + location.name + '</a>');
            marker.on('click', function() {
              window.location.href = location.url;
            });
          });

    }
        
  });
