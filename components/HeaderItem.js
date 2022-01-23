function HeaderItem({ title, Icon, Function }) {
  return (
    <div onClick={Function}>
      <div
        className="flex
         flex-col items-center cursor-pointer
         w-12 sm:w-20
       hover:text-white group"
      >
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p
          className="opacity-0 tracking-widest
         group-hover:opacity-100 whitespace-nowrap "
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default HeaderItem;
