// Write you Code here
import {Component} from 'react'
import InterviewQuestion from '../InterviewQuestion'
import './index.css'

class InterviewQuestionsApp extends Component {
  onGetSelectedFilters = () => {
    const {getDifficulty, getLanguage, interviewQuestionsData} = this.props
    let levelValue = getDifficulty
    let languageValue = getLanguage
    if (getDifficulty === 'ALL' && getLanguage === 'ALL') {
      levelValue = ''
      languageValue = ''
    } else if (getDifficulty === 'ALL') {
      levelValue = ''
    } else if (getLanguage === 'ALL') {
      languageValue = ''
    }

    const getSelectedQuestion = interviewQuestionsData.filter(
      eachData =>
        eachData.language.includes(languageValue) &&
        eachData.difficultyLevel.includes(levelValue),
    )
    return getSelectedQuestion
  }

  render() {
    const onChangeFilters = this.onGetSelectedFilters()

    return (
      <ul>
        {onChangeFilters.map(eachData => (
          <InterviewQuestion key={eachData.id} eachQuestion={eachData} />
        ))}
      </ul>
    )
  }
}

export default InterviewQuestionsApp
