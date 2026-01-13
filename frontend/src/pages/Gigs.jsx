import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Gigs = () => {
  const [gigs, setGigs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchGigs = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/gigs?search=${search}`);
      setGigs(res.data);
    } catch (err) {
      alert(err,"Failed to fetch gigs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGigs();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchGigs();
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Available Gigs
      </h1>

      {/* Search */}
      <form
        onSubmit={handleSearch}
        className="flex gap-3 mb-6 justify-center"
      >
        <input
          type="text"
          placeholder="Search gigs by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-4 py-2 w-72"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-500">Loading gigs...</p>
      )}

      {/* No gigs */}
      {!loading && gigs.length === 0 && (
        <p className="text-center text-gray-500">No gigs found.</p>
      )}

      {/* Gig cards */}
      <div className="space-y-4">
        {gigs.map((gig) => (
          <div
            key={gig._id}
            onClick={() => navigate(`/gigs/${gig._id}`)}
            className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{gig.title}</h3>
            <p className="text-gray-600">{gig.description}</p>
            <p className="mt-2 font-medium text-green-700">
              Budget: ₹{gig.budget}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gigs;
