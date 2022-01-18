import React, { useState } from "react";
import _ from "lodash";
import Popup from "./Popup";

const data = [
  {
    maMonAn: "MA01",
    tenMonAn: "Cơm chiên dương châu",
    gia: 200,
    hinhAnh: "http://casestudy.cyberlearn.vn/img/MA01.jpeg",
    maDanhMuc: "MC",
    tenDanhMuc: "Món chiên",
  },
  {
    maMonAn: "MA02",
    tenMonAn: "Cơm chiên cá mặn",
    gia: 300,
    hinhAnh: "http://casestudy.cyberlearn.vn/img/MA02.jpeg",
    maDanhMuc: "MC",
    tenDanhMuc: "Món chiên",
  },
  {
    maMonAn: "MA03",
    tenMonAn: "Gà nướng muối ớt",
    gia: 500,
    hinhAnh: "http://casestudy.cyberlearn.vn/img/MA03.jpeg",
    maDanhMuc: "MN",
    tenDanhMuc: "Món nướng",
  },
  {
    maMonAn: "MA04",
    tenMonAn: "Gà nướng muối tiêu chanh",
    gia: 600,
    hinhAnh: "http://casestudy.cyberlearn.vn/img/MA04.jpeg",
    maDanhMuc: "MN",
    tenDanhMuc: "Món nướng",
  },
  {
    maMonAn: "MA05",
    tenMonAn: "Trà đào cam sả",
    gia: 50,
    hinhAnh: "http://casestudy.cyberlearn.vn/img/MA05.jpeg",
    maDanhMuc: "GK",
    tenDanhMuc: "Giải khát",
  },
  {
    maMonAn: "MA06",
    tenMonAn: "Bia heniken",
    gia: 50,
    hinhAnh: "http://casestudy.cyberlearn.vn/img/MA06.jpeg",
    maDanhMuc: "GK",
    tenDanhMuc: "Giải khát",
  },
];

export default function BaiTapTongHop() {
  const mangDanhMuc = _.uniqBy(data, "maDanhMuc");

  const [maDanhMuc, setMaDanhMuc] = useState(mangDanhMuc[0].maDanhMuc);

  const [openModal, setOpenModal] = useState(false);

  const [item, setItem] = useState({});

  console.log(mangDanhMuc);

  return (
    <div>
      <Popup openModal={openModal} setOpenModal={setOpenModal} item={item} />

      <div className="grid grid-cols-6">
        <div className="h-full p-3 space-y-2 col-span-1 bg-coolGray-50 text-coolGray-800">
          <div className="flex items-center p-2 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt
              className="w-12 h-12 rounded-full bg-coolGray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
              <span className="flex items-center space-x-1">
                <a
                  href="#"
                  className="text-xs hover:underline text-coolGray-600"
                >
                  View profile
                </a>
              </span>
            </div>
          </div>
          <div className="divide-y divide-coolGray-300">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {mangDanhMuc.map((danhMuc, index) => {
                const classNameActive = [
                  "flex",
                  "items-center",
                  "p-2",
                  "space-x-3",
                  "rounded-md",
                  maDanhMuc === danhMuc.maDanhMuc ? "bg-black text-white" : "",
                ];
                return (
                  <li
                    className="bg-coolGray-100 text-coolGray-900"
                    key={index}
                    onClick={() => {
                      setMaDanhMuc(danhMuc.maDanhMuc);
                    }}
                  >
                    <a href="#" className={classNameActive.join(" ")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current text-coolGray-600"
                      >
                        <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z" />
                      </svg>
                      <span>{danhMuc.tenDanhMuc}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="pt-4 pb-2 space-y-1 text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-coolGray-600"
                  >
                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z" />
                    <rect width={32} height={64} x={256} y={232} />
                  </svg>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-5">
          <h1 className="text-purple-600 text-center text-8xl mt-5">MENU</h1>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {_.filter(data, (item) => item.maDanhMuc === maDanhMuc).map(
                  (item, index) => {
                    return (
                      <div className="p-4 lg:w-1/3" key={index}>
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            {item.tenMonAn}
                          </h2>
                          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                            {item.tenMonAn}
                          </h1>
                          <div className="leading-relaxed mb-3">
                            <img src={item.hinhAnh} alt={item.tenMonAn} />
                          </div>
                          <a
                            className="text-indigo-500 inline-flex items-center cursor-pointer"
                            onClick={() => {
                              setOpenModal(true);
                              setItem(item);
                            }}
                          >
                            Chi tiet
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                          </a>
                          <div className="mt-2 leading-none flex justify-end absolute bottom-0 left-0 w-full py-4">
                            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-gray-200 text-2xl">
                              Gia : {item.gia}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
