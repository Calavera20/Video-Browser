import axios from "axios";

const KEY = "AIzaSyDqfRB96J8wAJuKW2mPeOy8zOOq0bCctjY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
