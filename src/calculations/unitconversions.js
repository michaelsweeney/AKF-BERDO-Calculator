// native to mmbtu
const elec_kwh_to_mmbtu = (kwh) => kwh * 0.003412
const gas_therms_to_mmbtu = (therms) => therms * 0.10
const fuel_one_gallons_to_mmbtu = (gal) => gal * 0.141
const fuel_two_gallons_to_mmbtu = (gal) => gal * 0.1467
const fuel_four_gallons_to_mmbtu = (gal) => gal * 0.51
const diesel_gallons_to_mmbtu = (gal) => gal * 0.137381



// mmbtu to native
const elec_mmbtu_to_kwh = (mmbtu) => mmbtu / 0.003412
const gas_mmbtu_to_therms = (mmbtu) => mmbtu / 0.10
const fuel_one_mmbtu_to_gallons = (mmbtu) => mmbtu / 0.141
const fuel_two_mmbtu_to_gallons = (mmbtu) => mmbtu / 0.1467
const fuel_four_mmbtu_to_gallons = (mmbtu) => mmbtu / 0.51
const diesel_mmbtu_to_gallons = (mmbtu) => mmbtu / 0.137381


const convertNativeToMMBtu = (val, fuel) => {

    let functionobj = {
        grid_elec: elec_kwh_to_mmbtu,
        gas: gas_therms_to_mmbtu,
        fuel_1: fuel_one_gallons_to_mmbtu,
        fuel_2: fuel_two_gallons_to_mmbtu,
        fuel_4: fuel_four_gallons_to_mmbtu,
        diesel: diesel_gallons_to_mmbtu,

        // units already in mmbtu: placeholder function
        district_steam: (v) => v,
        district_hot_water: (v) => v,
        elec_driven_chiller: (v) => v,
        absorption_chiller_gas: (v) => v,
        engine_driven_chiller_gas: (v) => v,
        district_chilled_water: (v) => v,
    }
    return functionobj[fuel](val)
}

const convertMMBtuToNative = (val, fuel) => {
    return {
        grid_elec: elec_mmbtu_to_kwh,
        gas: gas_mmbtu_to_therms,
        fuel_1: fuel_one_mmbtu_to_gallons,
        fuel_2: fuel_two_mmbtu_to_gallons,
        fuel_4: fuel_four_mmbtu_to_gallons,
        diesel: diesel_mmbtu_to_gallons,

        // units already in mmbtu: placeholder function
        district_steam: (v) => v,
        district_hot_water: (v) => v,
        district_chilled_water: (v) => v,
        elec_driven_chiller: (v) => v,
        absorption_chiller_gas: (v) => v,
        engine_driven_chiller_gas: (v) => v,
    }[fuel](val)
}


export { convertNativeToMMBtu, convertMMBtuToNative }




