<template>
    <div class="box">
        <div class="box_o">
            <div class="content">
                <p class="title">收款码</p>
                <img src="@/assets/1.jpg.jpg" alt="" />
                <p class="user">王发财 &nbsp; &nbsp;(123****4567)</p>
                <p class="note">
                    备注：系统默认收取10%的手续费，用户也可以根据实际情况，手动点击手续费比例调整，点击【确认修改】生成新的收款码
                </p>
            </div>
            <button @click="sxf">手续费比例</button>
            <button @click="storedValue">我要储值</button>
        </div>
    </div>
</template>

<script>
export default {

    methods:{
        storedValue(){
            this.$router.push('/storedvalue')
        },
        sxf(){
            this.$router.push('/servicecharge')
        }
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.box {
    height: 800px;
    margin: 0 auto;
    text-align: center;
    background: linear-gradient(#3970c3, white);
    box-sizing: border-box;
    padding-top: 20%;
}

.box_o{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.content {
    box-sizing: border-box;
    width: 345px;
    margin: 0 auto;
    height: 45%;
    background-color: aliceblue;
    border-radius: 10px;
    padding: 20px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

img {
    margin: 20px 0 10px;
    width: 50%;
    height: 50%;
}

.note {
    font-size: 14px;
    margin-top: 20px;
    text-align: left;
}

button {
    margin: 0 auto;
    width: 345px;
    height: 50px;
    line-height: 50px;
    background-color: #32c795;
    text-align: center;
    color: white;
    font-size: 18px;
    margin-top: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
}
</style>
