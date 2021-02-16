import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "7703035-f9398e8b550f311757541e4a4";

const fetchImageGalleryWithQuery = ({ searchQuery = "", currentPaga = 1 }) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${currentPaga}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((respone) => respone.data.hits);
};

export default { fetchImageGalleryWithQuery };
