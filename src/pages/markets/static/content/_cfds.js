import React from 'react'
import {
    CrashBoom,
    CrashBoomEU,
    CryptocurrenciesCFDs,
    EnergyCFDs,
    ExoticPairs,
    MajorPairs,
    MetalsCFDs,
    MicroPairs,
    MinorPairsCFDS,
    RangeBreak,
    SmartFX,
    StepIndices,
    VolatilityIndices,
    VolatilityIndicesEU,
    AmericanIndices,
    AmericanStocks,
    AsianIndices,
    EuropeanIndices,
    JumpIndices,
} from '../../instruments/_index'
import {
    CrashBoomDetails,
    CrashBoomDetailsEU,
    RangeBreakIndicesDetails,
    SmartFXDetails,
    StepIndicesDetails,
    VolatilityIndicesDetails,
    VolatilityIndicesDetailsEU,
    AmericanIndicesDetails,
    AsianIndicesDetails,
    EuropeanIndicesDetails,
    JumpIndicesDetails,
} from './_details'
import { Localize } from 'components/localization'

export const commodities_cfds = {
    markets_list: {
        col: 4,
    },
    content: [
        {
            title: <Localize translate_text="Metals" />,
            component: <MetalsCFDs />,
        },
        {
            title: <Localize translate_text="Energy" />,
            component: <EnergyCFDs />,
        },
    ],
}

export const forex_cfds = {
    markets_list: {
        col: 4,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: <Localize translate_text="Major pairs" />,
            component: <MajorPairs />,
        },
        {
            title: <Localize translate_text="Minor pairs" />,
            component: <MinorPairsCFDS />,
        },
        {
            title: <Localize translate_text="Exotic pairs" />,
            component: <ExoticPairs />,
        },
        {
            title: <Localize translate_text="Micro pairs" />,
            component: <MicroPairs />,
        },
        {
            title: <Localize translate_text="SmartFX" />,
            component: <SmartFX />,
            details: SmartFXDetails,
        },
    ],
}

export const forex_cfds_eu_uk = {
    markets_list: {
        col: 4,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: <Localize translate_text="Major pairs" />,
            component: <MajorPairs />,
        },
        {
            title: <Localize translate_text="Minor pairs" />,
            component: <MinorPairsCFDS />,
        },
    ],
}

export const synthetic_cfds = {
    has_global_accordion: true,
    content: [
        {
            title: <Localize translate_text="Volatility indices" />,
            component: <VolatilityIndices />,
            details: VolatilityIndicesDetails,
        },
        {
            title: <Localize translate_text="Crash/Boom" />,
            mobile_title: (
                <Localize translate_text="Crash/<0></0>Boom" components={[<br key={0} />]} />
            ),
            component: <CrashBoom />,
            details: CrashBoomDetails,
        },
        {
            title: <Localize translate_text="Jump indices" />,
            component: <JumpIndices />,
            details: JumpIndicesDetails,
        },
        {
            title: <Localize translate_text="Step indices" />,
            component: <StepIndices />,
            details: StepIndicesDetails,
        },
        {
            title: <Localize translate_text="Range break indices" />,
            component: <RangeBreak />,
            details: RangeBreakIndicesDetails,
        },
    ],
}

export const synthetic_cfds_eu = {
    has_global_accordion: true,
    template: 2,
    content: [
        {
            title: <Localize translate_text="Volatility indices" />,
            component: <VolatilityIndicesEU />,
            details: VolatilityIndicesDetailsEU,
        },
        {
            title: <Localize translate_text="Crash/Boom" />,
            mobile_title: (
                <Localize translate_text="Crash/<0></0>Boom" components={[<br key={0} />]} />
            ),
            component: <CrashBoomEU />,
            details: CrashBoomDetailsEU,
        },
    ],
}

export const stock_cfds = {
    template: 2,
    content: [
        {
            title: (
                <Localize translate_text="American<0></0>indices" components={[<br key={0} />]} />
            ),
            component: <AmericanIndices />,
            details: AmericanIndicesDetails,
            tablet_col: 2,
            mobile_col: 2,
            padding: '32px 16px',
            flex: true,
            gap: '16px',
        },
        {
            title: <Localize translate_text="Asian<0></0>indices" components={[<br key={0} />]} />,
            component: <AsianIndices />,
            details: AsianIndicesDetails,
            tablet_col: 2,
            mobile_col: 2,
            padding: '32px 16px',
            flex: true,
            gap: '16px',
        },
        {
            title: (
                <Localize translate_text="European<0></0>indices" components={[<br key={0} />]} />
            ),
            component: <EuropeanIndices />,
            details: EuropeanIndicesDetails,
            col: 4,
            tablet_col: 2,
            mobile_col: 2,
            padding: '32px 16px',
            gap: '16px',
        },
        {
            title: <Localize translate_text="Stocks" />,
            component: <AmericanStocks />,
            col: 3,
            tablet_col: 2,
            mobile_col: 2,
            padding: '40px 32px',
            gap: '32px',
            gap_mobile: '28px 20px',
            mobile_template: true,
        },
    ],
}

export const crypto_cfds = {
    markets_list: {
        col: 4,
        tablet_col: 3,
        mobile_col: 1,
    },
    content: [
        {
            title: <Localize translate_text="Crypto pairs" />,
            component: <CryptocurrenciesCFDs />,
        },
    ],
}
