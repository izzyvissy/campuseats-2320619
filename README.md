# CampusEats

A campus food-ordering web app built with React and Vite for **BICS 3301 Cross-Platform Software Development**, IIUM.

- **Name:** [MUHAMMAD AMIRUL IZZAT BIN MAHIDZAR]
- **Matric no:** [2320619]
- **Repository:** campuseats-2320619

## Features

- **Week 2:** vendor cards and menus rendered from data with props and `.map()`. Choosing a vendor switches the menu, and Add to cart updates the header badge.
- **Week 3:** menus fetched from a mock API with loading and error states and a Try again button. The cart has quantities (+ / −), Remove, and a derived total. A checkout form with controlled inputs and validation (name, mahallah, pickup time) leads to an "Order placed" view.
- **Personal feature:**

## Tech stack

- React (function components and hooks: `useState`, `useEffect`)
- Vite
- Plain CSS

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Project structure

```text
public/api/vendors.json   mock API: all vendors and their menus
src/
  App.jsx                 fetches vendors, holds cart and view state
  index.css               global and shared styles
  components/
    Header.jsx            nav and cart badge
    VendorCard.jsx        one selectable vendor
    MenuList.jsx          list of menu items (with empty state)
    MenuItemCard.jsx      one menu item with Add to cart
    CartPage.jsx          cart list, total and checkout form
    CartItem.jsx          one cart row
    CheckoutForm.jsx      controlled form with validation
    Status.jsx            Loading and ErrorMessage
    Footer.jsx
```

## Data credits

Vendor 1 (**Roti Canai Ahmad**) is my own shop. The other vendors' data was shared by classmates, and only the data was shared. The components, cart and checkout code are my own.

- Vendors 2 (**Mamak Mia**) from [Norsabreena binti Norshahidy, 2417740 ]
- Vendors 3

## AI usage

I used AI tools while building this project. My log is in [AI_USAGE.md](AI_USAGE.md).

## Git tags

- `week-2`
- `week-3`
