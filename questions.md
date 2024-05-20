1. If you have a user requirement to create a new page what are the steps you take to create the solution focusing on (UI,UX, FE)

- understand user requirements, clarify doubts and gather requirements
- if involves another page or module research that module and understand what it does
- check prototype/sketch design (if exists) create a quick sketch of how it would look
- do system design to see all the involved parts in a diagram.
- do usability tests, automate tests if possible.
- start with the structure of the new page, add funcionality afterwards, finalize with visual aspects

2. Do you have experience using state management libraries? Can you explain how you
   used it?

   yes I have experience with Redux, I used it in my first job at Shift, it helped us to mantain the state of large amount of data
   that was needed to calculate, payrolls, shifts, queue theory and more. We had initializing calls to the backend that got the data
   from DBs, then we stored data in a bunch of different variables.

3. What are some of the code best practices you use in your experience?

- code versioning
- DRY
- reutilizable code.
- automated testing.

4. What are some ways to style components? Can you provide an explanation of each?

- **styled components**: allows you to write css for your components right where you define your component, this is helpful because it isolates the css to that component only avoiding css blending and conflicts.
  some of its cons are that it makes code heavier, it makes you repeat yourself since you cant share styling that could be use in multiple components.
- **in-line style**: most basic way of styling components, its achieved by adding style tag to components. Its complicated to maintain and can make code harder to read.
- **css**: is a language that allows us to modify the layout and visual aspects of html pages, usually you would need to import the css file.
- **tailwind**: is a css framework that allows you to add css without the need to manage css files, this is achieved by adding tailwind to your project and then using the predefined classes that tailwind offer.
- **SASS**: SASS is a post css processing

5. Describe 3 ways to pass information from a component to its parent component

- **Prop**: Pass a function as a prop then on the child call this function with the data to be share as a parameter.
- **React context**: Allows you to pass props along the dom tree without explicitly passing the props through evert level,
  just call React context to set the state and then call React context to access the state
- **Redux**: Redux allows you to have a centralized place to store your states, this could allow parents to access data from the child component.

6. Do you have experience in design systems? Can you please share your experience and
   best practices?

   I do not have experience in design systems but I've heard of them and I know that it can help to get a more
   consistent component creation and mantain a cleaner image on the pages.
