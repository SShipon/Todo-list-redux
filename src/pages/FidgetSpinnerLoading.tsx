
import { FidgetSpinner } from "react-loader-spinner";

const FidgetSpinnerLoading = () => {

    return (
        <div className="flex justify-center items-center h-screen mt-6">
        <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ballColors={["#4fa94d", "#4fa94d", "#4fa94d"]}
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
    );
};

export default FidgetSpinnerLoading;

