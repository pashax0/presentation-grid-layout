# CSS Grid Layout
CSS Grid Layout is a CSS layout method designed for the two-dimensional layout of items on a webpage or application. It is the most powerful layout system available in CSS.
CSS has always been used to lay out our web pages! First, we used tables, then floats, positioning and inline-block, but all of these methods were essentially hacks and left out a lot of important functionality (vertical centering, for instance).
You know about flexbox, but it is largely a 1-dimensional system. CSS Grid can handle both columns and rows. Flexbox and Grid actually work very well together.
## Terminology
During the presentation I will use this simple template.
* Grid Container
The element on which display: grid is applied. It's the direct parent of all the grid items. In this example container is the grid container.
* Grid Item
The children (i.e. direct descendants) of the grid container.
* Grid Line
The dividing lines that make up the structure of the grid.
* Grid Track
The space between two adjacent grid lines. You can think of them like the columns or rows of the grid.
* Grid Cell
The space between two adjacent row and two adjacent column grid lines.
* Grid Area
The total space surrounded by four grid lines.
## Properties for the Parent
The main property is display. Display defines the element as a grid container and establishes a new grid formatting context for its contents.
May take nextvalues:
* grid
* inline-grid
### grid-template-columns and grid-template-rows
Grid-template-columns and grid-template-rows defines the columns and rows of the grid with a space-separated list of values.
### grid-gap (gap)
Grid-gap specifies the size of the grid lines. The gutters are only created between the columns/rows, not on the outer edges.
## Positioning
### Justify-items
Aligns grid items along the row axis.
Values:
* start
* end
* center
* stretch
This behavior can also be set on individual grid items via the justify-self property.
### Align-items
Aligns grid items along the column axis.
Values:
* start
* end
* center
* stretch
This behavior can also be set on individual grid items via the align-self property.
## PROPERTIES FOR THE CHILDREN (GRID ITEMS)
### grid-column-start(end) and grid-row-start(end)
Determines a grid item's location within the grid by referring to specific grid lines.
## Explicit and Implicit Grids
We can define a fixed number of lines and tracks that form a grid by using the properties grid-template-rows, grid-template-columns, and grid-template-areas. This manually defined grid is called the explicit grid.
If there are more grid items, the grid container automatically generates grid tracks by adding grid lines to the grid. The explicit grid together with these additional implicit tracks and lines forms the so called implicit grid.
You can contol implicit grid by adding property grid-auto-colomns and grid-auto-rows.
### grid-auto-flow
If you have grid items that you don't explicitly place on the grid, the auto-placement algorithm kicks in to automatically place the items. This property controls how the auto-placement algorithm works.
## Shortinings
You can use some shortenings for grid properties.
## Examples
We can sticky our footer.
Value autofeet, autolix, minmax, fr
Mansonry example.
Hexagon.
Table of Mendeleev.
