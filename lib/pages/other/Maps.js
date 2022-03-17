"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/** Hide a DOM element. */
function hideElement(el) {
  el.style.display = 'none';
}
/** Show a DOM element that has been hidden. */


function showElement(el) {
  el.style.display = 'block';
}
/**
 * Defines an instance of the Locator+ solution, to be instantiated
 * when the Maps library is loaded.
 */


function LocatorPlus(configuration) {
  var locator = this;
  locator.locations = configuration.locations || [];
  locator.capabilities = configuration.capabilities || {};
  var mapEl = document.getElementById('map');
  var panelEl = document.getElementById('locations-panel');
  locator.panelListEl = document.getElementById('locations-panel-list');
  var sectionNameEl = document.getElementById('location-results-section-name');
  var resultsContainerEl = document.getElementById('location-results-list');
  var itemsTemplate = Handlebars.compile(document.getElementById('locator-result-items-tmpl').innerHTML);
  locator.searchLocation = null;
  locator.searchLocationMarker = null;
  locator.selectedLocationIdx = null;
  locator.userCountry = null; // Initialize the map -------------------------------------------------------

  locator.map = new google.maps.Map(mapEl, configuration.mapOptions); // Store selection.

  var selectResultItem = function selectResultItem(locationIdx, panToMarker, scrollToResult) {
    locator.selectedLocationIdx = locationIdx;

    var _iterator = _createForOfIteratorHelper(resultsContainerEl.children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var locationElem = _step.value;
        locationElem.classList.remove('selected');

        if (getResultIndex(locationElem) === locator.selectedLocationIdx) {
          locationElem.classList.add('selected');

          if (scrollToResult) {
            panelEl.scrollTop = locationElem.offsetTop;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (panToMarker && locationIdx != null) {
      locator.map.panTo(locator.locations[locationIdx].coords);
    }
  }; // Create a marker for each location.


  var markers = locator.locations.map(function (location, index) {
    var marker = new google.maps.Marker({
      position: location.coords,
      map: locator.map,
      title: location.title
    });
    marker.addListener('click', function () {
      selectResultItem(index, false, true);
    });
    return marker;
  }); // Fit map to marker bounds.

  locator.updateBounds = function () {
    var bounds = new google.maps.LatLngBounds();

    if (locator.searchLocationMarker) {
      bounds.extend(locator.searchLocationMarker.getPosition());
    }

    for (var i = 0; i < markers.length; i++) {
      bounds.extend(markers[i].getPosition());
    }

    locator.map.fitBounds(bounds);
  };

  if (locator.locations.length) {
    locator.updateBounds();
  } // Get the distance of a store location to the user's location,
  // used in sorting the list.


  var getLocationDistance = function getLocationDistance(location) {
    if (!locator.searchLocation) return null; // Use travel distance if available (from Distance Matrix).

    if (location.travelDistanceValue != null) {
      return location.travelDistanceValue;
    } // Fall back to straight-line distance.


    return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(location.coords), locator.searchLocation.location);
  }; // Render the results list --------------------------------------------------


  var getResultIndex = function getResultIndex(elem) {
    return parseInt(elem.getAttribute('data-location-index'));
  };

  locator.renderResultsList = function () {
    var locations = locator.locations.slice();

    for (var i = 0; i < locations.length; i++) {
      locations[i].index = i;
    }

    if (locator.searchLocation) {
      sectionNameEl.textContent = 'Nearest locations (' + locations.length + ')';
      locations.sort(function (a, b) {
        return getLocationDistance(a) - getLocationDistance(b);
      });
    } else {
      sectionNameEl.textContent = "All locations (".concat(locations.length, ")");
    }

    var resultItemContext = {
      locations: locations,
      showDirectionsButton: !!locator.searchLocation
    };
    resultsContainerEl.innerHTML = itemsTemplate(resultItemContext);

    var _iterator2 = _createForOfIteratorHelper(resultsContainerEl.children),
        _step2;

    try {
      var _loop = function _loop() {
        var item = _step2.value;
        var resultIndex = getResultIndex(item);

        if (resultIndex === locator.selectedLocationIdx) {
          item.classList.add('selected');
        }

        var resultSelectionHandler = function resultSelectionHandler() {
          if (resultIndex !== locator.selectedLocationIdx) {
            locator.clearDirections();
          }

          selectResultItem(resultIndex, true, false);
        }; // Clicking anywhere on the item selects this location.
        // Additionally, create a button element to make this behavior
        // accessible under tab navigation.


        item.addEventListener('click', resultSelectionHandler);
        item.querySelector('.select-location').addEventListener('click', function (e) {
          resultSelectionHandler();
          e.stopPropagation();
        });
        item.querySelector('.details-button').addEventListener('click', function () {
          locator.showDetails(resultIndex);
        });

        if (resultItemContext.showDirectionsButton) {
          item.querySelector('.show-directions').addEventListener('click', function (e) {
            selectResultItem(resultIndex, false, false);
            locator.updateDirections();
            e.stopPropagation();
          });
        }
      };

      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }; // Optional capability initialization --------------------------------------


  initializeSearchInput(locator);
  initializeDistanceMatrix(locator);
  initializeDirections(locator);
  initializeDetails(locator); // Initial render of results -----------------------------------------------

  locator.renderResultsList();
}
/** When the search input capability is enabled, initialize it. */


function initializeSearchInput(locator) {
  var geocodeCache = new Map();
  var geocoder = new google.maps.Geocoder();
  var searchInputEl = document.getElementById('location-search-input');
  var searchButtonEl = document.getElementById('location-search-button');

  var updateSearchLocation = function updateSearchLocation(address, location) {
    if (locator.searchLocationMarker) {
      locator.searchLocationMarker.setMap(null);
    }

    if (!location) {
      locator.searchLocation = null;
      return;
    }

    locator.searchLocation = {
      'address': address,
      'location': location
    };
    locator.searchLocationMarker = new google.maps.Marker({
      position: location,
      map: locator.map,
      title: 'My location',
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 12,
        fillColor: '#3367D6',
        fillOpacity: 0.5,
        strokeOpacity: 0
      }
    }); // Update the locator's idea of the user's country, used for units. Use
    // `formatted_address` instead of the more structured `address_components`
    // to avoid an additional billed call.

    var addressParts = address.split(' ');
    locator.userCountry = addressParts[addressParts.length - 1]; // Update map bounds to include the new location marker.

    locator.updateBounds(); // Update the result list so we can sort it by proximity.

    locator.renderResultsList();
    locator.updateTravelTimes();
    locator.clearDirections();
  };

  var geocodeSearch = function geocodeSearch(query) {
    if (!query) {
      return;
    }

    var handleResult = function handleResult(geocodeResult) {
      searchInputEl.value = geocodeResult.formatted_address;
      updateSearchLocation(geocodeResult.formatted_address, geocodeResult.geometry.location);
    };

    if (geocodeCache.has(query)) {
      handleResult(geocodeCache.get(query));
      return;
    }

    var request = {
      address: query,
      bounds: locator.map.getBounds()
    };
    geocoder.geocode(request, function (results, status) {
      if (status === 'OK') {
        if (results.length > 0) {
          var result = results[0];
          geocodeCache.set(query, result);
          handleResult(result);
        }
      }
    });
  }; // Set up geocoding on the search input.


  searchButtonEl.addEventListener('click', function () {
    geocodeSearch(searchInputEl.value.trim());
  }); // Initialize Autocomplete.

  initializeSearchInputAutocomplete(locator, searchInputEl, geocodeSearch, updateSearchLocation);
}
/** Add Autocomplete to the search input. */


function initializeSearchInputAutocomplete(locator, searchInputEl, fallbackSearch, searchLocationUpdater) {
  // Set up Autocomplete on the search input. Bias results to map viewport.
  var autocomplete = new google.maps.places.Autocomplete(searchInputEl, {
    types: ['geocode'],
    fields: ['place_id', 'formatted_address', 'geometry.location']
  });
  autocomplete.bindTo('bounds', locator.map);
  autocomplete.addListener('place_changed', function () {
    var placeResult = autocomplete.getPlace();

    if (!placeResult.geometry) {
      // Hitting 'Enter' without selecting a suggestion will result in a
      // placeResult with only the text input value as the 'name' field.
      fallbackSearch(placeResult.name);
      return;
    }

    searchLocationUpdater(placeResult.formatted_address, placeResult.geometry.location);
  });
}
/** Initialize Distance Matrix for the locator. */


function initializeDistanceMatrix(locator) {
  var distanceMatrixService = new google.maps.DistanceMatrixService(); // Annotate travel times to the selected location using Distance Matrix.

  locator.updateTravelTimes = function () {
    if (!locator.searchLocation) return;
    var units = locator.userCountry === 'USA' ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC;
    var request = {
      origins: [locator.searchLocation.location],
      destinations: locator.locations.map(function (x) {
        return x.coords;
      }),
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: units
    };

    var callback = function callback(response, status) {
      if (status === 'OK') {
        var distances = response.rows[0].elements;

        for (var i = 0; i < distances.length; i++) {
          var distResult = distances[i];
          var travelDistanceText = void 0,
              travelDistanceValue = void 0;

          if (distResult.status === 'OK') {
            travelDistanceText = distResult.distance.text;
            travelDistanceValue = distResult.distance.value;
          }

          var location = locator.locations[i];
          location.travelDistanceText = travelDistanceText;
          location.travelDistanceValue = travelDistanceValue;
        } // Re-render the results list, in case the ordering has changed.


        locator.renderResultsList();
      }
    };

    distanceMatrixService.getDistanceMatrix(request, callback);
  };
}
/** Initialize Directions service for the locator. */


function initializeDirections(locator) {
  var directionsCache = new Map();
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer({
    suppressMarkers: true
  }); // Update directions displayed from the search location to
  // the selected location on the map.

  locator.updateDirections = function () {
    if (!locator.searchLocation || locator.selectedLocationIdx == null) {
      return;
    }

    var cacheKey = JSON.stringify([locator.searchLocation.location, locator.selectedLocationIdx]);

    if (directionsCache.has(cacheKey)) {
      var directions = directionsCache.get(cacheKey);
      directionsRenderer.setMap(locator.map);
      directionsRenderer.setDirections(directions);
      return;
    }

    var request = {
      origin: locator.searchLocation.location,
      destination: locator.locations[locator.selectedLocationIdx].coords,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setMap(locator.map);
        directionsRenderer.setDirections(response);
        directionsCache.set(cacheKey, response);
      }
    });
  };

  locator.clearDirections = function () {
    directionsRenderer.setMap(null);
  };
}
/** Initialize Place Details service and UI for the locator. */


