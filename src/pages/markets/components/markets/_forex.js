import React from 'react'
import PropTypes from 'prop-types'
import Loadable from '@loadable/component'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades.js'
import { forex_content, forex_content_eu } from '../../static/content/_forex'
import { forex_cfds, forex_cfds_eu_uk } from '../../static/content/_cfds'
import { forex_multiplier, forex_multiplier_eu } from '../../static/content/_multipliers'
import { forex_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import DigitalOptions from '../sub-markets/_digital-options'
import { Localize, localize } from 'components/localization'
import { UKEU, ROW } from 'components/containers'
import { getCountryRule } from 'components/containers/visibility'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets.js'))

const Forex = ({ simple_step_content }) => {
    const { is_row, is_eu_uk } = getCountryRule()
    return (
        <>
            <WhyTrade
                header={<Localize translate_text="Why trade forex on Deriv" />}
                text={
                    <Localize translate_text="Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events." />
                }
            >
                {(is_eu_uk ? forex_content_eu : forex_content).map((content, index) => (
                    <div key={index} text={content.text} icon={<img src={content.src} alt="" />} />
                ))}
            </WhyTrade>
            <AvailableTrades
                CFDs={
                    <>
                        <UKEU>
                            <CFDs market_content={forex_cfds_eu_uk} />
                        </UKEU>
                        <ROW>
                            <CFDs market_content={forex_cfds} />
                        </ROW>
                    </>
                }
                DigitalOptions={
                    is_row && (
                        <DigitalOptions
                            market_name={localize('forex')}
                            options_list={forex_options}
                        />
                    )
                }
                Multipliers={
                    <Multipliers
                        market_content={is_eu_uk ? forex_multiplier_eu : forex_multiplier}
                    />
                }
                name="Forex"
                display_title={<Localize translate_text="Forex trades available on Deriv" />}
            />
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading forex on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="forex" />
        </>
    )
}

Forex.propTypes = {
    simple_step_content: PropTypes.array,
}
export default Forex
