import { RotatingTriangles } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="flex justify-center items-center ">
            <RotatingTriangles
                visible={true}
                height="80"
                width="80"
                colors={["#D60662", "#4B4F90", "#4B9083"]}
                ariaLabel="rotating-triangles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loading;
