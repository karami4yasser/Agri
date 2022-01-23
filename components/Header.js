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

//import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  const [{ basket, user }, dispatch] = useStateValues();
  const router = useRouter();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: "id",

        title: "title",
        image: "image",
        price: "price",
        rating: "rating",
      },
    });
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
            alert("test");
          }}
        />
        <HeaderItem title="SEARCH" Icon={SearchCircleIcon} />

        <HeaderItem title={user ? user.email : "Sign In"} Icon={UserIcon} />
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
