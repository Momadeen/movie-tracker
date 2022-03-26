import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const BackButton = ({ href }: { href: string }) => (
  <Link to={href}>
    <div className="flex flex-row gap-4 items-center">
      <IoMdArrowBack fill="white" className="w-5 h-5" />
      <p className="text-white font-kanit">Back</p>
    </div>
  </Link>
);

export default BackButton;
