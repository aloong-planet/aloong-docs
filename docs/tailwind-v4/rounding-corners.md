---
sidebar_position: 1
title: Rounding Corners
---

# Rounding Corners with Science and CSS Variables

Creating consistent rounded corners across nested elements can be challenging in CSS. When an inner element has the same border radius as its container, the visual effect often feels off. This is where calculated values with CSS variables come to the rescue.

## The Problem

When you have a card with rounded corners and an image inside, simply applying the same border-radius value to both elements typically doesn't create the harmonious design you're looking for. The inner element's corners should be slightly smaller to maintain visual consistency.

## The Solution

Using `calc()` and CSS variables, we can mathematically derive the appropriate border radius for nested elements based on their parent container's properties.

## Example

Here's how to implement this technique:

```html
<div class="rounded-(--c-radius) bg-white/15 p-(--c-padding) outline -outline-offset-1 outline-white/25 [--c-padding:--spacing(3)] [--c-radius:var(--radius-4xl)]">
  <img class="aspect-5/6 rounded-[calc(var(--c-radius)-var(--c-padding))] bg-gray-800 object-cover shadow-2xl outline -outline-offset-1 outline-white/10" src="image.jpg" alt="" />
</div>
```

This Tailwind CSS implementation:

1. Defines variables for the container's padding (`--c-padding`) and border radius (`--c-radius`)
2. Uses `calc()` to subtract the padding from the border radius for the inner image
3. Results in perfectly balanced rounded corners that maintain visual harmony

## Key Takeaways

- Define your container's border radius and padding as CSS variables
- For nested elements, calculate their border radius by subtracting the padding from the parent's border radius
- This approach ensures consistent visual hierarchy and prevents awkward corner mismatches
- The technique works particularly well for cards with images, form elements, or any nested UI components

By applying this scientific approach to rounded corners, your designs will feel more polished and intentional, with better visual harmony between container elements and their children.

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_variables)
- [calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc())
- [Youtube](https://www.youtube.com/watch?v=X3-4jwm4Z4Y)
- [CodeSample](https://play.tailwindcss.com/SIHJT7S215)