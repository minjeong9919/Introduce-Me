import { getProjectImages } from "./../utils/getProfileImages";

export const projectContents = [
  {
    id: 1,
    name: "학교 소통 애플리케이션 TUTU",
    images: getProjectImages(1),
    introduce:
      "TUTU 는 학교 내의 학생들과의 소통을 위한 애플리케이션입니다.  학생들은 TUTU를 이용해 다양한 사람들과 소통하고, 정보를 공유할 수 있습니다. ",
  },
  {
    id: 2,
    name: "생명 지원 로봇(ROVA)",
    images: getProjectImages(1),
    introduce:
      "생명 지원 로봇(ROVA)는 넓은 야외 공연장에서 응급 상황 발생 시 애플리케이션을 이용한 호출 시 상황에 맞는 의약품을 조달합니다.",
  },
  {
    id: 3,
    name: "Rolling Paper",
    images: getProjectImages(1),
    introduce: `이곳은 추억의 롤링 페이퍼를 만들고 즐길 수 있는 특별한 웹사이트입니다. 
    여기서는 원하는 유저에게 특별한 메시지와 함께 멋진 배경 이미지를 선택하여 자신만의 롤링 페이퍼를 작성할 수 있습니다. 
    뿐만 아니라, 선택한 유저에게 이모티콘을 전송하여 따뜻한 감정을 공유할 수도 있습니다.
    더불어, 이모지를 활용하여 작성된 롤링 페이퍼들은 인기 순으로 손쉽게 확인할 수 있습니다. 
    다양한 이모티콘과 멋진 배경 이미지들이 모여 만들어지는 이 공간에서, 감성과 재미를 함께 누릴 수 있습니다. 
    `,
  },
];
