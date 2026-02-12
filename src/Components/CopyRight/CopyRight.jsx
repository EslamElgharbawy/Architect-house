export default function CopyRight() {
  return (
    <>
      <div className="w-full text-center bg-[#1e1e1e] py-7">
        <div className="text-[#777] leading-7 mt-1">
          Copyright 2017 All rights reserved.
        </div>
        <div className="flex space-x-6 sm:justify-center mt-4 pt-2  gap-2">
          <span className="copy_right_icon hover:text-white facebook hover:bg-[#3b5998]">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </span>
          <span className="copy_right_icon hover:text-white google hover:bg-[#dd4b39]">
            <a href="#">
              <i className="fa-brands fa-google"></i>
            </a>
          </span>
          <span className="copy_right_icon hover:text-white tumblr hover:bg-[#32506d]">
            <a href="#">
              <i className="fa-brands fa-tumblr"></i>
            </a>
          </span>
          <span className="copy_right_icon hover:text-white twitter hover:bg-[#00aced]">
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
