import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGRhMzk3MzM5OTM3YzQwZGY3MTdjYzBiODViY2ZmOCIsIm5iZiI6MTc1NjM5MzIzMy4xOSwic3ViIjoiNjhiMDZmMTFmODA3ZTVjOWYzNzljMTMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.hIC2QX8noO3TdNyS3UDpxRmmZHPSrQ9uRkRgnikru68",
  },
});

export default instance;
