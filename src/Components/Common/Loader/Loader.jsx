import "./Loader.scss";
import Spline from "@splinetool/react-spline";
export default function Loader({ isLoading, additionalClass }) {
  return (
    <div
      className={`loader ${isLoading ? "active" : "hidden"} ${additionalClass}`}
    >
      <div>
        <Spline scene="https://prod.spline.design/0if7euAaoUeb4eb8/scene.splinecode" />
      </div>
      <div className="loader__spin"></div>
    </div>
  );
}
