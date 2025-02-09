import axios from "axios";
import { baseUrl, propsEndpoint, revsEndpoint } from "../globals/apiUrls";
import { useQuery } from "@tanstack/react-query";

const getProperties = async () => {
    return await axios.get(baseUrl + propsEndpoint);
};

const getProperty = async (id) => {
    return await axios.get(baseUrl + propsEndpoint + "/" + id);
};

const addProperty = async (newProperty) => {
    const {
        title,
        description,
        n_bedrooms,
        n_bathrooms,
        n_beds,
        square_meters,
        address,
        address_number,
        zipcode,
        city,
        property_type,
    } = newProperty;
    // ... spazio per fare validazione
    return await axios.post(baseUrl + propsEndpoint, {
        user_id: null,
        title,
        description,
        n_bedrooms,
        n_bathrooms,
        n_beds,
        square_meters,
        address,
        address_number,
        zipcode,
        city,
        property_type,
    });
};

const getReviews = async (propertyId) => {
    return await axios.get(`${baseUrl}${revsEndpoint}/${propertyId}`);
};

const addReview = async (property_id, newReview) => {
    const { title, description } = newReview;
    if (!title || !description) return undefined;
    return await axios.post(baseUrl + revsEndpoint, {
        user_id: null,
        property_id,
        title,
        description,
    });
};

export const useGetPropertyQuery = (id) => {
    return useQuery({
        queryKey: ["properties", id],
        queryFn: async () => {
            const res = await getProperty(id);
            return res.data;
        },
    });
};

export const useGetReviewsQuery = (propertyId) => {
    return useQuery({
        queryKey: ["reviews", propertyId],
        queryFn: async () => {
            const res = await getReviews(propertyId);
            return res.data;
        },
    });
};
