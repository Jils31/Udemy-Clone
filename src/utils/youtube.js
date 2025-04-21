export const fetchYoutubeVideos = async (query) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    return data.items[0];
  } catch (error) {
    console.error("Error fetching YouTube video:", error);
    return null;
  }
};

//This includes the function for fetching the data from the youtube