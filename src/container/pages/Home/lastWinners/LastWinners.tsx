
import Index from "../../../../container/Index";
import PagesIndex from "../../../../container/PagesIndex";

export default function LastWinners({winners,solReceived}) {
  return (
    <Index.Box className="last-winner-section">
      <Index.Box className="container">
        <Index.Box className="section-heading-main last-winner-heading-main">
          <Index.Typography className="section-heading">Last Winners</Index.Typography>
        </Index.Box>
        <Index.Box className="last-winner-row">
          {winners.length > 0 ? (
            winners.map((winner, index) => (
              <Index.Box key={winner} className="last-winner-col">
                <Index.Typography className="last-winner-percentages">
                  {[50, 30, 20][index] || 0}% {/* Display fixed percentages */}
                </Index.Typography>
                <img
                  src={PagesIndex.Svg[`lastWinner${(index % 3) + 1}`]} 
                  className="last-winner-img" 
                  alt="Winner" 
                />
                <Index.Typography className="last-winner-name">
                  {winner?.slice(0, 4)}...{winner?.slice(-4)} 
                </Index.Typography>
                <Index.Typography className="last-winner-text">
                  Sol Received: {solReceived[index] ? solReceived[index].toFixed(2) : 0} SOL
                </Index.Typography>
              </Index.Box>
            ))
          ) : (
            <Index.Typography>No winners found.</Index.Typography>
          )}
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
}
