# Application Architecture

## Components

### Home

The main page of the CIT Caffeine Shop application is the Home component, which contains the Menu and Cart components:

### Menu

The Menu component contains the list of menu items as well as the dropdown selectors for filtering and sorting. Each menu item is a MenuItem component, and the dropdown selectors are contained within the FilterAndSearchOptions component. 

### MenuItem

The MenuItem component consists of a Material UI Card that displays information about the item, such as fields that the sorting and filtering options use (e.g. "Caffeinated", "Tea", etc.). It also contains a button that allows the user to add it to the cart. 

### FilterAndSortOptions

The FilterAndSortOptions component consists of three filter dropdown selectors as well as one sort dropdown selector. 

### Cart 

The Cart component consists of a list of a list of cart items, where each cart item is a CartItem component. It also displays the total cost of the items. 

### CartItem

Like the MenuItem component, a CartItem component also displays a MaterialUI card, but the font is slightly smaller, and it contains "Quantity" and "Remove from Cart" options instead at the bottom. 

## Passing Data through the Components

The menu items are a list of JSON objects that are exported from the inventory.jsx file. The Menu component imports this list and maps across it to render a list of MenuItem components. 

The list of cart items are a state variable in the Home component. This list as well as its corresponding setter method are passed as props to both the Menu and Cart components, which further pass them as props to the MenuItem and CartItem components, respectively. 

## User Interaction and State Changes

The Menu component has four state variables that track the three filtering methods as well as the sorting method. When the user selects a filtering or sorting method from the dropdown, it triggers a state change to one of these variables, which causes the Menu component to re-render. When re-rendering the list of MenuItem components, the Menu component then sorts and filters the list based on the selected filters and sorting method. 

The Home component has a state variable that tracks the list of items that are in the cart. When the user clicks on the "Add to Cart" button on a MenuItem component, it updates this state variable through a callback that is passed down as a prop from the Home component. The same thing occurs when the user clicks on the "Remove from Cart" button on a CartItem component. 