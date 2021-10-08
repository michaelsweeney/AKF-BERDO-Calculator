import { conn } from "../store/connect";

const CompiledResults = (props) => {
  const { annual_emissions, emissions_thresholds } = props.building;

  return (
    <div>
      {Object.values(emissions_thresholds.normalized).map((e, i) => {
        return <div key={i}>{e}</div>;
      })}

      {annual_emissions.map((e, i) => {
        return (
          <div key={i}>
            {e.year}: {Object.values(e.normalized)}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default conn(mapStateToProps)(CompiledResults);
