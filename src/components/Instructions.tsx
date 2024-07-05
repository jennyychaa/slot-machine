const Instructions = () => (
  <div className='App'>
    <h1>Slot Machine</h1>
    <h2>Goals</h2>
    <ul>
      <li>
        render three images next to each other, centered horizontally on the
        page, representing the three spinning wheels of a slot machine
      </li>
      <li>render a button which, when clicked, begins spinning the wheels</li>
      <li>
        call the spinWheel API function to fetch spin results for each wheel
      </li>
      <li>
        if the results for all three wheels are the same, display a message to
        the user indicating that they've won
      </li>
    </ul>
    <h2>Stretch Goals</h2>
    <ul>
      <li>
        display a busy indicator on each wheel after the spin has started and
        before results have been returned from the API call
      </li>
      <li>
        add delays to each wheel so that the first wheel's result displays
        first, the second wheel's result displays second, and the third wheel's
        result displays last
      </li>
      <li>
        apply some fun or interesting styling to the wheels, the button, or the
        results area
      </li>
      <li>
        anything else which you feel is important in providing a good user
        experience
      </li>
    </ul>
    <h2>Notes</h2>
    <ul>
      <li>
        This is intended to be a conversation, not a test. Your code should run
        and it should meet the requirements of the exercise, but your thought
        process and your ability to express yourself verbally and in
        code/comments/etc. are more important than using the fastest sort
        algorithm or the most efficient storage mechanism.
      </li>
      <li>
        This is also not a closed-book exam. Please look stuff up on Google or
        MDN, ask the interviewer for help, etc.
      </li>
    </ul>
  </div>
);

export default Instructions;
