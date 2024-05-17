function rightBar() {
  return (
    <div className="w-full sm:max-w-xs max-w-full p-4 bg-white rounded-lg shadow-lg h-full">
      {/* What's Happening Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">{`What's Happening`}</h2>
        <div className="space-y-4">
          <div className="p-3 border rounded-lg">
            <p className="text-sm font-medium">
              Gold heads for second weekly gain, silver hits 11-year high
            </p>
            <p className="text-sm text-gray-600 my-2">
              Gold prices were on track for a second consecutive weekly gain on
              Friday due to improved interest rate cut expectations, providing
              support to silver which broke through the $30 milestone and hit an
              11-year high. Spot gold rose 0.9% to $2,396.81 per ounce by 1304
              GMT. Bullion prices are up 1.5% so far this week after hitting a
              one-month high on Thursday.
            </p>
          </div>
          <div className="p-3 border rounded-lg">
            <p className="text-sm font-medium">
              Bitcoin trades at $62,000 level amid regulatory scrutiny in the US
            </p>
            <p className="text-sm  text-gray-600 my-2">
              Bitcoin started this week with trading at $64,000 level, following
              a cooler-than-expected US April jobs report after rebounding from
              the $56,000 level the previous week. However, Bitcoin could not
              hold there for long and swiftly retreated to $62,000, influenced
              by regulatory concerns surrounding Robinhood in the US
            </p>
          </div>
        </div>
      </div>

      {/* Top Creators Section */}
      <div className="capitalize">
        <h2 className="text-xl font-bold mb-4">Top Creators</h2>
        <div className="space-y-4">
          <div className="flex items-center p-3 border rounded-lg">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="flex-1">
              <p className="font-semibold">saurya rawat</p>
              <button className="text-blue-500 hover:text-blue-700">
                Follow
              </button>
            </div>
          </div>
          <div className="flex items-center p-3 border rounded-lg">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="flex-1">
              <p className="font-semibold">rishav raj</p>
              <button className="text-blue-500 hover:text-blue-700">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default rightBar;
