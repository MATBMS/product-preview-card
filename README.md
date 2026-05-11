# Frontend Mentor - Product preview card component

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Extra feature](#extra-feature)
  - [What I learned](#what-i-learned)

## Overview

### Screenshot

![Screenshot Preview](images/preview.jpg)

### Links

- [Solution URL](https://github.com/MATBMS/product-preview-card)
- [Live Site URL](https://matbms-product-preview-card.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### Extra feature

As a User,<br>
I need to see a confirmation message when I click "Add to Cart",<br>
So that I know my action was registered and the product was successfully added.

### What I learned

The extra "success pop-up" was where most of the learning happened. The brief sounded small — show a confirmation toast on click — but it pulled in a handful of techniques I hadn't used together before:

- **`role="status"` + `aria-live="polite"` for non-urgent announcements.** The toast lives in the DOM from page load with the live-region attributes already set; the script only changes its `textContent` and toggles classes. Setting up the live region up front (instead of inserting the element on click) is what lets a screen reader actually announce the confirmation.

- **Two-phase animation with separate transforms.** The toast slides **up from below** on entry and **off to the right** on exit. Doing that cleanly meant animating `translateY` for entry, swapping to `translateX` for exit, then snapping the element back to its hidden-below position without the user seeing a diagonal slide. The "snap back" needed a forced reflow (`void toast.offsetWidth`) sandwiched between adding and removing a `no-transition` class — my first time reaching for that pattern.

- **Handling rapid re-clicks.** Clicking the button again while the toast is already up had to *re-trigger* cleanly rather than queue or glitch. Tracking both the hide-timer and the reset-timer in module-scoped variables and calling `clearTimeout` on each click was the simplest solution. It took a few tries before I stopped getting half-states (toast stuck mid-exit, or invisible but still occupying transition state).

- **`prefers-reduced-motion` as a real feature, not a checkbox.** Inside the reduced-motion media query the toast switches from a slide to a short opacity fade. Writing the fallback forced me to think about what the animation is actually *for* (drawing attention to the confirmation) rather than just disabling it.

- **Keeping the toast inside the design system.** Background, padding, radius and typography all reuse the same tokens and `.text-preset-2` utility class as the button, so the toast reads as "from the same family" without me hand-picking values.
