const elem_measurements = document.getElementById('measurements'),
      elem_unit = document.getElementById('unit');

const UNITS = ['meters', 'feet', 'fongs'];
const MULTIPLIERS = [1, 3.28084, 1.48];

elem_unit.textContent = 'Units: ';
var select = document.createElement('select');
for (unit of UNITS) {
    var option = document.createElement('option');
    option.textContent = unit;
    select.appendChild(option);
}

select.onchange = function() {
    for (measurement of elem_measurements.getElementsByClassName('measurement')) {
        var multiplier = MULTIPLIERS[UNITS.indexOf(select.value)];
        console.log(measurement.attributes.magnitude.value);
        console.log(multiplier * measurement.attributes.magnitude.value);
        measurement.textContent = measurement.attributes.magnitude.value * multiplier;
    }
}
elem_unit.appendChild(select);

