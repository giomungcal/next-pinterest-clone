function Footer() {
  return (
    <>
      <hr />
      <div className="w-full my-8 flex flex-col justify-center items-center">
        <span className="text-slate-400 text-sm">
          Pinterest Clone by ☆ Gio Mungcal ★
        </span>
        <div className="flex justify-center space-x-2 mt-1">
          <a
            className="text-xs text-slate-400 hover:text-slate-700"
            href="https://github.com/giomungcal/pinterest-clone-yogi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <span className="text-xs text-slate-400">·</span>
          <a
            className="text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
            // href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Site
          </a>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Footer;
