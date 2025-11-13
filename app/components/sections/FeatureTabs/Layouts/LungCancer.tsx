import { CardUI } from "@types-ui";
import Image from "next/image";

const secondBox = {
  heading: (
    <>
      Cough reduction: <br /> 62% improvemen
    </>
  ),
  svgHeading: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5088 0.303711C13.0605 0.303711 14.5165 0.597982 15.8789 1.18555C17.2462 1.77473 18.4327 2.57313 19.4414 3.58008C20.4501 4.58708 21.2498 5.7733 21.8398 7.14062C22.4273 8.50209 22.7217 9.95712 22.7217 11.5088C22.7217 13.0606 22.4276 14.5165 21.8408 15.8789C21.2516 17.2469 20.4529 18.4336 19.4443 19.4414C18.4355 20.4495 17.2497 21.2489 15.8848 21.8398C14.5261 22.4281 13.0709 22.7225 11.5166 22.7217C9.96481 22.7217 8.50893 22.4276 7.14648 21.8408C5.77936 21.2508 4.5926 20.4521 3.58398 19.4443C2.57521 18.4364 1.77558 17.2504 1.18555 15.8848C0.598133 14.5251 0.303711 13.07 0.303711 11.5166C0.303716 9.96328 0.598184 8.50792 1.18555 7.14746V7.14648C1.77478 5.77917 2.57294 4.59267 3.5791 3.58398C4.58519 2.57541 5.7715 1.77558 7.13965 1.18555C8.50189 0.598132 9.95727 0.303733 11.5088 0.303711ZM12.1797 7.37207C11.8246 7.01712 11.2496 7.01611 10.8936 7.37012L7.52344 10.7207C7.1659 11.0764 7.16557 11.6553 7.52246 12.0117L7.54297 12.0322C7.89885 12.3873 8.47554 12.3868 8.83105 12.0312L10.0508 10.8115C10.242 10.6203 10.5693 10.7557 10.5693 11.0264V15.2354C10.5695 15.738 10.9771 16.1464 11.4805 16.1465H11.5703C12.0735 16.1465 12.4814 15.7385 12.4814 15.2354V11.0254C12.4818 10.7551 12.8088 10.6203 13 10.8115L14.2197 12.0312C14.5755 12.387 15.153 12.387 15.5088 12.0312L15.5293 12.0098C15.8851 11.654 15.8851 11.0775 15.5293 10.7217L12.1797 7.37207Z"
        fill="#5896EB"
        stroke="white"
        strokeWidth="0.607369"
      />
    </svg>
  ),
  tabs: [
    {
      week: 4,
      date: "December 24",
      status: "Not a problem",
      svg: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14.8571" cy="14.8571" r="14.8571" fill="#95D9DB" />
        </svg>
      ),
    },
    {
      week: 3,
      date: "December 17",
      status: "Minimal",
      svg: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5823 0.851384C14.9308 -0.438312 17.8138 -0.250845 19.9755 1.33213C20.8016 1.93701 21.7519 2.35036 22.7576 2.54218L23.233 2.63285C26.147 3.18865 28.5096 5.3197 29.362 8.16112C29.579 8.88441 29.8979 9.57313 30.309 10.2065L31.1045 11.432C32.7602 13.9826 32.4783 17.3305 30.4195 19.5683L29.8578 20.1788C29.0879 21.0157 28.6606 22.1113 28.6606 23.2484C28.6606 25.6547 26.7808 27.6417 24.3783 27.7752L23.9108 27.8012C22.9813 27.8528 22.0844 28.1614 21.32 28.6926L20.0276 29.5907C17.3896 31.4239 13.9595 31.6648 11.0912 30.2184L10.3785 29.859C9.6247 29.4789 8.78283 29.2809 7.93862 29.2809C4.82153 29.2809 2.32208 26.6267 2.56221 23.5189C2.65292 22.345 2.35383 21.174 1.71132 20.1873L0.795236 18.7806C-0.373471 16.9859 -0.243962 14.6407 1.11525 12.9857C1.76666 12.1925 2.15308 11.215 2.22019 10.1908L2.31679 8.71644C2.53804 5.3396 5.20317 2.63634 8.57653 2.36714C9.5372 2.29048 10.4707 2.01098 11.3154 1.5471L12.5823 0.851384Z"
            fill="#AFE5C4"
          />
        </svg>
      ),
    },
    {
      week: 2,
      date: " December 10",
      status: "Severe",
      svg: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 32 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4997 1.1979C17.178 -0.350402 19.3521 -0.411204 20.1158 1.09676L21.8711 4.56234C22.3221 5.4527 23.3604 5.87432 24.3044 5.55039L29.2514 3.85292C31.0016 3.25234 32.5587 5.14629 31.631 6.74735L28.3359 12.434C27.7431 13.457 28.1624 14.7682 29.2388 15.2575L30.6665 15.9064C31.9959 16.5107 32.2505 18.2899 31.1438 19.2427L30.1966 20.0583C29.4694 20.6845 29.2894 21.739 29.7679 22.5709L31.1288 24.9376C32.0141 26.477 30.6034 28.3207 28.8861 27.8687L24.4711 26.7069C23.4513 26.4385 22.3983 27.0082 22.0648 28.0086L20.5088 32.6766C19.9184 34.4477 17.4384 34.5158 16.7517 32.7798L15.5703 29.7936C15.1011 28.6076 13.6566 28.1579 12.5971 28.868L9.85233 30.7075C8.17192 31.8338 6.07296 30.0387 6.92484 28.2039L7.74518 26.437C8.08383 25.7076 7.73211 24.8441 6.98021 24.5589L6.7551 24.4735C5.94394 24.1659 5.70229 23.1348 6.29225 22.4987C6.88966 21.8547 6.63316 20.8095 5.80545 20.5152L1.32947 18.9234C-0.388952 18.3123 -0.45964 15.9083 1.21991 15.1973L5.79728 13.2595C6.78104 12.8431 7.26384 11.727 6.89376 10.7249L6.51371 9.6958C5.86576 7.94123 7.76604 6.33664 9.38725 7.26939L11.0095 8.20274C12.0417 8.7966 13.3609 8.36249 13.8388 7.27173L16.4997 1.1979Z"
            fill="#F4AC83"
          />
        </svg>
      ),
    },
    {
      week: 1,
      date: " December 3",
      status: "Very severe",
      svg: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 46 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2 0L26.5143 17.3481L43.2 6.51429L32.6857 20.6857L45.3714 25.2571L29.2571 27.8857L40.5714 41.9429L26.5143 32.8L23.6571 47.7714L19.4286 33.8286L9.94286 40.9706L15.5429 27.8857L0 29.8286L11.8857 24.4571L7.88571 21.7143L15.5429 20.6857L9.94286 5.14286L20.4447 17.3481L23.2 0Z"
            fill="#E76E6C"
          />
        </svg>
      ),
    },
  ],
};

