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

let isProgressBarActive = false

window.addEventListener('keyup', (e) => {
  isProgressBarActive =
    document.activeElement.className.includes(progressBarClassName)

  if (e.code === 'Space' && isProgressBarActive) {
    e.preventDefault()

    /** @type {HTMLButtonElement} */
    const playButton = document.querySelector(`.${playButtonClassName}`)

    playButton?.click()
  }
})
