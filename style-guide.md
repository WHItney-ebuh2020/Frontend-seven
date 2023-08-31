# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Neutral

- Almost White: hsl(0, 0%, 98%)
- Medium Gray: hsl(0, 0%, 41%)
- Almost Black: hsl(0, 0%, 8%)

## Typography

### Body Copy

- Font size (paragraph): 18px

### Font

- Family: [Epilogue](https://fonts.google.com/specimen/Epilogue)
- Weights: 500, 700

.arrowdown {
    display: none;
}

.bigcontainertop .dropdown {
    display: none;
    flex-direction: column;
    padding: .5rem 1.5rem;
    overflow-y: hidden;
}

.dropdown {
    display: flex;
    background-color: black;
    color: hsl(0, 0%, 98%);
    cursor: pointer;
    border-radius: 0.5em;
}

.dropdownli {
    display: flex;
    align-items: center;
    gap: 1rem;
   padding: .5rem 1rem;
}

.dropupli {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .5rem 1.5rem;
}