function initializeDetails(locator) {
  var panelDetailsEl = document.getElementById('locations-panel-details');
  var detailsService = new google.maps.places.PlacesService(locator.map);
  var detailsTemplate = Handlebars.compile(document.getElementById('locator-details-tmpl').innerHTML);

  var renderDetails = function renderDetails(context) {
    panelDetailsEl.innerHTML = detailsTemplate(context);
    panelDetailsEl.querySelector('.back-button').addEventListener('click', hideDetails);
  };

  var hideDetails = function hideDetails() {
    showElement(locator.panelListEl);
    hideElement(panelDetailsEl);
  };

  locator.showDetails = function (locationIndex) {
    var location = locator.locations[locationIndex];
    var context = {
      location: location
    }; // Helper function to create a fixed-size array.

    var initArray = function initArray(arraySize) {
      var array = [];

      while (array.length < arraySize) {
        array.push(0);
      }

      return array;
    };

    if (location.placeId) {
      var request = {
        placeId: location.placeId,
        fields: ['formatted_phone_number', 'website', 'opening_hours', 'url', 'utc_offset_minutes', 'price_level', 'rating', 'user_ratings_total']
      };
      detailsService.getDetails(request, function (place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          if (place.opening_hours) {
            var daysHours = place.opening_hours.weekday_text.map(function (e) {
              return e.split(/\:\s+/);
            }).map(function (e) {
              return {
                'days': e[0].substr(0, 3),
                'hours': e[1]
              };
            });

            for (var i = 1; i < daysHours.length; i++) {
              if (daysHours[i - 1].hours === daysHours[i].hours) {
                if (daysHours[i - 1].days.indexOf('-') !== -1) {
                  daysHours[i - 1].days = daysHours[i - 1].days.replace(/\w+$/, daysHours[i].days);
                } else {
                  daysHours[i - 1].days += ' - ' + daysHours[i].days;
                }

                daysHours.splice(i--, 1);
              }
            }

            place.openingHoursSummary = daysHours;
          }

          if (place.rating) {
            var starsOutOfTen = Math.round(2 * place.rating);
            var fullStars = Math.floor(starsOutOfTen / 2);
            var halfStars = fullStars !== starsOutOfTen / 2 ? 1 : 0;
            var emptyStars = 5 - fullStars - halfStars; // Express stars as arrays to make iterating in Handlebars easy.

            place.fullStarIcons = initArray(fullStars);
            place.halfStarIcons = initArray(halfStars);
            place.emptyStarIcons = initArray(emptyStars);
          }

          if (place.price_level) {
            place.dollarSigns = initArray(place.price_level);
          }

          if (place.website) {
            var url = new URL(place.website);
            place.websiteDomain = url.hostname;
          }

          context.place = place;
          renderDetails(context);
        }
      });
    }

    renderDetails(context);
    hideElement(locator.panelListEl);
    showElement(panelDetailsEl);
  };
}