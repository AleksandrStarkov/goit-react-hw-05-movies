import { ThreeCircles } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ThreeCircles
      height="250"
      width="250"
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass="spiner"
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=" rgba(255,248,1,0.6853335084033614) "
      innerCircleColor="red"
      middleCircleColor="rgb(132, 0, 255)"
    />
  );
}
