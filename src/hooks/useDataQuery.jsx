
import { useQuery } from "@tanstack/react-query";
import { getProperties, getProperty, getReviews } from "../globals/apiCalls";

export const useGetPropertiesQuery = () => {
    return useQuery({
        queryKey: ["properties"],
        queryFn: async () => {
            const res = await getProperties();
            return res.data;
        },
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
