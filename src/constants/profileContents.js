import me from "../assets/images/me.png";
import { ReactComponent as Education } from "../assets/icon/education.svg";

const educationContents = [
  {
    period: "2023.12.28~",
    education: "코드잇 스프린트 부트캠프 수료",
  },
  {
    period: "2020.03 ~ (현재 휴학 중)",
    education: "한국공학대학교 전자공학과",
  },
  {
    period: "2017.03 ~ 2020.02",
    education: "서해고등학교",
  },
];

export const profileContents = [
  {
    id: 1,
    title: "#ABOUT ME",
    content: (
      <div className="flex flex-row gap-8 p-1">
        <img src={me} className="w-1/3" />
        <div className="text-xl flex flex-col gap-1">
          <p>이름: 김민정</p>
          <p>생년월일: 2001.07.30</p>
          <p>주소: 경기도 시흥</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "#INTRODUCE",
    content: (
      <div>
        <p>안녕하세요.</p>
        <p className="mb-4">저는 코딩을 좋아하는 김민정입니다! </p>
        <p>
          많은 경험을 하고, 이를 프론트엔드 개발에 잘 녹여낼 수 있는 개발자가
          되고 싶습니다.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "#FAVORITE",
    content: (
      <div>
        <p className="mb-4">
          저는 새로운 도전을 통해 성과를 이끌어내는 과정을 좋아합니다.
        </p>
        <p>
          실패에 대해서 두려워하지 않습니다. 조금이더라도 다양한 것을 경험해보는
          것을 좋아합니다.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "#EDUCATION",
    content: educationContents.map((education) => (
      <div className="flex flex-col gap-8 p-2" key={education.education}>
        <div className="flex flex-row items-center gap-8">
          <Education />
          <p>
            <span className="text-gray-500 text-xl">{education.period}</span>
            <br />
            {education.education}
          </p>
        </div>
      </div>
    )),
  },
];
