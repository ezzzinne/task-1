# Metabnb

Metabnb is a responsive web application that showcases virtual properties available for rent in the metaverse. The project focuses on clean UI design, interactive filtering, and responsive layouts using HTML, CSS, and vanilla JavaScript.

Users can explore property listings, filter them by location, search for specific locations, and interact with a wallet connection modal — all without relying on a frontend framework.

## 🚀 Features
🔹 Responsive Navigation

- Desktop navigation bar with links and call-to-action button

- Mobile hamburger menu

- Menu closes when clicking outside or selecting a link

🔹 Wallet Connection Modal

- “Connect Wallet” button opens a centered modal

- Input validation ensures text is provided before submission

- Modal closes when clicking outside or using the close button

🔹 Property Listings

- Property cards displayed using CSS Grid

- Fully responsive layout that adapts to screen size

- Grid remains intact even when filtered down to one or two items

🔹 Location Filters

- Toggle button to turn filters on and off

- Location tags (e.g., Cottage, Castle, Beach, Farm)

- Selected location is visually highlighted

- Turning filters off resets all images/cards

🔹 Search Filter

- Search input allows users to filter properties by location

- Case-insensitive matching using JavaScript

- Works alongside location-based filtering logic

🔹 Mobile-Friendly UI

- Location filters adapt to smaller screens

- Touch-friendly filter tags


## 🛠️ Technologies Used

HTML5 – Semantic markup and page structure

CSS3 – Flexbox, Grid, media queries, responsive design

JavaScript (ES6) – DOM manipulation, event listeners, filtering logic

No frameworks or libraries were used.

## 📁 Project Structure
```
metabnb/
├── assets/              # Images, icons, and logos
├── index.html           # Main HTML file
├── places.html          # HTML file for locations
├── style.css            # Global styles
├── index.js             # JavaScript functionality
├── README.md            # Project documentation
```

## ⚙️ How It Works
Navigation

- Clicking the hamburger menu toggles the navigation links.

- Clicking outside the menu automatically closes it.

Wallet Modal

- Clicking “Connect Wallet” opens a modal.

- Form submission is blocked if the input is empty.

- Success message appears when a wallet address is provided.

Location Filtering

- Click the Location toggle button to enable filters.

- elect a location tag to filter properties.

- Only cards matching the selected location are displayed.

Click the toggle button again to:

- Disable filters

- Remove active highlights

- Restore all property cards

Search Filtering

- Typing into the search input filters properties in real time.

- Matches are based on the data-location attribute of each card.

## 📱 Responsive Design

- Uses CSS Grid with auto-fit and fixed column widths for consistency.

- Cards stay aligned and centered even when only one or two items are visible.

- Layout adapts smoothly across mobile, tablet, and desktop devices.

## 🧠 Key Concepts Implemented

- DOM querying and event handling

- State management using variables (filtersOn, selectedLocation)

- Dataset attributes (data-location) for filtering

- Separation of concerns between layout (CSS) and logic (JavaScript)

- Click-outside detection for UI components

## 🔮 Future Improvements

- Fetch property data from a real public API

- Add smooth animations for filtering transitions

- Integrate real Web3 wallet providers (e.g., MetaMask)

- Improve accessibility (ARIA roles, keyboard navigation)

- Add pagination or infinite scrolling

- Convert project to React or Next.js

## 📄 License

This project is open-source and available under the MIT License.

## 👤 Author

Ezinne Nwani

GitHub: https://github.com/ezzzinne