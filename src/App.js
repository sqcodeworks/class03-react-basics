import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App(props) {
  return (
    <div>
      <h1>{props.storyTitle}</h1>
      <p>There was once a hare who was friends with a tortoise.
        One day, he challenged the tortoise to a race.
        Seeing how slow the tortoise was going, the hare thought
        he’ll win this easily. So he took a nap while the tortoise
        kept on going. When the hare woke up, he saw that the tortoise
        was already at the finish line. Much to his chagrin, the tortoise
        won the race while he was busy sleeping.</p>
      <h2>Moral of the story:</h2>
      <p>There are actually a couple of moral lessons we can learn from this story.
        The hare teaches that overconfidence can sometimes ruin you.
        While the tortoise teaches us about the power of perseverance.
        Even if all the odds are stacked against you, never give up.
        Sometimes life is not about who’s the fastest or the strongest,
        it’s about who is the most consistent.</p>

      <div><br />
        <h1>Other Things - <em>(For Practice Purpose)</em></h1>
        <p>Current year i.e. <b>2023</b> plus 1000 = <strong>{Number(props.currentYear) + 1000}</strong></p>
        <p>Prvious year was = <b>{props.previousYear}</b></p>
        <Hello name="Shakeel"></Hello>
      </div>
    </div>
  );
}

export default App;
