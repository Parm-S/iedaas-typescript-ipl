import Banner from '../components/Banner'
import URL from '../helper/Url'
import useTeamStyles from '../style/TeamStyle'
import useApi from '../teamCustomHook/useApi'
interface IplayerData {
  players: [IplayerStats]
  team: { [key: string]: string }
}
interface IplayerStats {
  id: string
  name: string
  image: string
  stats: {
    matches: number
    runs: number
    wickets: number
  }
}
interface Iurl {
  match: {
    url: string
  }
}
function Team(props: Iurl) {
  const teamUrl = props.match.url.slice(7)
  const teamdata = useApi(URL[teamUrl])
  const teamData = teamdata.data as IplayerData
  const classes = useTeamStyles()
  return (
    <div data-testid="TeamPlayerCard" className={classes.container}>
      <Banner bannerUrl={teamUrl} />
      <div className={classes.card}>
        {teamData &&
          teamData.players.map((player) => {
            return (
              <div key={player.id} className={classes.teamPlayerCard}>
                <div className={classes[`${teamUrl}`]}>
                  <img
                    src={player.image}
                    alt={player.name}
                    className={classes.teamPlayerCardImage}
                  />
                </div>
                <div className={classes.teamPlayerCardPlayerDetail}>
                  <p>{player.name}</p>
                  <div className={classes.teamPlayerCardPlayerStat}>
                    <p className={classes.teamPlayerCardMatches}>
                      {player.stats.matches}
                      <span>Matches</span>
                    </p>
                    <p className={classes.teamPlayerCardMatches}>
                      {player.stats.runs}
                      <span>Runs</span>
                    </p>
                    <p className={classes.teamPlayerCardMatches}>
                      {player.stats.wickets}
                      <span>Wickets</span>
                    </p>
                  </div>
                  <button className={classes.teamPlayerCardViewProfile}>View Profile</button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
export default Team
