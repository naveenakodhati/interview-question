// Write you Code here
import {Component} from 'react'
import './index.css'

class InterviewQuestion extends Component {
  state = {isShow: true}

  showAnswerButton = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  changingColors = () => {
    const {eachQuestion} = this.props
    const {language, difficultyLevel} = eachQuestion
    let levelColors = ''
    let languageColors = ''

    if (language === 'HTML') {
      languageColors = 'language-1'
      console.log(languageColors)
    } else if (language === 'CSS') {
      languageColors = 'language-2'
    } else if (language === 'JAVASCRIPT') {
      languageColors = 'language-3'
    }

    if (difficultyLevel === 'EASY') {
      levelColors = 'difficulty-1'
      console.log(difficultyLevel)
    } else if (difficultyLevel === 'MEDIUM') {
      levelColors = 'difficulty-2'
    } else if (difficultyLevel === 'HARD') {
      levelColors = 'difficulty-3'
    }

    return (
      <div className="question-styling">
        <p className="style-type">
          <span className={`${levelColors}`}>{difficultyLevel}</span>
          <span className={`${languageColors}`}>{language}</span>
        </p>
      </div>
    )
  }

  displayAnswerText = () => {
    const {isShow} = this.state
    const {eachQuestion} = this.props
    const {answerText} = eachQuestion
    if (isShow !== true) {
      return <p className="answer-text">{answerText}</p>
    }
    return null
  }

  render() {
    const {isShow} = this.state
    const {eachQuestion} = this.props
    const {questionText} = eachQuestion
    const showImage = isShow
      ? 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'
      : 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
    const altText = isShow ? 'down arrow' : 'up arrow'
    const buttonText = isShow ? 'Show' : 'Hide'
    return (
      <li className="list-question-container">
        {this.changingColors()}

        <h1 className="heading">{questionText}</h1>
        <div>
          <button
            type="button"
            onClick={this.showAnswerButton}
            className="button"
          >
            <h1 className="button-heading">{buttonText}</h1>
            <img className="button-image" src={showImage} alt={altText} />
          </button>
        </div>
        {this.displayAnswerText()}
      </li>
    )
  }
}

export default InterviewQuestion
