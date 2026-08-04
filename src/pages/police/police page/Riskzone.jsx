import { useEffect, useState } from "react";

import {
    AdvancedMarker,
    APIProvider,
    Map,
    Pin,
    useMap,
    useMapsLibrary
} from "@vis.gl/react-google-maps";

import UserLayout from "./UserLayout";

const DEFAULT_CENTER = {
    lat: 13.0827,
    lng: 80.2707
};

function LocationSearchController({
    searchRequest,
    onLocationFound,
    onError
}) {
    const map = useMap();
    const routesLibrary = useMapsLibrary("routes");

    useEffect(() => {
        if (!map || !routesLibrary || !searchRequest) {
            return;
        }

        const searchLocation = async () => {
            try {
                /*
                 * Routes requires an origin.
                 * This origin is only used to locate the searched destination.
                 */
                const result =
                    await routesLibrary.Route.computeRoutes({
                        origin: {
                            lat: 12.9716,
                            lng: 77.5946
                        }, // Bengaluru

                        destination:
                            searchRequest.address,

                        travelMode: "DRIVING",

                        fields: [
                            "path",
                            "viewport"
                        ]
                    });

                const route = result.routes?.[0];

                if (!route || !route.path?.length) {
                    throw new Error(
                        "Location could not be found."
                    );
                }

                const lastPoint =
                    route.path[route.path.length - 1];

                const destinationPosition = {
                    lat:
                        typeof lastPoint.lat === "function"
                            ? lastPoint.lat()
                            : lastPoint.lat,

                    lng:
                        typeof lastPoint.lng === "function"
                            ? lastPoint.lng()
                            : lastPoint.lng
                };

                onLocationFound(destinationPosition);
                onError("");

                /*
                 * Focus on the searched location instead
                 * of displaying the complete route.
                 */
                map.panTo(destinationPosition);
                map.setZoom(13);
            } catch (error) {
                console.error(
                    "Location search error:",
                    error
                );

                onError(
                    "Location not found. Enter a more specific location."
                );
            }
        };

        searchLocation();
    }, [
        map,
        routesLibrary,
        searchRequest,
        onLocationFound,
        onError
    ]);

    return null;
}

function Riskzone() {
    const [location, setLocation] = useState("");

    const [searchRequest, setSearchRequest] =
        useState(null);

    const [markerPosition, setMarkerPosition] =
        useState(null);

    const [error, setError] = useState("");

    const mapsApiKey = import.meta.env
        .VITE_GOOGLE_MAPS_API_KEY?.trim();

    const hasMapsApiKey = Boolean(mapsApiKey);

    const handleSearch = (event) => {
        event.preventDefault();

        const searchedLocation = location.trim();

        if (!searchedLocation) {
            setError("Enter a location.");
            return;
        }

        setError("");

        setSearchRequest({
            address: searchedLocation,
            id: Date.now()
        });
    };

    return (
        <UserLayout>
            <div className="com-map-ui">
                <h2>RISK ZONE MAP</h2>

                <div className="map-ui">
                    <div className="map-txt-ui">
                        <h3>
                            Real-time Risk Monitoring
                        </h3>

                        <form
                            className="risk-location-form"
                            onSubmit={handleSearch}
                        >
                            <label htmlFor="risk-location">
                                Enter location:
                            </label>

                            <input
                                id="risk-location"
                                type="text"
                                placeholder="search location"
                                value={location}
                                onChange={(event) =>
                                    setLocation(
                                        event.target.value
                                    )
                                }
                            />

                            <small>
                                Press Enter to search
                            </small>

                            {error && (
                                <p className="risk-search-error">
                                    {error}
                                </p>
                            )}
                        </form>
                    </div>

                    <div className="map-mapui">
                        {hasMapsApiKey ? (
                            <APIProvider apiKey={mapsApiKey}>
                                <Map
                                    defaultCenter={DEFAULT_CENTER}
                                    defaultZoom={7}
                                    mapId="DEMO_MAP_ID"
                                    gestureHandling="greedy"
                                    mapTypeControl={false}
                                    streetViewControl={false}
                                    fullscreenControl={true}
                                >
                                    <LocationSearchController
                                        searchRequest={
                                            searchRequest
                                        }
                                        onLocationFound={
                                            setMarkerPosition
                                        }
                                        onError={setError}
                                    />

                                    {markerPosition && (
                                        <AdvancedMarker
                                            position={
                                                markerPosition
                                            }
                                            title={
                                                location ||
                                                "Searched location"
                                            }
                                        >
                                            <Pin
                                                background="#F43F5E"
                                                borderColor="#FFFFFF"
                                                glyphColor="#FFFFFF"
                                                glyph="!"
                                                scale={1.3}
                                            />
                                        </AdvancedMarker>
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
                                    background: "#fff7f7",
                                    borderRadius: "12px",
                                    color: "#2d2f43"
                                }}
                            >
                                <h3>Map unavailable</h3>
                                <p>
                                    Add a Google Maps API key to
                                    the app environment to enable
                                    live risk-zone mapping.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="riskmark">
                    <h4>High Risk Hotspots</h4>
                    <p>3</p>
                </div>

                <div className="sos alter">
                    <h4>Total SOS Alerts</h4>
                    <p>3</p>
                </div>

                <div className="Safe Areas">
                    <h4>Safe Area</h4>
                    <p>4</p>
                </div>
            </div>
        </UserLayout>
    );
}

export default Riskzone;