// Packages
import { h, Component } from 'preact'

// Components
import { Heading, Paragraph } from '../atoms'
import { FooterNavigation } from '../molecules'

/**
 * @file Preact component representing the footer.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing the footer.
 *
 * @class Footer
 * @exports Footer
 * @extends preact.Component
 */
export default class Footer extends Component {
  /**
   * Renders the footer.
   *
   * @param {object} props - Footer properties
   * @param {object} state - Footer state
   * @returns {HTMLElement} html footer element
   */
  render(props, state) {
    let style = (`ado-footer ${props.class ? props.class : ''}`).trim()

    return (
      <footer class={style} id='about'>
        <div className='ada-container'>
          <div className='footer-col'>
            <Heading heading='Salary Guide' class='ui-text-special' />
            <Heading heading='Behind the Spreadsheet' class='ui-text-special' />
            <FooterNavigation />
          </div>
          <Paragraph>
            At The Diamondback, we’ve pledged to hold the University of Maryland accountable in our coverage. Our annual salary guide adheres to that mission, laying out each university employee’s yearly pay in an easily digestible format. Here, you can find charts searchable by salary, department, title and other information.
            <br /><br />
            Each year, the university provides this public data to The Diamondback in a basic Excel spreadsheet. We’ve rendered its contents on the online without tampering; if so inclined, readers could request the same public data from the university to receive all of the information presented in this guide.
            <br /><br />
            The Diamondback chooses to compile this data year after year as a service to our readers — giving students, alumni, employees and others in the university community immediate, comprehensive access. As with all of our news coverage, the salary guide maintains The Diamondback’s commitment to objectivity. We won’t tell you what conclusions to draw from these numbers, but it’s our hope that they’ll give you every bit of information you need to reflect on your own. As always, your takeaways from this information are your own — just as they should be.
          </Paragraph>
        </div>
      </footer>
    )
  }
}
