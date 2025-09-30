import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Dashboard Welcome Section */}
            <Container className="mt-5 text-center">
                <h1>Welcome to Mehandi AboutUs</h1>
                <p>Manage your Mehandi services and bookings from here.</p>
               
                <p>Prerna change 1</p>

                <p>Prerna Change 1</p>

                {/* Back to Dashboard Button */}
                <Button
                    variant="primary"
                    className="mt-3"
                    onClick={() => navigate("/")}
                >
                    Back to Dashboard
                </Button>
            </Container>
        </div>
    );
};

export default AboutUs;
