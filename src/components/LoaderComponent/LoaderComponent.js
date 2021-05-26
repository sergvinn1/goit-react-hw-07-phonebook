import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './LoaderComponent.module.css';

function LoaderComponent() {
  return (
    <div className={s.overlay}>
      <Loader
              type="Circles"
              color="#770007"
              height={50}
              width={100}
              timeout={2000} 
            />
    </div>
  );
}

export default LoaderComponent;
