// Packages
import { h, Component } from 'preact'

// Components
import { Icon } from '../atoms'

/**
 * @file Preact component representing a loading component.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

export default class Loading extends Component {
  /**
   * Renders a loading component.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLDivElement} HTML div representing a loading component
   */
  render(props, state, context) {
    let style = (`adm-loading ${props.class ? props.class : ''}`).trim()

    return (
      <div class={style}>
        <div className='ada-container'>
          <Icon name='loader' />
        </div>
      </div>
    )
  }
}
