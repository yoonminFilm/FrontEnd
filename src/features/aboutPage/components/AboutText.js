import React from "react";
import '../pages/about-page.css';

const AboutText = ()=>{
    return(
        <>
            <div className="about-page-text">
                <h6>
                    <b>Sungmin Yoon is a photographer based in Korea.</b>
                </h6>
                <p>
                소프트웨어 개발자로 윤민 필름 계정을 운영 중이며 <br/> '사랑'과 '도시의 패턴'을 주제로 사진 및 영상 활동을 하고있다.
                </p>
                <ul>
                    <h6><b>⌜Project⌟</b></h6>
                    <li>
                        <b> Original</b><br/>
                        <p>다양한 형태의 '사랑'을 찍고 써내려가며 일상의 기록을 남긴다.</p>
                    </li>
                    <li>
                        <b> Urban pattern, Reflect cities</b><br/>
                        <p>매번 반복되는 지겨운 일상의 도시 빌딩 숲 사이에 내려 앉는 빛들을 담아낸다.<br/>
                        공간의 반복이 아닌 유기적으로 살아 숨 쉬는 도시를 표현하고자한다.</p>
                    </li>
                    <li>
                        <b> Filming & Editing(Youtube)</b><br/>
                        <a href="https://www.youtube.com/@friendly-dark-army">FDA(FriendlyDarkArmy)</a><br />
                        <a href="https://www.youtube.com/@zacchaeus.worship">삭개오 워십(zacchaeus worship)</a>
                    </li>
                </ul>
                <hr class="hr-divider"></hr>
                <h6><b>⌜History⌟</b></h6>
                <a href="https://nodeul.org/program/%ED%9B%84%EC%A7%80%ED%95%84%EB%A6%84-%ED%8F%AC%ED%86%A0%ED%8E%98%EC%8A%A4%ED%83%80-2024%E3%80%88%EC%B2%9C-%EA%B0%9C%EC%9D%98-%EA%BF%88%E3%80%89/" target="_blank">
                    2024 후지필름 포토페스타 전시에서  단사진 작가
                </a>
                <a href="https://brand.aerok.net/cityeditor_sapporo" target="_blank">
                    2024 에어로케이&필름로그 삿포로 시티 에디터
                </a>
                <hr class="hr-divider"></hr>
                <h6><b>⌜Featured in⌟</b></h6>
                <p>Fujifilm, Monthlyphoto(월간사진), Classics Film Club, AeroK & Flimlog</p>
                <br/>
            </div>
        </>
    );
}
export default AboutText;