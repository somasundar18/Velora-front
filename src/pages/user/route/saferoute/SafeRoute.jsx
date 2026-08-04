import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCrosshairs } from "react-icons/fa";

import {
    AdvancedMarker,
    APIProvider,
    Map,
    Pin,
    useMap,
    useMapsLibrary
} from "@vis.gl/react-google-maps";

import UserLayout from "../../../../layouts/UserLayout";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

/* Controls map movement */
function MapController({
    currentPosition,
    recenterCount
}) {
    const map = useMap();

    useEffect(() => {
        if (!map || !currentPosition) {
            return;
        }

        map.panTo(currentPosition);
        map.setZoom(16);
    }, [map, currentPosition, recenterCount]);

    return null;
}

/* Calculates and draws the route */
function RouteRenderer({
    origin,
    destination,
    onRouteFound
}) {
    const map = useMap();
    const routesLibrary = useMapsLibrary("routes");

    const polylinesRef = useRef([]);

    const [destinationPosition, setDestinationPosition] =
        useState(null);

    useEffect(() => {
        if (
            !map ||
            !routesLibrary ||
            !origin ||
            !destination
        ) {
            return;
        }

        let cancelled = false;

        const clearOldRoute = () => {
            polylinesRef.current.forEach((polyline) => {
                polyline.setMap(null);
            });

            polylinesRef.current = [];
        };

        const calculateRoute = async () => {
            clearOldRoute();

            try {
                const result =
                    await routesLibrary.Route.computeRoutes({
                        origin,
                        destination,
                        travelMode: "DRIVING",
                        routingPreference: "TRAFFIC_AWARE",

                        fields: [
                            "path",
                            "distanceMeters",
                            "durationMillis"
                        ]
                    });

                if (cancelled) {
                    return;
                }

                const route = result.routes?.[0];

                if (!route) {
                    alert("No route found.");
                    return;
                }

                const polylines = route.createPolylines({
                    polylineOptions: {
                        strokeColor: "#6C63FF",
                        strokeOpacity: 0.95,
                        strokeWeight: 6
                    }
                });

                polylines.forEach((polyline) => {
                    polyline.setMap(map);
                });

                polylinesRef.current = polylines;

                if (route.path?.length) {
                    const bounds =
                        new google.maps.LatLngBounds();

                    route.path.forEach((point) => {
                        bounds.extend(point);
                    });

                    map.fitBounds(bounds, 60);

                    const lastPoint =
                        route.path[route.path.length - 1];

                    setDestinationPosition({
                        lat:
                            typeof lastPoint.lat === "function"
                                ? lastPoint.lat()
                                : lastPoint.lat,

                        lng:
                            typeof lastPoint.lng === "function"
                                ? lastPoint.lng()
                                : lastPoint.lng
                    });
                }

                onRouteFound({
                    distance:
                        route.distanceMeters != null
                            ? `${(
                                  route.distanceMeters / 1000
                              ).toFixed(1)} km`
                            : "--",

                    duration:
                        route.durationMillis != null
                            ? `${Math.ceil(
                                  route.durationMillis / 60000
                              )} Minutes`
                            : "--",

                    destinationPosition
                });
            } catch (error) {
                console.error(
                    "Route calculation error:",
                    error
                );

                alert(
                    "Unable to calculate route. Check the destination."
                );
            }
        };

        calculateRoute();

        return () => {
            cancelled = true;
            clearOldRoute();
        };
    }, [
        map,
        routesLibrary,
        origin,
        destination,
        onRouteFound
    ]);

    return destinationPosition ? (
        <AdvancedMarker
            position={destinationPosition}
            title="Destination"
        >
            <Pin
                background="#EA4335"
                borderColor="#ffffff"
                glyphColor="#ffffff"
                glyph="B"
            />
        </AdvancedMarker>
    ) : null;
}

