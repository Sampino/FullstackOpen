import Feedback from "./StatisticLine";
import StatisticLine from "./StatisticLine";

const Statistics = ({ feedbacks }) => {

  const total = feedbacks[0] + feedbacks[1] + feedbacks[2];
  const avg = total / 3;
  const positiveFeed = (feedbacks[0] / total) * 100;

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text="Good" amount={feedbacks[0]} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="Neutral" amount={feedbacks[1]} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="Bad" amount={feedbacks[2]} /></td>
          </tr>
          <tr>
            <td><p>All {total}</p></td>
          </tr>
          <tr>
            <td><p>Avg {avg}</p></td>
          </tr>
          <tr>
            <td>Positive {positiveFeed}%</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Statistics;