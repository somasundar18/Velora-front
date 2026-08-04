import React, { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import Policeroute from "./pages/police/policeroute/Policeroute";

function App() {
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => {
            setPath(window.location.pathname);
        };

        window.addEventListener("popstate", handleLocationChange);

        const originalPushState = window.history.pushState;
        window.history.pushState = function (...args) {
            originalPushState.apply(this, args);
            handleLocationChange();
        };

        const originalReplaceState = window.history.replaceState;
        window.history.replaceState = function (...args) {
            originalReplaceState.apply(this, args);
            handleLocationChange();
        };

        return () => {
            window.removeEventListener("popstate", handleLocationChange);
            window.history.pushState = originalPushState;
            window.history.replaceState = originalReplaceState;
        };
    }, []);

    if (path.startsWith("/police")) {
        return <Policeroute />;
    }
    return <AppRoutes />;
}

export default App;