function SafeRoute() {
    const navigate = useNavigate();

    const [currentPosition, setCurrentPosition] =
        useState(null);

    const [currentLocationText, setCurrentLocationText] =
        useState("Detecting your current location...");

    const [destination, setDestination] =
        useState("");

    const [routeRequest, setRouteRequest] =
        useState(null);

    const [routeInfo, setRouteInfo] = useState({
        distance: "--",
        duration: "--"
    });

    const [recenterCount, setRecenterCount] =
        useState(0);

    const mapsApiKey = import.meta.env
        .VITE_GOOGLE_MAPS_API_KEY?.trim();

    const hasMapsApiKey = Boolean(mapsApiKey);

    /* Detect user's current location */
    useEffect(() => {
        if (!navigator.geolocation) {
            setCurrentLocationText(
                "Location is not supported"
            );

            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                setCurrentPosition(userPosition);

                setCurrentLocationText(
                    "Your Current Location"
                );
            },

            (error) => {
                console.error(
                    "Location error:",
                    error
                );

                setCurrentLocationText(
                    "Location permission denied"
                );

                alert(
                    "Allow location permission and reload the page."
                );
            },

            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 60000
            }
        );
    }, []);

    const handleFindRoute = () => {
        if (!currentPosition) {
            alert(
                "Please wait for current location detection."
            );

            return;
        }

        if (!destination.trim()) {
            alert("Please enter your destination.");
            return;
        }

        setRouteInfo({
            distance: "--",
            duration: "--"
        });

        setRouteRequest({
            origin: currentPosition,
            destination: destination.trim()
        });
    };

    const handleStartNavigation = () => {
        if (!routeRequest) {
            alert("Please find a route first.");
            return;
        }

        navigate("/navigate", {
            state: {
                origin: routeRequest.origin,
                destination: routeRequest.destination,
                distance: routeInfo.distance,
                duration: routeInfo.duration
            }
        });
    };

    return (
        <UserLayout>
            <div className="safe-route">
                <h1>Safe Route</h1>

                <p>
                    Find the safest route to your destination.
                </p>

                <div className="route-form">
                    <Input
                        type="text"
                        value={currentLocationText}
                        readOnly
                    />

                    <Input
                        type="text"
                        placeholder="Destination"
                        value={destination}
                        onChange={(event) =>
                            setDestination(
                                event.target.value
                            )
                        }
                    />

                    <Button
                        text="Find Route"
                        onClick={handleFindRoute}
                    />
                </div>

                <div className="map-card">
                    {hasMapsApiKey ? (
                        <APIProvider apiKey={mapsApiKey}>
                            <Map
                                defaultCenter={{
                                    lat: 13.0827,
                                    lng: 80.2707
                                }}
                                defaultZoom={13}
                                mapId="DEMO_MAP_ID"
                                gestureHandling="greedy"
                                mapTypeControl={false}
                                streetViewControl={false}
                                fullscreenControl={true}
                            >
                                <MapController
                                    currentPosition={
                                        currentPosition
                                    }
                                    recenterCount={
                                        recenterCount
                                    }
                                />

                                {currentPosition && (
                                    <AdvancedMarker
                                        position={currentPosition}
                                        title="Your Current Location"
                                    >
                                        <Pin
                                            background="#FF1744"
                                            borderColor="#FFFFFF"
                                            glyphColor="#FFFFFF"
                                            glyph="A"
                                            scale={1.4}
                                        />
                                    </AdvancedMarker>
                                )}

                                {routeRequest && (
                                    <RouteRenderer
                                        origin={
                                            routeRequest.origin
                                        }
                                        destination={
                                            routeRequest.destination
                                        }
                                        onRouteFound={
                                            setRouteInfo
                                        }
                                    />
                                )}
                            </Map>
                        </APIProvider>
                    ) : (
                        <div
                            style={{
                                minHeight: 280,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                padding: "16px",
                                background: "#f5f7ff",
                                borderRadius: "12px",
                                color: "#2d2f43"
                            }}
                        >
                            <h3>Map unavailable</h3>
                            <p>
                                Add a Google Maps API key to the
                                app environment to enable live
                                route mapping.
                            </p>
                        </div>
                    )}

                    <button
                        type="button"
                        className="recenter-button"
                        title="Recenter to current location"
                        onClick={() =>
                            setRecenterCount(
                                (count) => count + 1
                            )
                        }
                    >
                        <FaCrosshairs />
                    </button>
                </div>

                <div className="route-info">
                    <div className="info-card">
                        <h3>Distance</h3>
                        <p>{routeInfo.distance}</p>
                    </div>

                    <div className="info-card">
                        <h3>Estimated Time</h3>
                        <p>{routeInfo.duration}</p>
                    </div>

                    <div className="info-card">
                        <h3>Safety Score</h3>
                        <p>95 / 100</p>
                    </div>
                </div>

                <Button
                    text="Start Navigation"
                    onClick={handleStartNavigation}
                />
            </div>
        </UserLayout>
    );
}

export default SafeRoute;