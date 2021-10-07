
import { conn } from "../store/connect"


const CompiledResults = (props) => {
    const { annual_emissions, emissions_thresholds } = props.building
    console.log(annual_emissions, emissions_thresholds)

    return (<div>hey</div>)
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
};


export default conn(mapStateToProps)(CompiledResults)