<template>
    <div class="flex mb-6">
        <div class="my-photo">
            <img src="../../assets/mask-group.png" alt="">
            <img src="../../assets/Group-26566.png" alt="" style=" position: absolute;top:0px;">
            <img src="../../assets/Icon5.png" alt="" style=" position: absolute;bottom:0px;right: 0px;">
        </div>
        <div style="padding-top:9px;">
            <div class="font-bold" style="font-size: 22px;">Daniel Travis</div>
            <div class="font-medium text-xs" style="opacity: 0.45;">加入学习105天</div>
        </div>
    </div>
    <div class="my-money flex justify-between">
        <div class="flex opacity-100">
            <div style="margin-right:10px;">
                <img src="../../assets/Income.png" alt="">
            </div>

            <div class="opacity-100 my-rmb">
                <p>¥4,500</p>
                <p>我的收入</p>
            </div>
        </div>
        <div class="flex mt-2">
            <span class="mr-2">收支详情</span>
            <img src="../../assets/Arrow-Right.png" alt="" style="height:16px;width:16px;">
        </div>
    </div>
</template>
<style>
.my-photo {
    width: 68px;
    height: 68px;
    background-color: white;
    border-radius: 50%;
    margin-right: 24px;
    position: relative;
}

.my-money {
    width: 100%;
    background: #dcf6f1;
    padding-top: 20px;
    padding-left: 18px;
    padding-right: 14px;
    border-radius: 16px;
    height: 79px;
}

.my-rmb {
    color: #12BFA2;
}

.my-rmb p:nth-child(1) {
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
}

.my-rmb p:nth-child(2) {
    font-weight: 500;
    font-size: 12px;
    line-height: 140%;
    opacity: 0.6;
}

.my-money span {
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #12BFA2;
}
</style>