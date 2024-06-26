const menu = [
  /* 베이글 */
  {
    id: 1,
    title: "플레인 크림치즈 베이글",
    category: "bagel",
    price: "5,500원",
    image: "./images/menu01.png",
    onlyNaver: false,
    desc: "근본의 근본<br> <span style='font-size: 0.7em;'>플레인 베이글 + 크림치즈</span>",
  },
  {
    id: 2,
    title: "누텔라 카카오 초코베이글",
    category: "bagel",
    price: "5,500원",
    image: "./images/menu02.png",
    onlyNaver: false,
    desc: "믿고 먹는 누텔라<br> <span style='font-size: 0.7em;'>초코베이글 + 크림치즈 + 누텔라 + 카카오가루토핑</span>",
  },
  {
    id: 3,
    title: "카야 그래놀라 어니언베이글",
    category: "bagel",
    price: "5,500원",
    image: "./images/menu03.png",
    onlyNaver: false,
    desc: "싱가폴보다 맛있는 카야<br> <span style='font-size: 0.7em;'>어니언베이글 + 크림치즈 + 카야잼 + 그래놀라</span>",
  },
  {
    id: 4,
    title: "초코 그래놀라 블루베리베이글",
    category: "bagel",
    price: "5,500원",
    image: "./images/menu04.png",
    onlyNaver: false,
    desc: "잊고 싶어도 자꾸 생각나는 초베<br> <span style='font-size: 0.7em;'>블루베리 베이글 + 크림치즈 + 블루베리잼 + 초코그래놀라</span>",
  },
  {
    id: 5,
    title: "딸기 쿠키 크랜베리베이글",
    category: "bagel",
    price: "5,500원",
    image: "./images/menu05.png",
    onlyNaver: false,
    desc: "돼지바의 베이글 버전?!?<br> <span style='font-size: 0.7em;'>크랜베리 베이글 + 크림치즈 + 딸기잼 + 쿠키분태</span>",
  },
  {
    id: 6,
    title: "애플 시나몬 모짜렐라베이글",
    category: "bagel",
    price: "5,500원",
    image: "./images/menu06.png",
    onlyNaver: false,
    desc: "사과가 큼직해서 깜놀<br> <span style='font-size: 0.7em;'>모짜렐라 베이글 + 크림치즈 + 애플시나몬잼 + 시나몬가루</span>",
  },
  /* 샌드위치 */
  {
    id: 7,
    title: "계란 샌드위치",
    category: "sandwich",
    price: "3,500원",
    image: "./images/menu07.jpg",
    onlyNaver: false,
    desc: "달걀과 함께라면 무엇이든 실패없죠<br> <span style='font-size: 0.7em;'>에그스프레드</span>",
  },
  {
    id: 8,
    title: "불고기 샌드위치",
    category: "sandwich",
    price: "5,500원",
    image: "./images/menu08.jpg",
    onlyNaver: false,
    desc: "한국인 취향 저격 짭쪼름한 고기<br> <span style='font-size: 0.7em;'>햄 + 치즈 + 양상추 + 토마토 + 에그스프레드 + 불고기</span>",
  },
  {
    id: 9,
    title: "햄치즈 계란 샌드위치",
    category: "sandwich",
    price: "3,900원",
    image: "./images/menu09.jpg",
    onlyNaver: false,
    desc: "전 인류를 구하는 근본 조합<br> <span style='font-size: 0.7em;'>햄 + 체다치즈 + 에그스프레드</span>",
  },
  {
    id: 10,
    title: "리코타치즈 샌드위치",
    category: "sandwich",
    price: "5,500원",
    image: "./images/menu10.jpg",
    onlyNaver: false,
    desc: "부드럽고 담백 촉촉<br> <span style='font-size: 0.7em;'>햄 + 치즈 + 양상추 + 토마토 + 리코타 치즈</span>",
  },
  {
    id: 11,
    title: "크래미 샌드위치",
    category: "sandwich",
    price: "6,500원",
    image: "./images/menu11.jpg",
    onlyNaver: false,
    desc: "저지방 저칼로리<br> <span style='font-size: 0.7em;'>햄 + 치즈 + 양상추 + 토마토 + 에그스프레드 + 크래미</span>",
  },
  {
    id: 12,
    title: "닭가슴살 샌드위치",
    category: "sandwich",
    price: "6,500원",
    image: "./images/menu12.jpg",
    onlyNaver: false,
    desc: "근손실 무섭닭<br> <span style='font-size: 0.7em;'>햄 + 치즈 + 양상추 + 토마토 + 에그스프레드 + 닭가슴살</span>",
  },
  /* 랩 */
  {
    id: 13,
    title: "불고기 랩",
    category: "wrap",
    price: "6,500원",
    image: "./images/menu13.jpg",
    onlyNaver: false,
    desc: "엄마 손맛 불고기로 든든하게<br> <span style='font-size: 0.7em;'>또띠아랩 + 소스2종 + 샐러드 + 불고기 + 토마토 + 에그스프레드</span>",
  },
  {
    id: 14,
    title: "닭가슴살 랩",
    category: "wrap",
    price: "6,500원",
    image: "./images/menu14.jpg",
    onlyNaver: false,
    desc: "저탄고지 담백 그 잡채<br> <span style='font-size: 0.7em;'>또띠아랩 + 소스2종 + 샐러드 + 닭가슴살 + 토마토 + 에그스프레드</span>",
  },
  {
    id: 15,
    title: "크래미 랩",
    category: "wrap",
    price: "6,500원",
    image: "./images/menu15.jpg",
    onlyNaver: false,
    desc: "저지방 저칼로리로 가볍게 먹는 랩<br> <span style='font-size: 0.7em;'>또띠아랩 + 소스2종 + 샐러드 + 크래미 + 토마토 + 에그스프레드</span>",
  },
  {
    id: 16,
    title: "소시지 랩",
    category: "wrap",
    price: "6,500원",
    image: "./images/menu16.jpg",
    onlyNaver: false,
    desc: "뽀득 짭짤 소시지가 취저<br> <span style='font-size: 0.7em;'>또띠아랩 + 소스2종 + 샐러드 + 소시지 + 토마토 + 에그스프레드</span>",
  },
  {
    id: 17,
    title: "치킨 랩",
    category: "wrap",
    price: "6,500원",
    image: "./images/menu17.jpg",
    onlyNaver: true,
    desc: "바삭하게 튀킨 치킨과 무농약 야채의 건강한 맛<br> <span style='font-size: 0.7em;'>또띠아랩 + 소스2종 + 샐러드 + 치킨패티 + 에그스프레드</span>",
  },
  {
    id: 18,
    title: "핫새우 랩",
    category: "wrap",
    price: "6,500원",
    image: "./images/menu18.png",
    onlyNaver: true,
    desc: "탱클한 새우가 가득 매운 야식에 제격<br> <span style='font-size: 0.7em;'>또띠아랩 + 핫칠리소스 + 샐러드 + 새우6개 + 할라피뇨</span>",
  },
  {
    id: 19,
    title: "제주위트에일",
    category: "alcohol",
    price: "4,000원",
    image: "./images/menu19.png",
    onlyNaver: true,
    desc: "산뜻한 끝 맛을 선사하는 제주의 향기 같은 밀맥주 <br> <span style='font-size: 0.7em;'>제주 감귤 껍질 + 꽃향</span>",
  },
  {
    id: 20,
    title: "제주거멍에일",
    category: "alcohol",
    price: "4,000원",
    image: "./images/menu20.png",
    onlyNaver: true,
    desc: "제주의 여름밤을 떠올리게 하는 경쾌한 흑맥주<br> <span style='font-size: 0.7em;'>제주 흑보리 + 초콜릿 밀</span>",
  },
  {
    id: 21,
    title: "제주누보",
    category: "alcohol",
    price: "4,000원",
    image: "./images/menu21.png",
    onlyNaver: true,
    desc: "맛을 포기하지 않은 프리미엄 논알콜 <br> <small>제주산 햇감귤피</small>",
  },
  {
    id: 22,
    title: "짐빔 얼그레이",
    category: "alcohol",
    price: "4,900원",
    image: "./images/menu22.jpg",
    onlyNaver: true,
    desc: "짐빔과 얼그레이의 환상 조합 그리고 제로칼로리<br> <small>짐빔 위스키 + 얼그레이</small>",
  },
  {
    id: 23,
    title: "짐빔 블루레몬",
    category: "alcohol",
    price: "4,900원",
    image: "./images/menu23.jpg",
    onlyNaver: true,
    desc: "짐빔과 블루레몬 그리고 제로칼로리<br> <span style='font-size: 0.7em;'>짐빔 위스키 + 블루레몬</span>",
  },
  {
    id: 24,
    title: "짐빔 자몽",
    category: "alcohol",
    price: "4,900원",
    image: "./images/menu24.png",
    onlyNaver: true,
    desc: "짐빔과 쌉쌀한 자몽 그리고 제로칼로리<br> <span style='font-size: 0.7em;'>짐빔 위스키 + 자몽</span>",
  },
];

export default menu;
