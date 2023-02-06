var colleges = [
    {
        name: 'Worcester Polytechnic Institute',
        position: {
            lat: 42.2746,
            lng: -71.8063,
        },
        image: "images/collegeLogos/Worcester_Polytechnic_Institute.png"
    },
    {
        name: 'University of Virginia',
        position: {
            lat: 38.0336,
            lng: -78.5080,
        },
        image: "images/collegeLogos/University_of_Virginia.png"
    },
    {
        name: 'William & Mary',
        position: {
            lat: 37.2717,
            lng: -76.7134,
        },
        image:"images/collegeLogos/William_&_Mary.png"
    },
    {
        name: 'Pennsylvania State University',
        position: {
            lat: 40.7982,
            lng: -77.8599,
        },
        image:"images/collegeLogos/Pennsylvania_State_University.png"
    },
    {
        name: 'John\'s Hopkins University',
        position: {
            lat: 39.3299,
            lng: -76.6205,
        },
        image:"images/collegeLogos/Johns_Hopkins_University.png"
    },
    {
        name: 'Massachusetts Institute of Technology',
        position: {
            lat: 42.3601,
            lng: -71.0942
        },
        image:"images/collegeLogos/Massachusetts_Institute_of_Technology.png"
    },
    {
        name: 'University of California, Los Angeles',
        position: {
            lat: 34.0689,
            lng: -118.4452,
        },
        image:"images/collegeLogos/University_of_California_LA.png"
    },
    {
        name: 'Yale University',
        position: {
            lat: 41.3163,
            lng: -72.9223,
        },
        image:"images/collegeLogos/Yale_University.png"
    },
    {
        name: 'Virginia Tech',
        position: {
            lat: 37.2284,
            lng: -80.4234,
        },
        image:"images/collegeLogos/Virginia_Tech.png"
    },
    {
        name: 'Virginia Commonwealth University',
        position: {
            lat: 37.5495,
            lng: -77.4510,
        },
        image:"images/collegeLogos/Virginia_Commonwealth_University.png"
    },
    {
        name: 'Michigan State University',
        position: {
            lat: 42.7018,
            lng: -84.4822,
        },
        image: "images/collegeLogos/Michigan_State_University.png"
    },
    {
        name: 'Cornell University',
        position: {
            lat: 42.4534,
            lng: -76.4735,
        },
        image: "images/collegeLogos/Cornell_University.png"
    },
    {
        name: 'University of Illinois Urbana-Champaign',
        position: {
            lat: 40.1020,
            lng: -88.2272,
        },
        image: "images/collegeLogos/University_of_Illinois_Urbana-Champaign.png"
    },
    {
        name: 'Tufts University',
        position: {
            lat: 42.4085,
            lng: -71.1183,
        },
        image: "images/collegeLogos/Tufts_University.png"
    },
    {
        name: 'University of Waterloo',
        position: {
            lat: 43.4723,
            lng: -80.5449,
        },
        image: "images/collegeLogos/University_of_Waterloo.png"
    },
    { 
        name: 'Indiana University Bloomington',
        position: {
            lat: 39.1784,
            lng: -86.5133,
        },
        image: "images/collegeLogos/Indiana_University_Bloomington.png"
    },
    { 
        name: 'Duke University',
        position: {
            lat: 36.0014,
            lng: -78.9382,
        },
        image: "images/collegeLogos/Duke_University.png"
    },
    { 
        name: 'University of Padua',
        position: {
            lat: 45.4068,
            lng: 11.8774,
        },
        image: "images/collegeLogos/University_of_Padua.png"
    },
    {
        name: 'Vanderbilt University',
        position: {
            lat: 36.1446,  
            lng: -86.8026,
        },
        image: "images/collegeLogos/Vanderbilt_University.png"
    },
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
    const infoWindow = new google.maps.InfoWindow();

    for (college of colleges) {
        const marker = new google.maps.Marker({
            position: college.position,
            title: college.name,
        });
        marker.setMap(map);
       
        google.maps.event.addListener(marker, 'click', (event) => { 
            const contentString =
            '<div id="content">' +
            '<h1 id="collegeName" class="firstHeading">' + marker.getTitle() + '</h1>' +
            '<img id="collegeImg" src =' + colleges.find(colleges=>colleges.name === marker.getTitle()).image + '>'+
            "</div>"; 
            infoWindow.setContent(contentString);
            map.panTo(marker.getPosition());  
            infoWindow.open({
                anchor:marker,
                map
            });
        });
       
        google.maps.event.addListener(map, 'click', (event) => {
            infoWindow.close();
        });
    }
}
