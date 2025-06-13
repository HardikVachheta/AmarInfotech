import { ChevronDown, Search, User } from 'lucide-react';

export const Header = ({ country, onCountryChange, showCountryDropdown, onToggleCountryDropdown, countries }) => {
    return (
        <header className="w-full bg-white shadow-lg p-4 fixed top-0 z-50">
            <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
                <div className="flex items-center mb-3 sm:mb-0">
                    <div className="flex items-center mr-4">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/f/f0/NBC_News_%282023%29.svg' alt='NBC News Logo' className='h-10 w-auto' />
                    </div>
                </div>

                <nav className="flex flex-wrap justify-center sm:justify-center gap-x-15 gap-y-2 flex-grow">
                    {['Corona Updates', 'Politics', 'Business', 'Sports', 'World', 'Travel', 'Podcasts'].map(category => (
                        <span
                            key={category}
                            className="text-gray-700 hover:text-blue-600 font-medium text-sm cursor-pointer transition-colors duration-200"
                        >
                            {category}
                        </span>
                    ))}
                </nav>

                <div className="flex items-center space-x-4 ml-0 sm:ml-4 mt-3 sm:mt-0 relative">
                    <span className="text-gray-500 hover:text-gray-800 focus:outline-none">
                        <User className="w-5 h-5" />
                    </span>
                    <span className="text-gray-500 hover:text-gray-800 focus:outline-none">
                        <Search className="w-5 h-5" />
                    </span>

                    <div className="relative">
                        <div
                            onClick={onToggleCountryDropdown}
                            className="flex items-center px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200 text-gray-700 transition-colors duration-200 focus:outline-none"
                        >
                            <img src={countries[country].flag} alt={countries[country].name} className="w-5 h-4 mr-2 rounded-sm" />
                            <span>{countries[country].name.substring(0, 2).toUpperCase()}</span>
                            <ChevronDown
                                className={`w-4 h-4 ml-2 transition-transform duration-200 ${showCountryDropdown ? 'rotate-180' : 'rotate-0'
                                    }`}
                            />
                        </div>
                        {showCountryDropdown && (
                            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-10">
                                {Object.entries(countries).map(([code, { name, flag }]) => (
                                    <div
                                        key={code}
                                        onClick={() => onCountryChange(code)}
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                    >
                                        <img src={flag} alt={name} className="w-5 h-4 rounded-sm" />
                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};