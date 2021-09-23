import useApi from '../teamCustomHook/useApi';
import URL from '../helper/Url';
import useTeamStyles from '../style/TeamStyle';
import Banner from '../components/Banner';
interface IplayerData {
    players: [playerData]
    team: { [key: string]: string }
}
interface playerData {
    id: string,
    name: string,
    image: string,
    stats: {
        matches: number;
        runs: number;
        wickets: number;
    }
}
interface Iurl {
    match: {
        url: string
    }
}
function Team(props: Iurl) {
    let team_url = props.match.url.slice(7)
    const team_data = useApi(URL[team_url]);
    const teamData = team_data.data as IplayerData
    const classes = useTeamStyles();
    return (
        <div className={classes.container}>
            <Banner bannerUrl={team_url} />
            <div className={classes.card}>
                {
                    teamData && teamData.players.map(player => {
                        return (
                            <div key={player.id} className={classes.teamPlayerCard}>
                                <div className={classes[`${team_url}`]} >
                                    <img src={player.image} alt={player.name} className={classes.teamPlayerCardImage} />
                                </div>
                                <div className={classes.teamPlayerCardPlayerDetail}>
                                    <p>{player.name}</p>
                                    <div className={classes.teamPlayerCardPlayerStat} >
                                        <p className={classes.teamPlayerCardMatches}>{player.stats.matches}<span>Matches</span></p>
                                        <p className={classes.teamPlayerCardMatches}>{player.stats.runs}<span>Runs</span></p>
                                        <p className={classes.teamPlayerCardMatches}>{player.stats.wickets}<span>Wickets</span></p>
                                    </div>
                                    <button className={classes.teamPlayerCardViewProfile}>View Profile</button>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div >
    )
}
export default Team