export function LungCancer({ card }: { card: CardUI }) {
  return (
    <div
      className="grid grid-cols-2 grid-rows-2 w-full gap-4 relative"
      style={{ gridTemplateColumns: "minmax(0, 345px) minmax(0, 345px)" }}
    >
      {/* FIRST BOX */}
      <div className="relative h-[258px] bg-white rounded-[14px] border border-gray-200 overflow-hidden">
        <p className="body-medium  font-bold! mx-auto pt-4">
          Cough Worsening During Radiotherapy
        </p>
        <svg
          className="absolute bottom-0 left-0 right-0"
          width="345"
          height="258"
          viewBox="0 0 345 258"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_932_12927)">
            <path
              d="M-71 236.5L-131 277.5V314.5H385V186.5H366L352.5 101L313.5 129L261.5 124L219.5 178.5L199 142.5L161.5 101L112.5 170.5L82 211.5L54.5 193.5L23 200.5L10 236.5H-71Z"
              fill="#DBE9FD"
              stroke="#5896EB"
              strokeWidth="3"
              strokeLinecap="square"
            />
            <circle cx="162" cy="104" r="10" fill="#5896EB" />
            <circle cx="162" cy="104" r="5.55556" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_932_12927">
              <rect width="345" height="258" rx="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* SECOND BOX */}
      <div className="absolute right-0 w-[49%] bg-white flex  flex-col justify-between rounded-[14px] p-3 border border-primary-400  overflow-hidden">
        <p className="body-medium flex items-center justify-center gap-2.5 text-left font-bold! pb-4 pt-1">
          {secondBox.heading} {secondBox.svgHeading}
        </p>
        <div className="flex mx-auto flex-col gap-2">
          {secondBox.tabs.map((el, i) => (
            <div
              className="rounded-r-[20px] py-3 pl-3 pr-2 flex items-center w-full max-w-[250px] gap-2 bg-white shadow-classic overflow-hidden border-l-4 border-[#3AA19A]"
              key={i}
            >
              <div className="flex flex-col items-start justify-between w-full">
                <div className="flex gap-2">
                  <span className="text-[12px] font-bold uppercase text-[#3AA19A] h-[18px]">
                    week {el.week}
                  </span>
                  <span className="text-[12px] h-[18px]">{el.date}</span>
                </div>
                <span className="text-[16px] text-left font-bold text-black h-5">
                  {el.status}
                </span>
              </div>
              {el.svg}
            </div>
          ))}
        </div>
      </div>

      {/* THIRD BOX */}
      <div
        className="relative w-full h-[258px] rounded-[14px] overflow-hidden"
        style={{
          gridColumn: "1",
          gridRow: "2",
          justifySelf: "end",
          alignSelf: "end",
        }}
      >
        <Image
          src={card.image.url}
          alt={card?.image?.alt || card.heading || "seo-image"}
          fill
          className="object-cover"
        />
      </div>

      {/* FOURTH BOX */}
      <div
        className="relative   w-full h-[145px] rounded-[14px] bg-white border border-gray-200"
        style={{
          gridColumn: "2",
          gridRow: "2",
          justifySelf: "end",
          alignSelf: "end",
        }}
      >
        <div className="relativew-full h-[145px] overflow-hidden">
          <Image
            src="/feature-tabs/ring.png"
            alt={"vector"}
            fill
            className="object-cover"
          />
        </div>
        <Image
          src="/feature-tabs/watch.png"
          alt={card?.image?.alt || card.heading || "seo-image"}
          width={241}
          height={258}
          className="absolute -translate-x-1/3 left-1/2 -translate-y-[200px] "
        />
      </div>
    </div>
  );
}
