import { useEffect, useRef, useState } from "react";
import {
    useLocation,
    useNavigate
} from "react-router-dom";

import {
    AdvancedMarker,
    APIProvider,
    Map,
    Pin,
    useMap,
    useMapsLibrary
} from "@vis.gl/react-google-maps";

import { FaCrosshairs, FaMapMarkerAlt } from "react-icons/fa";

import UserLayout from "../../../../layouts/UserLayout";
import Button from "../../../../common/Button/Button";
import BackButton from "../../../../common/BackButton/BackButton";

/* Recenter map when the recenter button is clicked */
function MapController({
    currentPosition,
    recenterCount
}) {
    const map = useMap();
    const previousCount = useRef(-1);

    useEffect(() => {
        if (!map || !currentPosition) {
            return;
        }

        if (previousCount.current !== recenterCount) {
            map.panTo(currentPosition);
            map.setZoom(16);

            previousCount.current = recenterCount;
        }
    }, [map, currentPosition, recenterCount]);

    return null;
}

/* Calculate and display the navigation route */
function NavigationRoute({
    origin,
    destination,
    onRouteReady
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

        const clearRoute = () => {
            polylinesRef.current.forEach((polyline) => {
                polyline.setMap(null);
            });

            polylinesRef.current = [];
        };

        const calculateRoute = async () => {
            clearRoute();

            try {
                const result =
                    await routesLibrary.Route.computeRoutes({
                        origin,
                        destination,

                        travelMode: "DRIVING",
                        routingPreference: "TRAFFIC_AWARE",

                        fields: [
                            "path",
                            "viewport",
                            "distanceMeters",
                            "durationMillis",
                            "legs"
                        ]
                    });

                if (cancelled) {
                    return;
                }

                const route = result.routes?.[0];

                if (!route) {
                    alert("No navigation route found.");
                    return;
                }

                const polylines = route.createPolylines({
                    polylineOptions: {
                        strokeColor: "#6C63FF",
                        strokeOpacity: 1,
                        strokeWeight: 7
                    }
                });

                polylines.forEach((polyline) => {
                    polyline.setMap(map);
                });

                polylinesRef.current = polylines;

                /* Show the complete route */
                if (route.viewport) {
                    map.fitBounds(route.viewport, 60);
                }

                /* Destination is the last route point */
                const lastPoint =
                    route.path?.[route.path.length - 1];

                if (lastPoint) {
                    const endPosition = {
                        lat:
                            typeof lastPoint.lat === "function"
                                ? lastPoint.lat()
                                : lastPoint.lat,

                        lng:
                            typeof lastPoint.lng === "function"
                                ? lastPoint.lng()
                                : lastPoint.lng
                    };

                    setDestinationPosition(endPosition);
                }

                /* Get the first navigation instruction */
                const firstStep =
                    route.legs?.[0]?.steps?.[0];

                let nextDistance = "";

                if (firstStep?.distanceMeters != null) {
                    nextDistance =
                        firstStep.distanceMeters >= 1000
                            ? `${(
                                  firstStep.distanceMeters / 1000
                              ).toFixed(1)} km`
                            : `${Math.round(
                                  firstStep.distanceMeters
                              )} m`;
                }

                onRouteReady({
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
                              )} min`
                            : "--",

                    nextInstruction:
                        firstStep?.instructions ||
                        "Continue on the selected route",

                    nextDistance
                });
            } catch (error) {
                console.error(
                    "Navigation route error:",
                    error
                );

                alert(
                    "Unable to load navigation. Check the browser console."
                );
            }
        };

        calculateRoute();

        return () => {
            cancelled = true;
            clearRoute();
        };
    }, [
        map,
        routesLibrary,
        origin,
        destination,
        onRouteReady
    ]);

    return destinationPosition ? (
        <AdvancedMarker
            position={destinationPosition}
            title="Destination"
        >
            <Pin
                background="#00C853"
                borderColor="#FFFFFF"
                glyphColor="#FFFFFF"
                glyph="D"
                scale={1.4}
            />
        </AdvancedMarker>
    ) : null;
}

function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();

    /*
     * Data passed from SafeRoute.jsx:
     * origin, destination, distance and duration
     */
    const routeData = location.state;

    const [currentPosition, setCurrentPosition] =
        useState(routeData?.origin || null);

    const [navigationInfo, setNavigationInfo] =
        useState({
            distance: routeData?.distance || "--",
            duration: routeData?.duration || "--",
            nextInstruction: "Loading next instruction...",
            nextDistance: ""
        });

    const [recenterCount, setRecenterCount] =
        useState(0);

    const mapsApiKey = import.meta.env
        .VITE_GOOGLE_MAPS_API_KEY?.trim();

    const hasMapsApiKey = Boolean(mapsApiKey);

    /* Keep the current-location marker updated */
    useEffect(() => {
        if (!navigator.geolocation) {
            return;
        }

        const watchId =
            navigator.geolocation.watchPosition(
                (position) => {
                    setCurrentPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },

                (error) => {
                    console.error(
                        "Live location error:",
                        error
                    );
                },

                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 5000
                }
            );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    /* Handle direct opening or page refresh */
    if (!routeData?.origin || !routeData?.destination) {
        return (
            <UserLayout>
                <BackButton />

                <div className="navigation">
                    <div className="navigation-header">
                        <h1>Navigation</h1>
                    </div>

                    <p style={{ color: "white" }}>
                        No route was selected. Return to the
                        Safe Route page and find a route first.
                    </p>

                    <Button
                        text="Go to Safe Route"
                        onClick={() =>
                            navigate("/safe-route")
                        }
                    />
                </div>
            </UserLayout>
        );
    }

    return (
        <UserLayout>
            <BackButton />

            <div className="navigation">
                <div className="navigation-header">
                    <h1>Navigation</h1>
                </div>

                <div className="map-container">
                    {hasMapsApiKey ? (
                        <APIProvider apiKey={mapsApiKey}>
                            <Map
                                defaultCenter={routeData.origin}
                                defaultZoom={15}
                                mapId="DEMO_MAP_ID"
                                gestureHandling="greedy"
                                mapTypeControl={false}
                                streetViewControl={false}
                                fullscreenControl={true}
                            >
                                <MapController
                                    currentPosition={currentPosition}
                                    recenterCount={recenterCount}
                                />

                                {currentPosition && (
                                    <AdvancedMarker
                                        position={currentPosition}
                                        title="Your Current Location"
                                        zIndex={10}
                                    >
                                        <Pin
                                            background="#FF1744"
                                            borderColor="#FFFFFF"
                                            glyphColor="#FFFFFF"
                                            glyph="A"
                                            scale={1.5}
                                        />
                                    </AdvancedMarker>
                                )}

                                <NavigationRoute
                                    origin={routeData.origin}
                                    destination={routeData.destination}
                                    onRouteReady={setNavigationInfo}
                                />
                            </Map>
                        </APIProvider>
                    ) : (
                        <div
                            style={{
                                minHeight: 320,
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
                                navigation mapping.
                            </p>
                        </div>
                    )}

                    <button
                        type="button"
                        className="navigation-recenter-button"
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

                <div className="next-turn">
                    <FaMapMarkerAlt className="turn-icon" />

                    <div>
                        <h3>Next Turn</h3>

                        <p>
                            {navigationInfo.nextInstruction}

                            {navigationInfo.nextDistance &&
                                ` • ${navigationInfo.nextDistance}`}
                        </p>
                    </div>
                </div>

                <div className="navigation-info">
                    <div className="info-box">
                        <h3>Distance Left</h3>
                        <p>{navigationInfo.distance}</p>
                    </div>

                    <div className="info-box">
                        <h3>Estimated Time</h3>
                        <p>{navigationInfo.duration}</p>
                    </div>

                    <div className="info-box">
                        <h3>Safety Score</h3>
                        <p>95 / 100</p>
                    </div>
                </div>

                <Button
                    text="End Navigation"
                    onClick={() =>
                        navigate("/safe-route")
                    }
                />
            </div>
        </UserLayout>
    );
}

export default Navigation;