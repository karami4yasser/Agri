// no need for that import React from 'react';

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchCircleIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { useStateValues } from "./StateProvider";
import { useRouter } from "next/router";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";
//import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { signOut } from "firebase/auth";

function Header() {
  const [{ basket, user }, dispatch] = useStateValues();
  const router = useRouter();
  const history = useHistory();
  const handleAuth = () => {
    if (user) {
      signOut(auth);
    } else {
      router.push("/login");
    }
  };

  return (
    <header
      className="flex flex-col sm:flex-row m-5
     justify-between items-center h-auto  "
    >
      <div
        className="flex
       flex-grow justify-evenly max-w-2xl"
      >
        <HeaderItem
          title="HOME"
          Icon={HomeIcon}
          Function={() => {
            router.push("/");
          }}
        />
        <HeaderItem title="SEARCH" Icon={SearchCircleIcon} />

        <HeaderItem
          title={user ? user.email : "Sign In"}
          Icon={UserIcon}
          Function={handleAuth}
        />
        <HeaderItem
          title={basket?.length}
          Icon={ShoppingCartIcon}
          Function={() => {
            router.push("/checkout");
          }}
        />
      </div>

      <Image
        className="object-contain"
        src="https://i.ibb.co/FzBsVJh/AGRI-1.png"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
