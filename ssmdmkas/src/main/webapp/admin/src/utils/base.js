const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmdmkas/",
            name: "ssmdmkas",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmdmkas/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微信小程序的学生选课系统"
        } 
    }
}
export default base
