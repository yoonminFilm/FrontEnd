/**
 * CDN Configuration
 *
 * 이미지 및 정적 자산을 위한 CDN URL 관리
 * 환경변수를 통해 S3 직접 접근 또는 CloudFront CDN 간 전환 가능
 */

// CDN Base URL (환경변수로 관리)
export const CDN_URL = process.env.REACT_APP_CDN_URL ||
  "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com";

/**
 * 이미지 URL 생성 헬퍼 함수
 * @param {string} path - 이미지 경로 (예: "EU25/Italy1.jpg")
 * @returns {string} 완전한 이미지 URL
 */
export const getImageUrl = (path) => {
  // 이미 전체 URL인 경우 그대로 반환
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // 슬래시로 시작하는 경우 제거
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  return `${CDN_URL}/${cleanPath}`;
};

/**
 * 여러 이미지 URL 생성
 * @param {string[]} paths - 이미지 경로 배열
 * @returns {string[]} 완전한 이미지 URL 배열
 */
export const getImageUrls = (paths) => {
  return paths.map(path => getImageUrl(path));
};

// 프로젝트별 이미지 경로 상수
export const IMAGE_PATHS = {
  PROFILE: "p_img_1.JPG",
  SHOP_EXAMPLE: "shopImg/shopImgExample.JPG",
  PROJECTS: {
    EU25_MAIN: "EU25/Italy1.jpg",
    DIGITAL_MAIN: "film_main_img.jpg",
    FILM_MAIN: "ProjectFilmWork/DailyGreen5.jpg",
    URBAN_PATTERN_MAIN: "ProjectUrbanPatternWork/urbanpattern_1.jpg",
    REFLECTING_CITY_MAIN: "urbanpattern_main_img.jpg",
    SNAP_MAIN: "snap_main_image.JPG",
  },
  SHOP: "shop_example_img.jpg",
};

export default CDN_URL;
