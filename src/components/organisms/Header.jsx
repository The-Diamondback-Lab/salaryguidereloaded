// Packages
import { h, Component } from 'preact'
import $ from 'jquery'

// Logo
import logo from '../../assets/dbk.svg'

// Components
import { Link, Icon } from '../atoms'

/**
 * @file Preact component representing the header.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing the header.
 *
 * @class Header
 * @exports Header
 * @extends Component
 */
export default class Header extends Component {
  /**
   * Attaches a scroll listener to the window when the component mounts.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    $(window).scroll(() => this.handle_window_scroll())
  }

  /**
   * Component cleanup.
   */
  componentWillUnmount() {
    // Remove scroll window listener
    $(window).off('scroll')
  }

  /**
   * Renders the header.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLElement} html header element
   */
  render(props, state) {
    return (
      <header class={(`ado-header ${props.class ? props.class : ''}`).trim()}>
        <div className='ada-container'>
          <Link id='logo' href='https://dbknews.com' target='_blank'>
            <img src={logo} alt='DBK Logo' />
          </Link>

          <nav>
            <Link href='#about'>About</Link>
            &nbsp; | &nbsp;
            <Link href='#explore'>
              Explore <Icon name='search' />
            </Link>
          </nav>
        </div>
      </header>
    )
  }

  // Helpers

  /**
   * When the top of the hero is out of the viewport, the header will have the
   * class ui-sticky added to. Otherwise, ui-sticky will be removed.
   *
   * @returns {undefined}
   */
  handle_window_scroll = () => {
    if ($(window).scrollTop() === 0) {
      $('.ado-header').removeClass('ui-sticky')
    } else if ($(window).scrollTop() > ($('.ado-hero').height() - 100)) {
      $('.ado-header').addClass('ui-sticky')
    }
  }
}
