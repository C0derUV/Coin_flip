
import Index from "../../../../container/Index";
import PagesIndex from "../../../../container/PagesIndex";

export default function RecentPlays({participants}) {
  const formatTimeAgo = (index) => {
    return `${index + 1} minutes ago`;
  };

  return (
    <Index.Box className="recent-plays-section">
      <Index.Box className="container">
        <Index.Box className="section-heading-main recent-heading-main">
          <Index.Typography className="section-heading">Recent Plays</Index.Typography>
        </Index.Box>
        <Index.Box className="recent-plays-main">
          {participants.length > 0 ? (
            participants.map((participant, index) => (
              <Index.Box key={participant} className="recent-plays-row">
                <Index.Box className="recent-flex-main">
                  <Index.Box className="recent-left-content-main">
                    <img
                      src={PagesIndex.Svg[`recent${(index % 6) + 1}`]} 
                      alt="Recent Plays"
                      className="recent-img"
                    />
                    <Index.Typography className="recent-text">
                      <span>Wallet:</span> {participant} made a wish
                    </Index.Typography>
                  </Index.Box>
                  <Index.Box className="recent-right-content-main">
                    <Index.Typography className="recent-time-text">
                      {formatTimeAgo(index)}
                    </Index.Typography>
                  </Index.Box>
                </Index.Box>
              </Index.Box>
            ))
          ) : (
            <Index.Typography>No recent plays found.</Index.Typography>
          )}
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
}
