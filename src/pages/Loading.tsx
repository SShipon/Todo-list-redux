import { RotatingTriangles } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="flex justify-center items-center ">
            <RotatingTriangles
                visible={true}
                height="80"
                width="80"
                colors={["#4fa94d", "#4fa94d", "#4fa94d"]}
                ariaLabel="rotating-triangles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loading;
