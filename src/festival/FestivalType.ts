// 전역으로 쓸 때는 지금처럼 다른 파일 만들어서 type 작성해 주기
// 사용하지 않는 속성은 안 써도 됨
// export interface FestivalType {
//     ADDR1: string,
//     ADDR2: string,
//     CNTCT_TEL: string,
//     GUGUN_NM: string,
//     HOMEPAGE_URL: string,
//     ITEMCNTNTS: string,
//     LAT: number,
//     LNG: number,
//     MAIN_IMG_NORMAL: string,
//     MAIN_IMG_THUMB: string,
//     MAIN_PLACE: string,
//     MAIN_TITLE: string,
//     MIDDLE_SIZE_RM1: string,
//     PLACE: string,
//     SUBTITLE: string,
//     TITLE: string,
//     TRFC_INFO: string,
//     // UC_SEQ: number,
//     USAGE_AMOUNT: string,
//     USAGE_DAY: string,
//     USAGE_DAY_WEEK_AND_TIME: string
// }

export interface FestivalType {
    [key : string] : string | number,       // 키 공통으로 설정 가능
    MAIN_IMG_NORMAL: string,
    MAIN_IMG_THUMB: string,
    USAGE_DAY_WEEK_AND_TIME: string,
    TITLE: string,
    PLACE: string,
    HOMEPAGE_URL: string
}