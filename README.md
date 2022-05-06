
<div class="wrap-ep1">吃货星球™</div>
<div class="wrap-ep2">微信小程序部署文档</div>
<div class="wrap-ep3">本文档适用于微信小程序V3.6以上版本及新版小程序，旨在为您提供便捷的操作指南。请使用导航栏或搜索工具快速定位您的需求。</div>
<a class="wrap-ep4" href="config/start.md">开始查看</a>

<style>
.page-footer{
    display: none;
}
#book-search-input {
    display:none;
}
.wrap-ep1{
    position: absolute;
    display: block;
    pointer-events: auto;
    z-index: 18;
    font-family: "Fira Sans";
    height: auto;
    width: auto;
    left: 10vh;
    bottom: 37vh;
    color: rgb(255, 255, 255);  
    text-decoration: none;
    white-space: pre-wrap;
    min-height: 0;
    min-width: 0;
    max-height: none;
    max-width: none;
    text-align: left;
    line-height: 120px;
    letter-spacing: 0;
    font-weight: 500;
    font-size: 90px;
    transform-origin: 50% 50%;
    opacity: 1;
    transform: translate(0px, 0px);
    visibility: visible;
    
}
.wrap-ep2{
    position: absolute;
    display: block;
    pointer-events: auto;
    z-index: 18;
    font-family: "Fira Sans";
    height: auto;
    width: auto;
    left: 10vh;
    bottom: 30vh;
    color: rgb(255, 255, 255);
    text-decoration: none;
    white-space: pre-wrap;
    min-height: 0px;
    min-width: 0px;
    max-height: none;
    max-width: none;
    text-align: left;
    line-height: 55px;
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 40px;
    transform-origin: 50% 50%;
    opacity: 1;
    transform: translate(0px, 0px);
    visibility: visible;
}
.wrap-ep3{
    position: absolute;
    display: block;
    pointer-events: auto;
    z-index: 18;
    font-family: "Fira Sans";
    height: auto;
    width: auto;
    left: 10vh;
    right: 20vh;
    bottom: 20vh;
    color: rgb(255, 255, 255);
    text-decoration: none;
    white-space: pre-wrap;
    min-height: 0;
    min-width: 0;
    max-height: none;
    max-width: none;
    text-align: left;
    line-height: 30px;
    letter-spacing: 0;
    font-weight: 400;
    font-size: 20px;
    transform-origin: 50% 50%;
    opacity: 1;
    transform: translate(0px, 0px);
    visibility: visible;
}
.wrap-ep4{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.75)!important;
    display: block;
    pointer-events: auto;
    z-index: 18;
    font-family: "Fira Sans";
    height: auto;
    width: 280px;
    left: 10vh;
    padding: 16px 10px;
    bottom: 10vh;
    color: rgb(255, 255, 255)!important;
    text-decoration: none;
    white-space: pre-wrap;
    min-height: 0;
    min-width: 0;
    max-height: none;
    max-width: none;
    text-align: center;
    line-height: 30px;
    letter-spacing: 0;
    font-weight: 700;
    font-size: 18px;
    transform-origin: 50% 50%;
    opacity: 1;
    transform: translate(0px, 0px);
    visibility: visible;
}

.body-inner{
    z-index: 8;
    background: linear-gradient(115deg, rgba(24,117,200,0.71) 0%, rgba(91,178,255,0.71) 100%);
    color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    min-height: 0;
    min-width: 0;
    max-height: none;
    max-width: none;
    transform-origin: 50% 50%;
    opacity: 1;
    transform: translate(0px, 0px);
    visibility: visible;
}

.page-inner{
    height: calc(100vh - 50px);
}

.book-body{
	background-image: url("./im003.jpg");
	background-repeat: no-repeat;
	background-size: cover; 
	background-position: 50% 50%; 
	opacity: 1; 
	transform: translate(0px, 0px); 
	visibility: inherit; 
	z-index: 20;
}
@media (max-width: 1240px){
.page-inner{
    height: calc(100vh - 120px);
}
.book-body {
    padding-bottom: 0px;
}
.book-body .body-inner {
    position: static;
    height: calc(100vh - 70px);
}
.wrap-ep1{
    font-size: 50px;
    left: 5vh;
    right: 5vh;
    bottom: 37vh;
}
.wrap-ep2{
    font-size: 22px;
    left: 5vh;
    right: 5vh;
    bottom: 32vh;
}
.wrap-ep3{
    font-size: 13px;
    left: 5vh;
    right: 5vh;
}
.wrap-ep4{
    font-size: 18px;
    left: 5vh;
    right: 5vh;
}
}
</style>
