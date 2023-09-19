const elem_measurements = document.getElementById('measurements'),
      elem_unit = document.getElementById('unit');

const UNITS = ['meters', 'feet', 'fongs'];
const MULTIPLIERS = [1, 3.28084, 1/1.48];

elem_unit.textContent = 'Units: ';
var select = document.createElement('select');
for (unit of UNITS) {
    var option = document.createElement('option');
    option.textContent = unit;
    select.appendChild(option);
}

select.onchange = () => {
    for (measurement of elem_measurements.getElementsByClassName('measurement')) {
        var multiplier = MULTIPLIERS[UNITS.indexOf(select.value)];
        measurement.textContent = (measurement.attributes.magnitude.value * multiplier).toFixed(2);
    }
}
elem_unit.appendChild(select);
select.onchange();
