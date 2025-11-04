import axios from "axios";

// Axios instance with default settings
const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5002",
    headers: {
        "Content-Type": "application/json",
    },
});

// GET: Fetch inquiries
export const getInquiries = async () => {
    try {
        const response = await api.get("/inquiries");
        return response.data;
    } catch (error) {
        console.error("Error fetching inquiries:", error);
        throw error;
    }
};

// POST: Add a new inquiry
export const postInquiry = async (inquiryData) => {
    try {
        const response = await api.post("/inquiries", inquiryData);
        return response.data;
    } catch (error) {
        console.error("Error adding inquiry:", error);
        throw error;
    }
};

// DELETE: Delete an inquiry by ID
export const deleteInquiry = async (id) => {
    try {
        const response = await api.delete(`/inquiries/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting inquiry:", error);
        throw error;
    }
};