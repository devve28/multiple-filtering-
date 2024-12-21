# Marketplace - E-commerce Application

Welcome to **Marketplace**, an e-commerce application that allows users to filter and sort products based on different criteria. This application provides a dynamic and user-friendly interface for browsing products with various filters and sorting options.

## Features

### Product Filters
1. **Search by Substring**  
   - Input field to filter products by their name and description.
   - The filter is case-insensitive.
   
2. **Filter by Color**  
   - Multi-select checkboxes to filter products by color.  
   - Only available colors that exist in the products will be shown.

3. **Filter by Price**  
   - Range filter with two input fields for minimum and maximum prices.

4. **Dynamic Filters**  
   - Filters update dynamically without requiring additional actions like pressing "Apply Filters."

### Sorting Options
- **Price (Low to High)**  
- **Price (High to Low)**  
- **Popular (Rating)**  
- Active sorting is highlighted by color.

### Responsive Design
- The application is optimized for various screen sizes, ensuring a smooth experience on both mobile and desktop devices.

### Empty Results
- If no products match the selected filters, a message "No products found for your query" is displayed.

## Tech Stack

- **React**: A component-based approach for a dynamic and interactive user experience.
- **TailwindCSS**: A utility-first CSS framework for rapid styling.
- **Chance.js**: For generating random product data, including names, descriptions, colors, categories, prices, and ratings.
- **CSS Modules**: For scoped and modular styling of components.

## Getting Started

### Prerequisites
Ensure that you have the following installed:
- Node.js
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/lamoda.git

   Navigate to the project directory:

bash
Копировать код
cd lamoda
Install dependencies:

bash
Копировать код
npm install
Start the development server:

bash
Копировать код
npm start
Open your browser and go to http://localhost:3000 to view the application.

File Structure
bash
Копировать код
src  
 ┣ components      # Reusable components (filters, product cards, etc.)  
 ┣ pages           # Page components (e.g., Home, ProductList, etc.)  
 ┣ hooks           # Custom hooks for managing state and performance optimization  
 ┣ utils           # Utility functions for product generation and data manipulation  
 ┣ styles          # TailwindCSS configurations  
 ┗ App.jsx         # Main application component
Future Enhancements
Pagination: Add pagination to handle large sets of products.
Search Suggestions: Implement search suggestions for a smoother user experience.
Product Ratings: Allow users to rate products.
Why This Project?
This project is ideal for developers who want to:

Learn modern React development practices.
Gain experience in building responsive web applications.
Explore state management, filtering, and sorting techniques in a real-world context.
Feel free to contribute and share your feedback! Let’s make e-commerce browsing even better.Navigate to the project directory:


cd lamoda 
Install dependencies:  


npm install  
Start the development server:  
 

npm start  
Open your browser and go to http://localhost:3000 to view the application.  

File Structure  

src  
 ┣ components      # Reusable components (filters, product cards, etc.)  
 ┣ pages           # Page components (e.g., Home, ProductList, etc.)  
 ┣ hooks           # Custom hooks for managing state and performance optimization  
 ┣ utils           # Utility functions for product generation and data manipulation  
 ┣ styles          # TailwindCSS configurations  
 ┗ App.jsx         # Main application component
Future Enhancements
Pagination: Add pagination to handle large sets of products.
Search Suggestions: Implement search suggestions for a smoother user experience.
Product Ratings: Allow users to rate products.
Why This Project?
This project is ideal for developers who want to:

Learn modern React development practices.
Gain experience in building responsive web applications.
Explore state management, filtering, and sorting techniques in a real-world context.
Feel free to contribute and share your feedback! Let’s make e-commerce browsing even better.
