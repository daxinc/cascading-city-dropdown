# Cascading City Dropdown

This is a small project that let you select a city of United States by selecting state and county first.

The project is written in plan JavaScript. It does not depend on any framework.

A demo can be found here: https://daxinc.github.io/cascading-city-dropdown/

# Sample usage

The [uscities.js](./uscities.js) exposes single method: `bindCitySelectors`. It accepts 6 parameters in order:

1. The ID of the state dropdown
2. Default value of the state to be selected
3. The ID of the county dropdown
4. Default value of the county to be selected
5. The ID of the city dropdown
6. Default value of the city to be selected

In the code below,two sets of the dropdowns are created.

- First set is created with Virginia state, Fairfax county and Annandale city to be selected by default.
- Second set is created with nothing pre-selected.

```HTML
<div>
  <select id="states"> </select>
  <select id="counties"></select>
  <select id="cities"></select>
</div>
<hr />
<div>
  <select id="states1"> </select>
  <select id="counties1"></select>
  <select id="cities1"></select>
</div>
<script src="uscities.js"></script>
<script>
  bindCitySelectors('states', 'VA', 'counties', 'Fairfax', 'cities', 'Annandale');
  bindCitySelectors('states1', '', 'counties1', '', 'cities1', '');
</script>
```

Please refer to [index.html](./index.html) for the example.

# Reference

The U.S. state, county and city information is free version downloaded from [https://simplemaps.com/data/us-cities](https://simplemaps.com/data/us-cities).
