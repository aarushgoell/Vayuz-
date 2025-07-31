import logo from "../Assets/Vayuz_logo.png";

export function Sidebar() {
  return (
    <div
      className="w-[25%] h-screen flex flex-col justify-between"
      style={{
        backgroundColor: "#131313",
      }}
    >
      <div>
        <div className="mt-[23px] ml-[30px]  w-[130px] h-[30px] ">
          <img src={logo} />
        </div>

        <div
          style={{
            width: "159px",
            height: "50px",
            borderRadius: "56px",
            padding: "1.5px",
            background:
              "conic-gradient(from 90deg at 50% 50%, #07A7CD 0deg, #FC0600 62.37deg, #09D809 173.97deg, #FF6600 255.65deg, #F60163 290.5deg, #07A7CD 360deg)",
          }}
        >
          <button className="w-full h-full bg-[#131313] text-white rounded-[56px] px-[30px] py-[12px] flex items-center justify-center gap-[10px] opacity-100 text-[16px] font-bold">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}
