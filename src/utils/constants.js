const YOUTUBE_API_KEY = "AIzaSyBZ24bzv8J3Dku2PjVSQQ3zvHcqhoe83YY"

export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY}`

export const YOUTUBE_SEARCH_API = "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q="