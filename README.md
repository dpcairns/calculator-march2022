## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

### Note: This plan is just for addition. We need to do this three more times for the other math operators
## HTML Setup
- Two inputs
    - Why? We need to figure out what numbers the user wants to add
    - How? `addInput1.value` `addInput2.value`
- Add button
    - Why? We need to know WHEN to do the work
    - `button.addEventListener('click', () => { })`
- Output/results Div 
    - Why? We need some place to display the sum
    - `resultsDiv.textContent`

## Events
- on click, the two numbers get added and are displayed
    - get the two numbers from their inputs
    - add them together
    - change the textContent to the sum