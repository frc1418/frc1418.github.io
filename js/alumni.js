var colleges = [
    {
        name: 'Worcester Polytechnic Institute',
        position: {
            lat: 42.2746,
            lng: -71.8063,
        },
        image: "images/collegeLogos/Worcester_Polytechnic_Institute.png",
        link: "https://www.wpi.edu"
    },
    {
        name: 'University of Virginia',
        position: {
            lat: 38.0336,
            lng: -78.5080,
        },
        image: "images/collegeLogos/University_of_Virginia.png",
        link: "https://www.virginia.edu"
    },
    {
        name: 'William & Mary',
        position: {
            lat: 37.2717,
            lng: -76.7134,
        },
        image: "images/collegeLogos/William_&_Mary.png",
        link: "https://www.wm.edu"
    },
    {
        name: 'Pennsylvania State University',
        position: {
            lat: 40.7982,
            lng: -77.8599,
        },
        image: "images/collegeLogos/Pennsylvania_State_University.png",
        link: "https://www.psu.edu"
    },
    {
        name: 'John\'s Hopkins University',
        position: {
            lat: 39.3299,
            lng: -76.6205,
        },
        image: "images/collegeLogos/Johns_Hopkins_University.png",
        link: "https://www.jhu.edu"
    },
    {
        name: 'Massachusetts Institute of Technology',
        position: {
            lat: 42.3601,
            lng: -71.0942
        },
        image: "images/collegeLogos/Massachusetts_Institute_of_Technology.png",
        link: "https://www.mit.edu"
    },
    {
        name: 'University of California, Los Angeles',
        position: {
            lat: 34.0689,
            lng: -118.4452,
        },
        image: "images/collegeLogos/University_of_California_LA.png",
        link: "https://www.ucla.edu"
    },
    {
        name: 'Yale University',
        position: {
            lat: 41.3163,
            lng: -72.9223,
        },
        image: "images/collegeLogos/Yale_University.png",
        link: "https://www.yale.edu"
    },
    {
        name: 'Virginia Tech',
        position: {
            lat: 37.2284,
            lng: -80.4234,
        },
        image: "images/collegeLogos/Virginia_Tech.png",
        link: "https://www.vt.edu"
    },
    {
        name: 'Virginia Commonwealth University',
        position: {
            lat: 37.5495,
            lng: -77.4510,
        },
        image: "images/collegeLogos/Virginia_Commonwealth_University.png",
        link: "https://www.vcu.edu"
    },
    {
        name: 'Michigan State University',
        position: {
            lat: 42.7018,
            lng: -84.4822,
        },
        image: "images/collegeLogos/Michigan_State_University.png",
        link: "https://msu.edu"
    },
    {
        name: 'Cornell University',
        position: {
            lat: 42.4534,
            lng: -76.4735,
        },
        image: "images/collegeLogos/Cornell_University.png",
        link: "https://www.cornell.edu"
    },
    {
        name: 'University of Illinois Urbana-Champaign',
        position: {
            lat: 40.1020,
            lng: -88.2272,
        },
        image: "images/collegeLogos/University_of_Illinois_Urbana-Champaign.png",
        link: "https://illinois.edu"
    },
    {
        name: 'Tufts University',
        position: {
            lat: 42.4085,
            lng: -71.1183,
        },
        image: "images/collegeLogos/Tufts_University.png",
        link: "https://www.tufts.edu"
    },
    {
        name: 'University of Waterloo',
        position: {
            lat: 43.4723,
            lng: -80.5449,
        },
        image: "images/collegeLogos/University_of_Waterloo.png",
        link: "https://uwaterloo.ca"
    },
    {
        name: 'Indiana University Bloomington',
        position: {
            lat: 39.1784,
            lng: -86.5133,
        },
        image: "images/collegeLogos/Indiana_University_Bloomington.png",
        link: "https://www.indiana.edu"
    },
    {
        name: 'Duke University',
        position: {
            lat: 36.0014,
            lng: -78.9382,
        },
        image: "images/collegeLogos/Duke_University.png",
        link: "https://www.duke.edu"
    },
    {
        name: 'University of Padua',
        position: {
            lat: 45.4068,
            lng: 11.8774,
        },
        image: "images/collegeLogos/University_of_Padua.png",
        link: "https://www.unipd.it"
    },
    {
        name: 'Vanderbilt University',
        position: {
            lat: 36.1446,
            lng: -86.8026,
        },
        image: "images/collegeLogos/Vanderbilt_University.png",
        link: "https://www.vanderbilt.edu"
    },
    {
        name: 'George Washington University',
        position: {
            lat: 38.8997,
            lng: -77.0486,
        },
        image: "images/collegeLogos/George_Washington_University.png",
        link: "https://www.gwu.edu"
    },
    {
        name: 'James Madison University',
        position: {
            lat: 38.4351,
            lng: -78.8698,
        },
        image: "images/collegeLogos/James_Madison_University.png",
        link: "https://www.jmu.edu"
    },
    {
        name: 'Georgia Institute of Technology',
        position: {
            lat: 33.7756,
            lng: -84.3963,
        },
        image: "images/collegeLogos/Georgia_Institute_of_Technology.png",
        link: "https://www.gatech.edu"
    },
    {
        name: 'University of Colorado Boulder',
        position: {
            lat: 40.0073,
            lng: -105.2660,
        },
        image: "images/collegeLogos/University_of_Colorado_Boulder.png",
        link: "https://www.colorado.edu"
    }
];

