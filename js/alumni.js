var colleges = [
    {
        name: 'Worcester Polytechnic Institute',
        number:1,
        position: {
            lat: 42.2746,
            lng: -71.8063,
        },
    },
    {
        name: 'University of Virginia',
        number:1,
        position: {
            lat: 38.0336,
            lng: -78.5080,
        }
    },
    {
        name: 'William & Mary',
        number:1,
        position: {
            lat: 37.2717,
            lng: -76.7134,
        }
    },
    {
        name: 'Pennsylvania State University',
        number:1,
        position: {
            lat: 40.7982,
            lng: -77.8599,
        },
    },
    {
        name: 'John\'s Hopkins University',
        number:1,
        position: {
            lat: 39.3299,
            lng: -76.6205,
        }
    },
    {
        name: 'Massachusetts Institute of Technology',
        number:1,
        position: {
            lat: 42.3601,
            lng: -71.0942
        }
    },
    {
        name: 'University of California, Los Angeles',
        number:1,
        position: {
            lat: 34.0689,
            lng: -118.4452,
        },
    },
    {
        name: 'Yale University',
        number:1,
        position: {
            lat: 41.3163,
            lng: -72.9223,
        },
    },
    {
        name: 'Virginia Tech',
        number:1,
        position: {
            lat: 37.2284,
            lng: -80.4234,
        },
    },
    {
        name: 'Virginia Commonwealth University',
        number:1,
        position: {
            lat: 37.5495,
            lng: -77.4510,
        },
    },
    {
        name: 'Michigan State University',
        number:1,
        position: {
            lat: 42.7018,
            lng: -84.4822,
        },
    },
    {
        name: 'Cornell University',
        number:1,
        position: {
            lat: 42.4534,
            lng: -76.4735,
        },
    },
    {
        name: 'University of Illinois Urbana-Champaign',
        number:1,
        position: {
            lat: 40.1020,
            lng: -88.2272,
        },
    },
    {
        name: 'Tufts University',
        position: {
            lat: 42.4085,
            lng: -71.1183,
        },
    },
    {
        name: 'University of Waterloo',
        position: {
            lat: 43.4723,
            lng: -80.5449,
        },
    },
    { 
        name: 'Indiana University Bloomington',
        position: {
            lat: 39.1784,
            lng: -86.5133,
        },
    },
    { 
        name: 'Duke University',
        position: {
            lat: 36.0014,
            lng: -78.9382,
        },
    },
    { 
        name: 'University of Padua',
        position: {
            lat: 45.4068,
            lng: 11.8774,
        },
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
     for (college of colleges) {
        const marker = new google.maps.Marker({
            position: college.position,
            title: college.name,
        });
        marker.setMap(map);
        google.maps.event.addListener(marker,'click',function(event){  
            map.setCenter(marker.getPosition());  
            map.setZoom(15);
           
        });
    }

 
}
