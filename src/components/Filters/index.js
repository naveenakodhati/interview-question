// Write you Code here
import {Component} from 'react'
import './index.css'

class Filters extends Component {
  onChangeLanguage = event => {
    const {changeLanguage} = this.props
    changeLanguage(event.target.value)
  }

  onChangeDifficulty = event => {
    const {changeDifficulty} = this.props
    changeDifficulty(event.target.value)
  }

  render() {
    const {
      languageLevels,
      languageValue,
      levelValue,
      difficultyLevels,
    } = this.props
    return (
      <div className="filters-container">
        <div className="adjust-filters">
          <label className="label-text" htmlFor="language">
            LANGUAGE <br />
          </label>
          <select
            className="select-container"
            onChange={this.onChangeLanguage}
            id="language"
            value={languageValue}
          >
            {languageLevels.map(eachLanguage => (
              <option key={eachLanguage.id} value={eachLanguage.language}>
                {eachLanguage.language}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label-text" htmlFor="difficulty">
            DIFFICULTY LEVEL <br />
          </label>

          <select
            value={levelValue}
            className="select-container"
            onChange={this.onChangeDifficulty}
            id="difficulty"
          >
            {difficultyLevels.map(eachLevel => (
              <option key={eachLevel.id} value={eachLevel.level}>
                {eachLevel.level}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

export default Filters
