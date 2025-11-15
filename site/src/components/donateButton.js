import * as React from "react"
import PropTypes from "prop-types"

const DonateButton = () => {

  return (
    <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="XQ22KGRTEGAF8" />
                <input type="image"
                src="https://www.paypal.com/en_US/i/btn/btn_donate_SM.gif" border="0"
                name="submit" title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button" />
                <img alt="" border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
  )
}

DonateButton.propTypes = {
  siteTitle: PropTypes.string,
}

DonateButton.defaultProps = {
  siteTitle: ``,
}

export default DonateButton
