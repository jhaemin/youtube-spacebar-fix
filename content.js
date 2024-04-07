/**
 * content.js
 * YouTube Space bar Pause Fix
 *
 * Created by Jang Haemin on 1/7/24.
 *
 * By pressing the left or right arrow keys on YouTube video player,
 * the active element is changed to the progress bar.
 * After that, pressing the space bar doesn't pause or play the video anymore.
 * This script fixes the problem.
 */

/** Partial class name */
const progressBarClassName = 'progress-bar'
/** Whole class name */
const playButtonClassName = 'ytp-play-button'

let previousPlayButtonStatus = null

/**
 * @returns {HTMLButtonElement}
 */
function getPlayButton() {
  return document.querySelector(`.${playButtonClassName}`)
}

function isInputFocused() {
  return (
    document.activeElement instanceof HTMLInputElement ||
    document.activeElement instanceof HTMLTextAreaElement ||
    document.activeElement.getAttribute('contenteditable') === 'true'
  )
}

window.addEventListener('keydown', (e) => {
  if (isInputFocused()) {
    return
  }

  if (e.code === 'Space') {
    e.preventDefault()
    previousPlayButtonStatus = getPlayButton()?.title
  }
})

window.addEventListener('keyup', (e) => {
  if (isInputFocused()) {
    return
  }

  /**
   * If the play status doesn't change, click the play/pause button.
   */
  if (e.code === 'Space') {
    e.preventDefault()

    setTimeout(() => {
      const playButton = getPlayButton()

      if (!playButton) {
        return
      }

      const rect = playButton.getBoundingClientRect()

      // Only click when the button is visible
      if (rect.width > 0 && rect.height > 0) {
        if (previousPlayButtonStatus === playButton.title) {
          playButton.click()
        }
      }
    }, 0)
  }
})
