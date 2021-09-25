import { useCallback } from 'react'
import { FaTrophy } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import LOGO_URL from '../helper/Logourl'
import URL from '../helper/Url'
import useTeamColor from '../style/TeamsColor'
import useCardStyle from '../style/TeamsStyle'
import useApi from '../teamCustomHook/useApi'
interface IteamsData {
  id: string
  teamName: string
  venue: string
  winningYears: []
}
function Teams() {
  const classes = useCardStyle()
  const teamsdata = useApi(URL.teams)
  const teamsData = teamsdata as { data: [IteamsData] }
  const history = useHistory()
  const clickHandler = useCallback(
    (id) => {
      history.push(`/teams/${id}`)
    },
    [history]
  )
  const image = LOGO_URL
  const color = useTeamColor()
  return (
    <div className={classes.container}>
      <div className={classes.cardContainer}>
        {teamsData.data &&
          teamsData.data.map((team) => {
            return (
              <div
                key={team.id}
                // tslint:disable-next-line: jsx-no-lambda
                onClick={() => {
                  clickHandler(team.id)
                }}
                className={`${classes.card} ${color[team.id]}`}
              >
                <img src={image[team.id]} alt={team.teamName} className={classes.cardImage} />
                <div className={classes.cardDetail}>
                  <h3 className={classes.title}>{team.teamName}</h3>
                  <p className={classes.venue}>{team.venue}</p>
                  <p>
                    {team.winningYears.length ? (
                      <p className={classes.teamWin}>
                        <FaTrophy />
                        {team.winningYears.map((trophy, index: number) => {
                          return (
                            <p key={index} className={classes.trophy}>
                              {trophy},
                            </p>
                          )
                        })}
                      </p>
                    ) : (
                      <p className={classes.noTeamWin} />
                    )}
                  </p>
                  <p className={classes.home}>Team Home</p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
export default Teams
