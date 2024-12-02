import axios from "axios";

// Axios instance with default settings
const api = axios.create({
    baseURL: "http://localhost:5002", // Replace with your API base URL
    headers: {
        "Content-Type": "application/json",
    },
});

// GET: Fetch inquiries
export const getInquiries = async () => {
    try {
        const response = await api.get("/shopInfo");
        return response.data;
    } catch (error) {
        console.error("Error fetching shop info:", error);
        throw error;
    }
};

// POST: Add a new inquiry
export const postInquiry = async (inquiryData) => {
    try {
        const response = await api.post("/shopInfo", inquiryData);
        return response.data;
    } catch (error) {
        console.error("Error adding shop info:", error);
        throw error;
    }
};

// DELETE: Delete an shop information by ID
export const deleteInquiry = async (id) => {
    try {
        const response = await api.delete(`/shopInfo/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting shop info:", error);
        throw error;
    }
};