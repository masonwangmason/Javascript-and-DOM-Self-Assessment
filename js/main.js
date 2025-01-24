document.addEventListener("DOMContentLoaded", async () => {
  const listingsContainer = document.getElementById("listings-container");

  // Fetch data from the JSON file
  async function fetchListings() {
    try {
      const response = await fetch("airbnb_sf_listings_500.json"); // Adjust path if needed
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      return data.slice(0, 50); // Load only the first 50 listings
    } catch (error) {
      console.error("Error fetching listings:", error);
      return [];
    }
  }

  // Render the listings dynamically
  function renderListings(listings) {
    if (listings.length === 0) {
      listingsContainer.innerHTML = "<p>No listings available.</p>";
      return;
    }

    listings.forEach((listing) => {
      const amenities = listing.amenities ? JSON.parse(listing.amenities) : [];

      const listItem = document.createElement("li");
      listItem.classList.add("listing");
      listItem.innerHTML = `
        <div class="listing-card">
          <h2>${listing.name}</h2>
          <img src="${listing.picture_url || 'images/placeholder-thumbnail.jpg'}" 
               alt="${listing.name || 'No name available'}" 
               class="thumbnail">
          <p>${listing.description || "No description available"}</p>
          <h3>Amenities:</h3>
          <p>${amenities.length > 0 ? amenities.join(", ") : "No amenities listed"}</p>
          <h3>Host:</h3>
          <div class="host-info">
            <img src="${
              listing.host_thumbnail_url || 'images/placeholder-host.jpg'
            }" alt="${listing.host_name || "No host"}" class="host-photo">
            <p>${listing.host_name || "Host information unavailable"}</p>
          </div>
          <h3>Price:</h3>
          <p>${listing.price || "N/A"} per night</p>
        </div>
      `;
      listingsContainer.appendChild(listItem);
    });
  }

  // Load and render listings
  const listings = await fetchListings();
  renderListings(listings);
});
