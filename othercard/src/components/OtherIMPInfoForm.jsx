import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OtherIMPInfoForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "file") {
            setFormData({ ...formData, file: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <>
            {/* Black border only on focus */}
            <style>
                {`
                    input:focus,
                    textarea:focus,
                    select:focus {
                        border: 2px solid black !important;
                        outline: none !important;
                        box-shadow: none !important;
                    }

                    input,
                    textarea,
                    select {
                        transition: border 0.2s ease-in-out;
                    }
                `}
            </style>

            <div
                className="container mt-4 p-4 rounded shadow"
                style={{ maxWidth: "1120px", backgroundColor: "#fef0e8" }}
            >
                <div className="container p-4">
                    <h4 className="fw-bold mb-4">Other IMP Info</h4>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-10">
                                <div className="col-16 col-md-6 mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Inward title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-16 col-md-6 mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Enter Description"
                                        rows="1"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-16 col-md-6 mb-3">
                                    <label className="form-label">Attachment</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="file"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="text-end mt-4">
                                <button
                                    type="submit"
                                    className="btn text-white"
                                    style={{ backgroundColor: "#f68f50" }}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtherIMPInfoForm;









