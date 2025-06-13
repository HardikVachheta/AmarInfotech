import { Bookmark, Heart, Share, Share2 } from "lucide-react";

export const NewsCard = ({ article }) => {

    // Function to calculate time ago from publishedAt
    const getTimeAgo = (publishedAt) => {
        if (!publishedAt) return 'Unknown time';

        const publishDate = new Date(publishedAt);
        const now = new Date();
        const seconds = Math.floor((now - publishDate) / 1000);

        let interval = seconds / 31536000; // years
        if (interval > 1) {
            return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000; // months
        if (interval > 1) {
            return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400; // days
        if (interval > 1) {
            return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600; // hours
        if (interval > 1) {
            return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60; // minutes
        if (interval > 1) {
            return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    };


    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
            {/* Article image */}
            {article.urlToImage ? (
                <img
                    src={article.urlToImage}
                    alt={article.title || 'News Image'}
                    className="w-full h-48 object-cover rounded-t-xl"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=No+Image'; }}
                />
            ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-t-xl">
                    No Image Available
                </div>
            )}
            <div className="p-4 flex-grow flex flex-col justify-end"> 
                
                <h2 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                    {article.title || 'No Title Available'}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.description || 'No description available.'}
                </p>
                
                <div className="flex-grow"></div> 

                <div className="flex flex-wrap justify-between items-center text-xs text-gray-500 mt-auto mb-4 border-b pb-3 border-gray-200"> {/* Added mt-auto */}
                    <p className="mr-2">
                       {getTimeAgo(article.publishedAt)}
                    </p>
                    <p className="mr-2">By {article.author || 'Unknown'}</p>
                    {/* <p>|</p> */}
                    <p>|     4min read</p>
                </div>

                <div className="flex justify-center items-center space-x-6">
                    <div className="flex items-center text-gray-500">
                        <span className="flex items-center hover:text-red-500 focus:outline-none cursor-pointer">
                            <Heart className="w-5 h-5 mr-1" />
                            <span>28</span>
                        </span>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <span className="flex items-center hover:text-blue-500 focus:outline-none cursor-pointer">
                            <Share className="w-5 h-5 mr-1" />
                            <span>72</span>
                        </span>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <span className="hover:text-yellow-500 focus:outline-none cursor-pointer">
                            <Bookmark className="w-5 h-5" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