var companies = [
    {
        name: 'Google',
        position: {
            lat: 37.422,
            lng: -122.084,
        },
        image: "images/companyLogos/google.png",
        link: "https://about.google/"
    }
];


// Called by Maps API upon loading.
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), { // Define Map Settings
        center: {
            lat: 35,
            lng: -98
        },
        zoom: 4,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        backgroundColor: '#333333',
        styles: [
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#222222'
                }]
            },
            {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [{
                    color: '#444444'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#444444'
                    },
                    {
                        lightness: -37
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{
                    color: '#666666'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        visibility: 'on'
                    },
                    {
                        color: '#666666'
                    },
                    {
                        weight: 2
                    },
                    {
                        gamma: 0.84
                    }
                ]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#ffffff'
                }]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry',
                stylers: [
                    {
                        weight: 0.6
                    },
                    {
                        color: '#d12727'
                    }
                ]
            },
            {
                elementType: 'labels.icon',
                stylers: [{
                    visibility: 'off'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#333333'
                }]
            }
        ]
    });

    var minZoomLevel = 3;
    google.maps.event.addListener(map, 'zoom_changed', function() {
        var currentZoom = map.getZoom();
        if (currentZoom < minZoomLevel) {
            map.setZoom(minZoomLevel);
        }
    });

    const infoWindow = new google.maps.InfoWindow();

    for (college of colleges) {
        const marker = new google.maps.Marker({
            position: college.position,
            title: college.name
        });
        marker.setMap(map);

        google.maps.event.addListener(marker, 'click', (event) => {
            const contentString =
                '<div id="content">' +
                '<h1 id="collegeName" class="firstHeading">' + marker.getTitle() + '</h1>' +
                '<a href="' + colleges.find(colleges => colleges.name === marker.getTitle()).link + '" target="_blank">' + 
                '<img id="collegeImg" src="' + colleges.find(colleges => colleges.name === marker.getTitle()).image +'">' +
                '</a>' +
                "</div>";
            infoWindow.setContent(contentString);
            map.setZoom(5);
            map.setZoom(7);
            map.panTo(marker.getPosition());
            infoWindow.open({
                anchor: marker,
                map
            });
        });
    }
    for (company of companies) {
        const marker1 = new google.maps.Marker({
            position: company.position,
            title: company.name,
            icon: "images/Google_Maps_Point.png"
        });

        marker1.setMap(map);

        google.maps.event.addListener(marker1, 'click', (event) => {
            const contentString =
                '<div id="content">' +
                '<h1 id="companyName" class="firstHeading">' + marker1.getTitle() + '</h1>' +
                '<a href="' + companies.find(companies => companies.name === marker1.getTitle()).link + '" target="_blank">' + 
                '<img id="companyImg" src="' + companies.find(companies => companies.name === marker1.getTitle()).image + '">' +
                '</a>' +
                "</div>";
            infoWindow.setContent(contentString);
            map.setZoom(5);
            map.setZoom(7);
            map.panTo(marker1.getPosition());
            infoWindow.open({
                anchor: marker1,
                map
            });
        });
        google.maps.event.addListener(map, 'click', (event) => {
            infoWindow.close();
        });
    }
}
