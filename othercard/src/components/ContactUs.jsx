import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
    const navigate = useNavigate();

    return (
        <Container className="mt-5 text-center">
            <h1>Contact Us - Mehandi Services</h1>
            <p>Reach out to us for bookings and queries.</p>

            {/* Back to Dashboard Button */}
            <Button
                variant="primary"
                className="mt-3"
                onClick={() => navigate("/")}
            >
                Back to Dashboard
            </Button>
        </Container>
    );
};

export default ContactUs;
