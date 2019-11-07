import React, { useEffect } from "react";

export default function AppLayout(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (props.needAuthenticated) {
            props.history.push("/login");
        }
    });

    if (props.needAuthenticated ) {
        return null;
    } else {
        return (
            <div>{props.children}</div>
        );
    }
}