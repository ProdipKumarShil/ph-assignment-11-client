import dis1 from '../../../assets/discount/dis1.jpg'
import dis2 from '../../../assets/discount/dis2.jpg'
import dis3 from '../../../assets/discount/dis3.jpg'

const ToyDiscountBanner = () => {
  return (
    <div className='grid grid-cols-1 my-2 gap-4 px-2  md:grid-cols-3 mx-auto max-w-screen-xl'>
      <div className="relative cursor-pointer">
        <img className='' src={dis1} alt="" />
        <div className="w-full h-full bg-black opacity-0 absolute inset-0 hover:opacity-50"></div>
      </div>
      <div className="relative cursor-pointer">
        <img className='' src={dis2} alt="" />
        <div className="w-full h-full bg-black opacity-0 absolute inset-0 hover:opacity-50"></div>
      </div>
      <div className="relative cursor-pointer">
        <img className='' src={dis3} alt="" />
        <div className="w-full h-full bg-black opacity-0 absolute inset-0 hover:opacity-50"></div>
      </div>
    </div>
  );
};

export default ToyDiscountBanner;