
import { Puff } from "react-loader-spinner";

const PuffSpinners = () => {
  return (
    <div className="flex justify-center items-center ">
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#008366"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default PuffSpinners;
