import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineUnlock,
  AiOutlineUnorderedList,
} from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { BsCartPlus } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { SlArrowLeft } from 'react-icons/sl';

const items = [
  {
    href: '/admin/dashboard',
    name: 'Dashboard',
    icon: <AiOutlineHome />,
  },
  {
    href: '/admin/allorders',
    name: 'All Orders',
    icon: <AiOutlineUnorderedList />,
  },
  {
    href: '/admin/allusers',
    name: 'All Users',
    icon: <HiOutlineUserGroup />,
  },
  {
    href: '/admin/addproduct',
    name: 'Add Product',
    icon: <BsCartPlus />,
  },
  {
    href: '/admin/addcategory',
    name: 'Add Category',
    icon: <BsCartPlus />,
  },
  {
    href: '/admin/allproducts',
    name: 'All Products',
    icon: <MdProductionQuantityLimits />,
  },
  {
    href: '/admin/allcategory',
    name: 'All Category',
    icon: <BiCategory />,
  },
  {
    href: '/admin/updateprofile',
    name: 'Update Profile',
    icon: <AiOutlineSetting />,
  },
  {
    href: '/admin/backtohome',
    name: 'Back Home',
    icon: <SlArrowLeft />,
  },
  {
    href: '/admin/logout',
    name: 'Logout',
    icon: <AiOutlineUnlock />,
  },
];
export default items;
