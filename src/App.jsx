import React, { useState, useEffect } from 'react';
import { NewsCard } from './components/NewsCard';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, loadMore, resetVisibleCount } from './features/news/newsSlice';

const App = () => {
  const dispatch = useDispatch();
  const { articles, visibleCount, loading, error } = useSelector((state) => state.news);

  const [country, setCountry] = useState('in');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const countries = {
    'in': { name: 'India', flag: 'https://flagcdn.com/w40/in.png' },
    'us': { name: 'USA', flag: 'https://flagcdn.com/w40/us.png' },
    'ar': { name: 'UAE', flag: 'https://flagcdn.com/w40/ae.png' },
  };

  useEffect(() => {
    dispatch(fetchNews(country));
    dispatch(resetVisibleCount());
  }, [country, dispatch]);

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    setShowCountryDropdown(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col items-center">
      <Header
        country={country}
        onCountryChange={handleCountryChange}
        showCountryDropdown={showCountryDropdown}
        onToggleCountryDropdown={() => setShowCountryDropdown(!showCountryDropdown)}
        countries={countries}
      />

      <main className="w-full max-w-6xl px-4 pt-28">

        {loading && (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            <p className="ml-4 text-lg text-gray-600">Loading news...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.length === 0 ? (
                <div className="col-span-full text-center py-10 text-gray-600 text-lg">
                  No news articles found for this country.
                </div>
              ) : (
                articles.slice(0, visibleCount).map((article, index) => (
                  <NewsCard key={index} article={article} />
                ))
              )}
            </div>

            {visibleCount < articles.length && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => dispatch(loadMore())}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#B91C1C', 
                    border: '1px solid #FCA5A5',
                    padding: '0.75rem 2rem',
                    borderRadius: '0.25rem',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  View More
                </button>
              </div>
            )}
          </>
        )}

      </main>
      <Footer />
    </div>
  );
};

export default App;
