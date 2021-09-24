import BANNER_STYLE from '../style/BannnerStyle'
interface IteamBannner {
  bannerUrl: string
}
function Banner(props: IteamBannner) {
  const { bannerUrl } = props
  const bannerImage = BANNER_STYLE()
  return (
    <div className={bannerImage[`${bannerUrl}-banner`]}>
      <div className={bannerImage[`${bannerUrl}-overlay-image`]}>
        <div className={bannerImage[`${bannerUrl}-overlay`]} />
      </div>
    </div>
  )
}
export default Banner
