# CampusEats

A campus food-ordering web app built with React and Vite for **BICS 3301 Cross-Platform Software Development**, IIUM.

- **Name:** [MUHAMMAD AMIRUL IZZAT BIN MAHIDZAR]
- **Matric no:** [2320619]
- **Repository:** campuseats-2320619

## Features

- **Week 2:** vendor cards and menus rendered from data with props and `.map()`. Choosing a vendor switches the menu, and Add to cart updates the header badge.
- **Week 3:** menus fetched from a mock API with loading and error states and a Try again button. The cart has quantities (+ / −), Remove, and a derived total. A checkout form with controlled inputs and validation (name, mahallah, pickup time) leads to an "Order placed" view.
- **Week 4:** multi-page app with React Router (`/`, `/vendor/:id`, `/cart`, `/orders`, 404). The cart and orders live in a Context and are saved in `localStorage`, so they survive a refresh.
- **Personal feature:**

## Tech stack

- React (function components and hooks: `useState`, `useEffect`)
- Vite
- React Router
- Plain CSS

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Project structure

```text
public/api/vendors.json    mock API: all vendors and menus
src/
  App.jsx                  route table inside BrowserRouter and CartProvider
  index.css                global and shared styles
  context/
    cart-context.js        createContext
    CartProvider.jsx       cart and orders state, saved to localStorage
  hooks/
    useLocalStorage.js     useState that survives refresh
    useVendors.js          fetch, loading, error and reload
    useCart.js             reads the cart context
  pages/                   HomePage, VendorPage, CartPage, OrdersPage, NotFoundPage
  components/              Layout, Header, Footer, VendorCard, MenuList,
                           MenuItemCard, CartItem, CheckoutForm, Status
```

## Data credits

Vendor 1 (**Roti Canai Ahmad**) is my own shop. The other vendors' data was shared by classmates, and only the data was shared. The components, cart and checkout code are my own.

- Vendors 2 (**Mamak Mia**) from [Norsabreena binti Norshahidy, 2417740 ]
- Vendors 3 (**Sedap Corner, BurgerCrysHappy, Furtive Katfe,**) from [MOHAMAD HISHAMUDDIN BIN MOHAMAD MANSOR, 2518745]

## AI usage

I used AI tools while building this project. My log is in [AI_USAGE.md](AI_USAGE.md).

## Git tags

- `week-2`
- `week-3`
