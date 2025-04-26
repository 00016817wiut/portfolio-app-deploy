
import me from "../../../assets/images/photo.jpg"

const HeaderInfo = () => {
  return (
    <>
    <div className="header__info-container">
      <div className="header__info">
        <h1>Раимов Арслан Уктамбекович</h1>
        <h2>Начинающий <br /> Фронт-энд разработчик</h2>
        <p>Уверенно владею HTML5 и CSS3, включая адаптивную и кросс браузерную верстку. Обладаю средними знаниями JavaScript и React. Использую Figma для верстки макетов и Adobe Photoshop для редактирования и оптимизации изображений.</p>
      </div>
      <div className="header__img">
        <img src={me} alt="" />
      </div>
    </div>
    </>
  )
}
export default HeaderInfo;