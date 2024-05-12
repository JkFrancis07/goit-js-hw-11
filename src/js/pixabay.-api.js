export const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "43844188-63a21f2098d0a31321d8205c3";

export const options = {
    params: {
        key: API_KEY,
        q: "",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: 1,
        per_page: 40,
    },
};